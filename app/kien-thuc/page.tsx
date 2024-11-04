import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Knowledge() {
  return (
    <main className="bg-[#f2f2f2]">
      <section>
        <Image src="/banner.jpg" alt="" width={1920} height={500} className="max-md:hidden" />
        <Image src="/banner-sp.jpg" alt="" width={673} height={487} className="md:hidden" />
        <div className="max-w-screen-xl m-auto">
          <div className="relative">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-2xl font-semibold mb-8">Ngôi nhà sức khỏe của bạn</p>
              <h2 className="text-5xl font-bold mb-4">Wellness<br />Home</h2>
              <p>Thấu hiểu sức khỏe và sắc đẹp thông qua 6 chìa khóa</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 max-w-screen-xl m-auto">
        <div className="border-b border-[#ccc] py-5 px-2 mb-8">
          <ul className="flex gap-6 py-4 overflow-auto whitespace-nowrap">
            <li className="uppercase">Dinh dưỡng</li>
            <li className="uppercase">Tâm thức</li>
            <li className="uppercase">Thể chất</li>
            <li className="uppercase">Thấu hiểu cơ thể bạn</li>
            <li className="uppercase">Nguồn nguyên liệu</li>
            <li className="uppercase">Làm đẹp</li>
          </ul>
        </div>
        <div className="px-2">
          <h2 className="text-3xl text-[#235932] uppercase mb-4">Được tìm đọc nhiều nhất</h2>
          <div className="flex gap-8 max-md:flex-col">
            <div className="flex">
              <div className="flex-1 p-4 rounded-l-2xl bg-white">
                <p className="text-[#235932] font-bold mb-2 hover:text-[red] duration-300 cursor-pointer">Curious About Salicylic Acid? Discover What It Is And How To Use It</p>
                <p className="text-[#235932] mb-2">Curious About Salicylic Acid? Discover What It Is And How To Use It</p>
                <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
              </div>
              <div className="flex flex-1">
                <Image src="/Salicylic_2_1920x1200.jpg" alt="" width={1920} height={1200} className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex">
                <div className="flex-1 p-4 rounded-l-2xl bg-white">
                  <p className="text-[#235932] font-bold mb-2 hover:text-[red] duration-300 cursor-pointer">Curious About Salicylic Acid? Discover What It Is And How To Use It</p>
                  <p className="text-[#235932] mb-2">Curious About Salicylic Acid? Discover What It Is And How To Use It</p>
                  <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
                </div>
                <div className="flex flex-1">
                  <Image src="/Salicylic_2_1920x1200.jpg" alt="" width={1920} height={1200} />
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 p-4 rounded-l-2xl bg-white">
                  <p className="text-[#235932] font-bold mb-2 hover:text-[red] duration-300 cursor-pointer">Curious About Salicylic Acid? Discover What It Is And How To Use It</p>
                  <p className="text-[#235932] mb-2">Curious About Salicylic Acid? Discover What It Is And How To Use It</p>
                  <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
                </div>
                <div className="flex flex-1">
                  <Image src="/Salicylic_2_1920x1200.jpg" alt="" width={1920} height={1200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-screen-xl m-auto">
          <h2 className="text-3xl text-[#235932] uppercase mb-4 px-2">Nội dung phổ biến</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/4 px-2 mb-4">
              <Image src="/example1.jpg" alt="t1" width={1920} height={1200} className="rounded-t-md" />
              <div className="p-2 border-x border-b border-[#ccc] rounded-b-md">
                <p className="text-[#235932] font-semibold mb-4 hover:text-[red] cursor-pointer duration-300">We’re Shaking Up Social Media With Digital Minimalism</p>
                <p className="text-[#235932] mb-4">Learn about how Swisse is embracing ‘conscious...</p>
                <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
              </div>
            </div>
            <div className=" w-1/2 md:w-1/4 px-2 mb-4">
              <Image src="/example1.jpg" alt="t1" width={1920} height={1200} className="rounded-t-md" />
              <div className="p-2 border-x border-b border-[#ccc] rounded-b-md">
                <p className="text-[#235932] font-semibold mb-4 hover:text-[red] cursor-pointer duration-300">We’re Shaking Up Social Media With Digital Minimalism</p>
                <p className="text-[#235932] mb-4">Learn about how Swisse is embracing ‘conscious...</p>
                <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
              </div>
            </div>
            <div className=" w-1/2 md:w-1/4 px-2 mb-4">
              <Image src="/example1.jpg" alt="t1" width={1920} height={1200} className="rounded-t-md" />
              <div className="p-2 border-x border-b border-[#ccc] rounded-b-md">
                <p className="text-[#235932] font-semibold mb-4 hover:text-[red] cursor-pointer duration-300">We’re Shaking Up Social Media With Digital Minimalism</p>
                <p className="text-[#235932] mb-4">Learn about how Swisse is embracing ‘conscious...</p>
                <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
              </div>
            </div>
            <div className=" w-1/2 md:w-1/4 px-2 mb-4">
              <Image src="/example1.jpg" alt="t1" width={1920} height={1200} className="rounded-t-md" />
              <div className="p-2 border-x border-b border-[#ccc] rounded-b-md">
                <p className="text-[#235932] font-semibold mb-4 hover:text-[red] cursor-pointer duration-300">We’re Shaking Up Social Media With Digital Minimalism</p>
                <p className="text-[#235932] mb-4">Learn about how Swisse is embracing ‘conscious...</p>
                <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-screen-xl m-auto">
          <h2 className="text-3xl text-[#235932] uppercase mb-2 px-2">WE ALL HAVE A REASON</h2>
          <p className="text-[#235932] px-2 mb-8">A reason that drives us. The reason may be obvious, but often we will need to look deep inside ourselves to find it.</p>
          <div className="px-2 relative">
            <Image src="/em-be.jpg" alt="em-be" width={3333} height={2232} className="rounded-2xl" />
            <div className="absolute bottom-8 left-8 bg-white p-10 max-w-[40%] rounded-2xl max-md:hidden">
              <h3 className="text-[#235932] text-2xl font-bold mb-2">How Do You Know If Your Child Is Meeting Their Nutritional Needs?</h3>
              <p className="mb-2">What our kids eat is a major concern for many parents...</p>
              <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
            </div>
            <div className="md:hidden bg-white p-8 rounded-2xl">
              <h3 className="text-[#235932] text-2xl font-bold mb-2">How Do You Know If Your Child Is Meeting Their Nutritional Needs?</h3>
              <p className="mb-2">What our kids eat is a major concern for many parents...</p>
              <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8">
        <div className="px-2 max-w-screen-xl m-auto">
          <h2 className="text-3xl text-[#235932] uppercase mb-4">Khám phá thêm</h2>
          <div className="flex gap-8 max-md:flex-col">
            <div className="flex flex-col w-full md:w-1/2">
              <div className="flex flex-1">
                <Image src="/TIU_1920x1200_1.jpg" alt="" width={1920} height={1200} className="object-cover rounded-t-2xl" />
              </div>
              <div className="flex-1 p-4 rounded-b-2xl bg-white">
                <p className="text-[#235932] font-bold mb-4 hover:text-[red] duration-300 cursor-pointer text-2xl">That Time When The Inspired Unemployed Tried The 9-5</p>
                <p className="text-[#235932] mb-4">Curious About Salicylic Acid? Discover What It Is And How To Use It</p>
                <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex">
                <div className="flex flex-1">
                  <Image src="/Salicylic_2_1920x1200.jpg" alt="" width={1920} height={1200} className="rounded-l-2xl" />
                </div>
                <div className="flex flex-col justify-center flex-1 p-4 bg-white">
                  <p className="text-[#235932] font-bold mb-2 hover:text-[red] duration-300 cursor-pointer">Surviving Your First Week At A New Job</p>
                  <div className="flex">
                    <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-1">
                  <Image src="/Salicylic_2_1920x1200.jpg" alt="" width={1920} height={1200} className="rounded-l-2xl" />
                </div>
                <div className="flex flex-col justify-center flex-1 p-4 bg-white">
                  <p className="text-[#235932] font-bold mb-2 hover:text-[red] duration-300 cursor-pointer">Surviving Your First Week At A New Job</p>
                  <div className="flex">
                    <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-1">
                  <Image src="/Salicylic_2_1920x1200.jpg" alt="" width={1920} height={1200} className="rounded-l-2xl" />
                </div>
                <div className="flex flex-col justify-center flex-1 p-4 bg-white">
                  <p className="text-[#235932] font-bold mb-2 hover:text-[red] duration-300 cursor-pointer">Surviving Your First Week At A New Job</p>
                  <div className="flex">
                    <Link href="#" className="uppercase border-b border-black py-1 hover:text-[red] hover:border-none">READ NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Knowledge