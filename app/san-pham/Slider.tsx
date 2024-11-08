'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CartIcon from '@/assets/icons/CartIcon';
import StarIcon from '@/assets/icons/StarIcon';
import { useRouter } from 'next/navigation';
import { formatCurrency } from '@/utils/formatCurrency';

interface SliderProps {
  id: number;
  name: string;
  images: {
    id: number;
    imageUrl: string;
  }[];
  description: string;
  details: string;
  price: string;
  slug: string;
}

function Slider(props: { data: SliderProps[] }) {
  const router = useRouter()
  const { data } = props;
  if(!data) return (
    <p className="text-center py-16">Không có sản phẩm !</p>
  )
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
            slidesPerView: data.length,
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
            <div onClick={() => router.push(`/san-pham/${product.slug}`)} className="flex flex-col">
              <div className="overflow-visible mb-4 py-8 m-auto flex-1">
                <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${product.images[0].imageUrl}`} alt={product.name} width={1024} height={716} className='w-full h-[400px] object-cover hover:scale-110 duration-500 rounded-2xl' />
              </div>
              <div className="flex justify-center">
                <div className='py-2 text-center mb-4'>
                  <div className="flex justify-center mb-2">
                    <StarIcon width={16} height={16} />
                    <StarIcon width={16} height={16} />
                    <StarIcon width={16} height={16} />
                    <StarIcon width={16} height={16} fill="#ccc" />
                    <StarIcon width={16} height={16} fill="#ccc" />
                  </div>
                  <p className='text-sm uppercase text-[#555]'>{product.name}</p>
                  <div className="text-[black] mb-4 text-xl" dangerouslySetInnerHTML={{ __html: product.details }} />
                  <div className="flex items-center justify-between border border-[#555] rounded-full px-8 py-2 hover:bg-[#555] hover:text-white duration-500 group">
                    <p className="font-semibold px-4">{formatCurrency(product.price)} VNĐ</p>
                    <div className="w-[2px] h-4 bg-[#555] group-hover:bg-[white] duration-500" />
                    <Link href={`/san-pham/${product.slug}`} className="px-4">Shop now</Link>
                  </div>
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