import React from 'react'
import Slider from './Slider'

const data = [
  {
    id: 1,
    name: 'Tính chất ngăn ngừa lão hóa',
    image: '/example-image/seller1.png',
    price: 'Cháy hàng',
    path: '#',
    description: 'Sáng da căng bóng'
  },
  {
    id: 2,
    name: 'Tính chất ngăn ngừa lão hóa',
    image: '/example-image/seller2.png',
    price: 'Cháy hàng',
    path: '#',
    description: 'Sáng da căng bóng'
  },
  {
    id: 3,
    name: 'Tính chất ngăn ngừa lão hóa',
    image: '/example-image/seller1.png',
    price: 'Cháy hàng',
    path: '#',
    description: 'Sáng da căng bóng'
  },
  {
    id: 4,
    name: 'Tính chất ngăn ngừa lão hóa',
    image: '/example-image/seller2.png',
    price: 'Cháy hàng',
    path: '#',
    description: 'Sáng da căng bóng'
  },
  {
    id: 5,
    name: 'Tính chất ngăn ngừa lão hóa',
    image: '/example-image/seller1.png',
    price: 'Cháy hàng',
    path: '#',
    description: 'Sáng da căng bóng'
  },
  {
    id: 6,
    name: 'Tính chất ngăn ngừa lão hóa',
    image: '/example-image/seller2.png',
    price: 'Cháy hàng',
    path: '#',
    description: 'Sáng da căng bóng'
  },
]

function Product() {
  return (
    <main className="my-16">
      <section className="mb-8">
        <div className="max-w-screen-xl m-auto px-4">
          <h2 className="text-3xl text-[#235932] mb-4 uppercase">TPCN Vitamin khoáng chất</h2>
          <Slider data={data} />
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-screen-xl m-auto px-4">
          <h2 className="text-3xl text-[#235932] mb-4 uppercase">TPCN Hỗ trợ điều trị bệnh lý</h2>
          <Slider data={data} />
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-screen-xl m-auto px-4">
          <h2 className="text-3xl text-[#235932] mb-4 uppercase">Mỹ phẩm chăm sóc cá nhân</h2>
          <Slider data={data} />
        </div>
      </section>
    </main>
  )
}

export default Product