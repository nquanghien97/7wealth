import BodySection from '@/components/HomePage/BodySection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section className="relative mb-8">
        <Image src="/banner.png" alt="banner" width={1903} height={728} className="w-full" />
      </section>
      <BodySection />
    </main>
  )
}
