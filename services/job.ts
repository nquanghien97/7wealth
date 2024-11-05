import { JobEntity } from "@/entities/job.entity";

export async function getJobs({ page, pageSize, job_name, location }: { page?: number, pageSize?: number, job_name?: string, location?: string }) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (job_name) params.append('job_name', job_name.toString());
  if (location) params.append('location', location.toString());
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/job?${params.toString()}`)
  return res.json()
}

export async function getJobsBySlug(slug: string): Promise<JobEntity> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/job/${slug}`)
  return res.json()
}