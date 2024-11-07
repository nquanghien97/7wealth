'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CartIcon from '@/assets/icons/CartIcon';
import StarIcon from '@/assets/icons/StarIcon';
import { useRouter } from 'next/navigation';

interface SliderProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  path: string;
}

function Slider(props: { data: SliderProps[] }) {
  const router = useRouter()
  const { data } = props;
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination]}
        className='flex justify-center'
      >
        {data.map(product => (
          <SwiperSlide
            key={product.id}
            className='w-full pb-6 cursor-pointer'
          >
            <div onClick={() => router.push(`/san-pham/${product.path}`)}>
              <div className="overflow-hidden mb-4">
                <Image src={`${product.image}`} alt={product.name} width={1024} height={716} className='w-full md:w-[360px] hover:scale-110 duration-500 rounded-2xl' />
              </div>
              <div className='py-2 text-center mb-4'>
                <div className="flex justify-center mb-2">
                  <StarIcon width={16} height={16} />
                  <StarIcon width={16} height={16} />
                  <StarIcon width={16} height={16} />
                  <StarIcon width={16} height={16} fill="#ccc" />
                  <StarIcon width={16} height={16} fill="#ccc" />
                </div>
                <p className='text-sm uppercase text-[#555]'>{product.name}</p>
                <p className="text-[black] mb-4 text-xl">{product.description}</p>
                <div className="flex items-center justify-between border border-[#555] rounded-full px-8 py-2 hover:bg-[#555] hover:text-white duration-500 group">
                  <p className="font-semibold">330.000 VNĐ</p>
                  <div className="w-[2px] h-4 bg-[#555] group-hover:bg-[white] duration-500" />
                  <Link href="/">Shop now</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider