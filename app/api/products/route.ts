import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { File } from 'formdata-node';
import { deleteFile, uploadFile } from "@/utils/fileUpload";
import { createSlug } from "@/utils/createSlug";
import { TypeProduct } from "@prisma/client";

// const enum TypeProduct {
//   VitaminKhoangChat = "VitaminKhoangChat",
//   DieuTriBenhLy = "DieuTriBenhLy",
//   ChamSocCaNhan = "ChamSocCaNhan",
// }
export async function POST(req: Request) {
  let filenames: string[] = [];

  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const price = formData.get('price') as string;
    const discountPrice = formData.get('discountPrice') as string;
    const description = formData.get('description') as string;
    const details = formData.get('details') as string;
    const quantity = formData.get('quantity') as string;
    const type = formData.get('type') as unknown as TypeProduct;
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);

    const slug = createSlug(name);

    if (files.length === 0) {
      return NextResponse.json({ message: "Không file nào được chọn" }, { status: 400 });
    }
    // Upload file
    filenames = await uploadFile(files, "images/products",);

    // Bắt đầu transaction
    const newProduct = await prisma.$transaction(async (prisma) => {
      // Lưu sản phẩm mới vào database
      const product = await prisma.product.create({
        data: {
          name,
          price: +price,
          discountPrice: +discountPrice,
          description,
          details,
          slug,
          images: {
            create: filenames.map((filename) => ({
              imageUrl: `/files/images/products/${filename}`,
            })),
          },
          quantity: +quantity,
          type
        },
        include: {
          images: true,
        },
      });

      return product;
    });

    return NextResponse.json({ newProduct }, { status: 200 });
  } catch (err) {
    // Xóa các tệp đã upload nếu xảy ra lỗi
    if (filenames.length > 0) {
      await Promise.all(filenames.map((filename) => deleteFile(filename)));
    }

    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 });
    }
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') ?? '1', 10);
  const name = url.searchParams.get('name') ?? undefined;
  const pageSize = parseInt(url.searchParams.get('pageSize') ?? '10', 10);
  const type = url.searchParams.get('type') as TypeProduct | undefined
  const orderBy = url.searchParams.get('orderby') ?? 'createdAt'
  const [field, order] = orderBy.split('-')

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const whereCondition = {
    name: name ? { contains: name } : undefined,
    ...(type ? { type } : {})
  };

  try {
    const products = await prisma.product.findMany({
      include: {
        images: true
      },
      where: whereCondition,
      skip,
      take,
      orderBy: {
        [field]: order || 'asc'
      }

    })
    const total = await prisma.product.count({
      where: {
        name: {
          contains: name,
        }
      }
    })
    return NextResponse.json(
      {
        data: products,
        paging: {
          page,
          pageSize,
          total
        }
      },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      {
        message: err instanceof Error ? err.message : 'An error occurred',
      },
      { status: 500 }
    );
  }
}