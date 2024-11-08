import { ProductEntity } from "@/entities/products.entity";
import { TypeProduct } from "@prisma/client";

export async function getProducts({ page, pageSize, name, type }: { page?: number, pageSize?: number, name?: string, type?: TypeProduct }) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (name) params.append('name', name.toString());
  if (type) params.append('type', type.toString());
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${params.toString()}`)
  return res.json()
}

export async function getProductsBySlug(slug: string): Promise<ProductEntity> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${slug}`)
  return res.json()
}