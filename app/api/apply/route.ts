import prisma from "../../../lib/db";
import { NextResponse } from "next/server";
import { deleteFile, uploadFile } from "@/utils/fileUpload";
import { File } from 'formdata-node';

export async function POST(req: Request) {
  let filenames: string[] = [];
  try {
    const formData = await req.formData();
    const availability_time = formData.get('availability_time') as string;
    const current_address = formData.get('current_address') as string;
    const date_of_birth = formData.get('date_of_birth') as string;
    const education = formData.get('education') as string;
    const email = formData.get('email') as string;
    const content = formData.get('content') as string;
    const full_name = formData.get('full_name') as string;
    const phone_number = formData.get('phone_number') as string;
    const salary_expect = formData.get('salary_expect') as string;
    const years_of_experience = formData.get('years_of_experience') as string;
    const job_id = +(formData.get('job_id') || 0);
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);
    if (files.length === 0) {
      return NextResponse.json({ message: "Không file nào được chọn" }, { status: 400 });
    }
    filenames = await uploadFile(files, "pdfFiles");
    const data = await prisma.candidate_information.create({
      data: {
        availability_time,
        current_address,
        date_of_birth,
        education,
        email,
        content,
        full_name,
        phone_number,
        salary_expect,
        years_of_experience,
        job_id,
        file: `/files/pdfFiles/${filenames[0]}`
      }
    })
    return NextResponse.json({ data }, { status: 200 })
  } catch (err) {
    if (filenames.length > 0) {
      await Promise.all(filenames.map((filename) => deleteFile(filename)));
    }
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') ?? '1', 10);
  const pageSize = parseInt(url.searchParams.get('pageSize') ?? '10', 10);
  const full_name = url.searchParams.get('full_name');
  const phone_number = url.searchParams.get('phone_number');

  const skip = (page - 1) * pageSize;
  const take = pageSize;
  try {
    const data = await prisma.candidate_information.findMany({
      where: {
        ...(full_name && { full_name: { contains: full_name } }),
        ...(phone_number && { phone_number: { contains: phone_number } }),
      },
      skip,
      take,
      orderBy: {
        created_at: 'desc'
      }
    })
    const total = await prisma.candidate_information.count()
    return NextResponse.json(
      {
        data,
        paging: {
          page,
          pageSize,
          total
        }
      },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong"
    }, { status: 500 })
  }
}