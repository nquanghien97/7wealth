import BodySection from '@/components/HomePage/BodySection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section className="relative mb-8">
        <Image src="/banner.png" alt="banner" width={1903} height={728} className="w-full" />
      </section>
      <BodySection />
      <section>
        <div className="flex justify-center items-center flex-col mb-4">
          <div className="mb-4">
            <h1 className="text-[#235932] text-3xl font-bold uppercase">Triết lý kinh doanh</h1>
          </div>
          <div className="mb-4 text-center">
            <p className="text-[#235932] italic">Là những người yêu thiên nhiên và đam mê khám phá cội nguồn cuộc sống,</p>
            <p className="text-[#235932] italic">chúng tôi luôn kiên định với những triết lý trên hành trình kiến tạo giải pháp sức khỏe - sắc đẹp cho con người.</p>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto">
          <div className="flex justify-center flex-wrap gap-4">
            <div>
              <Image src="/t1.png" alt="t1" width={406} height={679} />
            </div>
            <div>
              <Image src="/t1.png" alt="t1" width={406} height={679} />
            </div>
            <div>
              <Image src="/t1.png" alt="t1" width={406} height={679} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
