export async function applyJob(data: FormData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/apply`, {
    method: 'POST',
    body: data,
  })
  return res.json()
}