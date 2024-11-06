import { NewsEntity } from "@/entities/news.entity";

export async function getNews({ page, pageSize }: { page?: number, pageSize?: number }) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news?${params.toString()}`)
  return res.json()
}

export async function getNewsBySlug(slug: string): Promise<NewsEntity> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news/${slug}`)
  return res.json()
}