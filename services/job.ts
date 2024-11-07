import { JobEntity } from "@/entities/job.entity";

export async function getJobs({ page, pageSize, phone_number, full_name }: { page?: number, pageSize?: number, phone_number?: string, full_name?: string }) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (phone_number) params.append('phone_number', phone_number.toString());
  if (full_name) params.append('full_name', full_name.toString());
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/job?${params.toString()}`)
  return res.json()
}

export async function getJobsBySlug(slug: string): Promise<JobEntity> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/job/${slug}`)
  return res.json()
}