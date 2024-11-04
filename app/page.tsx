import BodySection from '@/components/HomePage/BodySection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section className="relative mb-8">
        <Image src="/banner.png" alt="banner" width={1903} height={728} className="w-full" />
      </section>
      <BodySection />
      <section className="mb-16">
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
            <div className="relative">
              <Image src="/t1.png" alt="t1" width={406} height={679} />
              <div className="absolute top-4 left-4 px-2 py-1 bg-[#235932] rounded-md">
                <p className="text-white">Quảng bá sản phẩm</p>
              </div>
              <div className="absolute bottom-6 left-4 max-w-[75%]">
                <p className="text-white mb-2">Quảng bá sản phẩm - Tri thức nhân sinh - Sứ mệnh đam mê</p>
                <button className="text-white px-2 py-1 border border-white rounded-md">Đọc ngay</button>
              </div>
            </div>
            <div className="relative">
              <Image src="/t1.png" alt="t1" width={406} height={679} />
              <div className="absolute top-4 left-4 px-2 py-1 bg-[#235932] rounded-md">
                <p className="text-white">Quảng bá sản phẩm</p>
              </div>
              <div className="absolute bottom-6 left-4 max-w-[75%]">
                <p className="text-white mb-2">Quảng bá sản phẩm - Tri thức nhân sinh - Sứ mệnh đam mê</p>
                <button className="text-white px-2 py-1 border border-white rounded-md">Đọc ngay</button>
              </div>
            </div>
            <div className="relative">
              <Image src="/t1.png" alt="t1" width={406} height={679} />
              <div className="absolute top-4 left-4 px-2 py-1 bg-[#235932] rounded-md">
                <p className="text-white">Quảng bá sản phẩm</p>
              </div>
              <div className="absolute bottom-6 left-4 max-w-[75%]">
                <p className="text-white mb-2">Quảng bá sản phẩm - Tri thức nhân sinh - Sứ mệnh đam mê</p>
                <button className="text-white px-2 py-1 border border-white rounded-md">Đọc ngay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex justify-center items-center flex-col mb-4">
          <div className="mb-4">
            <h1 className="text-[#235932] text-3xl font-bold uppercase">Tin tức mới nhất của doanh nghiệp</h1>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto">
          <div className="flex justify-center flex-wrap gap-4">
            <div className="relative">
              <Image src="/tt1.png" alt="t1" width={406} height={679} />
              <div className="absolute bottom-6 left-4 max-w-[75%]">
                <p className="text-[#235932] uppercase font-semibold">Triết lý dinh dưỡng toàn cầu</p>
                <div className="w-1/4 h-[3px] bg-[#235932] mb-2" />
                <button className="">Về 7wealth</button>
              </div>
            </div>
            <div className="relative">
              <Image src="/tt2.png" alt="t1" width={406} height={679} />
              <div className="absolute bottom-6 left-4 max-w-[75%]">
                <p className="text-[#235932] uppercase font-semibold">Triết lý dinh dưỡng toàn cầu</p>
                <div className="w-1/4 h-[3px] bg-[#235932] mb-2" />
                <button className="">Về 7wealth</button>
              </div>
            </div>
            <div className="relative">
              <Image src="/tt3.png" alt="t1" width={406} height={679} />
              <div className="absolute bottom-6 left-4 max-w-[75%]">
                <p className="text-[#235932] uppercase font-semibold">Triết lý dinh dưỡng toàn cầu</p>
                <div className="w-1/4 h-[3px] bg-[#235932] mb-2" />
                <button className="">Về 7wealth</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex justify-center items-center flex-col mb-4">
          <div className="mb-4">
            <h1 className="text-[#235932] text-3xl font-bold uppercase">Cơ hội kinh doanh</h1>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto">
          <div className="flex justify-center flex-wrap">
            <div className="max-w-[50%-4px] mb-2 md:max-w-[calc(25%-4px)] w-full px-2">
              <Image src="/example1.jpg" alt="t1" width={1920} height={1200} className="rounded-t-md" />
              <div className="p-2 border-x border-b border-[#ccc] rounded-b-md">
                <p className="text-[#235932] font-semibold mb-4">We’re Shaking Up Social Media With Digital Minimalism</p>
                <p className="text-[#235932] mb-4">Learn about how Swisse is embracing ‘conscious...</p>
                <button className="">Xem thêm {'>'}</button>
              </div>
            </div>
            <div className="max-w-[50%-4px] mb-2 md:max-w-[calc(25%-4px)] w-full px-2">
              <Image src="/example1.jpg" alt="t1" width={1920} height={1200} className="rounded-t-md" />
              <div className="p-2 border-x border-b border-[#ccc] rounded-b-md">
                <p className="text-[#235932] font-semibold mb-4">We’re Shaking Up Social Media With Digital Minimalism</p>
                <p className="text-[#235932] mb-4">Learn about how Swisse is embracing ‘conscious...</p>
                <button className="">Xem thêm {'>'}</button>
              </div>
            </div>
            <div className="max-w-[50%-4px] mb-2 md:max-w-[calc(25%-4px)] w-full px-2">
              <Image src="/example1.jpg" alt="t1" width={1920} height={1200} className="rounded-t-md" />
              <div className="p-2 border-x border-b border-[#ccc] rounded-b-md">
                <p className="text-[#235932] font-semibold mb-4">We’re Shaking Up Social Media With Digital Minimalism</p>
                <p className="text-[#235932] mb-4">Learn about how Swisse is embracing ‘conscious...</p>
                <button className="">Xem thêm {'>'}</button>
              </div>
            </div>
            <div className="max-w-[50%-4px] mb-2 md:max-w-[calc(25%-4px)] w-full px-2">
              <Image src="/example1.jpg" alt="t1" width={1920} height={1200} className="rounded-t-md" />
              <div className="p-2 border-x border-b border-[#ccc] rounded-b-md">
                <p className="text-[#235932] font-semibold mb-4">We’re Shaking Up Social Media With Digital Minimalism</p>
                <p className="text-[#235932] mb-4">Learn about how Swisse is embracing ‘conscious...</p>
                <button className="">Xem thêm {'>'}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
