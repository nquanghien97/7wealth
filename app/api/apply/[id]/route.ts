// import prisma from "@/lib/db";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";
import { deleteFile, uploadFile } from "@/utils/fileUpload";

// export async function GET(req: Request, { params }: { params: { id: number } }) {
//   const { id } = params
//   try {
//     const candidate_information = await prisma.candidate_information.findUnique({
//       where: {
//         id
//       }
//     })
//     return NextResponse.json(
//       {
//         message: 'Lấy thông tin CV thành công',
//         candidate_information
//       },
//       { status: 200 }
//     );
//   } catch (err) {
//     if (err instanceof Error) {
//       return NextResponse.json({ message: err.message }, { status: 500 });
//     } else {
//       return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
//     }
//   }
// }

export async function DELETE(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
  try {
    const candidate_information = await prisma.candidate_information.findUnique({
      where: {
        id: +id,
      }
    })
    if (!candidate_information) {
      return NextResponse.json({ message: 'CV không tồn tại' }, { status: 404 });
      // D:\work\7wealth\7wealth\files\pdfFiles\17310342484821730945349262Nguyen_Quang_Hien___resume.pdf
    }
    // Delete file if exists
    if(candidate_information.file) {
      await deleteFile(candidate_information.file)
    }

    await prisma.candidate_information.delete({
      where: {
        id: +id
      }
    })
    return NextResponse.json(
      {
        message: 'Xóa CV thành công',
      },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}