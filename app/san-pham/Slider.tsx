'use client';

import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import CartIcon from '@/assets/icons/CartIcon';

interface SliderProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  path: string;
}

function Slider(props: { data: SliderProps[] }) {
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
            className='w-full pb-6 cursor-pointer group'
          >
            <Link href={`/san-pham/${product.path}`}>
              <div className="overflow-hidden">
                <Image src={`${product.image}`} alt={product.name} width={1024} height={716} className='w-full md:w-[360px] group-hover:scale-110 duration-500 bg-[#ededed] rounded-2xl' />
              </div>
              <div className='py-2'>
                <p className='text-base font-bold text-[#5f5d5d]'>{product.name}</p>
                <p className="text-[#235932]">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">330.000 VNĐ</p>
                  <div className="p-2 bg-[#235932] rounded-md cursor-pointer">
                    <CartIcon width={24} height={24} fill="white" />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider