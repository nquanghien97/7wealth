import React from 'react'
import Slider from './Slider'
import { getProducts } from '@/services/products'

async function Product() {

  const { data: dataVitamin } = await getProducts({ page: 1, pageSize: 10, type: 'VitaminKhoangChat' });
  const { data: dataHotro } = await getProducts({ page: 1, pageSize: 10, type: 'DieuTriBenhLy' })
  const { data: dataMyPham } = await getProducts({ page: 1, pageSize: 10, type: 'ChamSocCaNhan' })

  return (
    <main className="my-16">
      <section className="mb-8">
        <div className="max-w-screen-xl m-auto px-4">
          <h2 className="text-3xl text-[#235932] mb-4 uppercase">TPCN Vitamin khoáng chất</h2>
          <Slider data={dataVitamin} />
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-screen-xl m-auto px-4">
          <h2 className="text-3xl text-[#235932] mb-4 uppercase">TPCN Hỗ trợ điều trị bệnh lý</h2>
          <Slider data={dataHotro} />
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-screen-xl m-auto px-4">
          <h2 className="text-3xl text-[#235932] mb-4 uppercase">Mỹ phẩm chăm sóc cá nhân</h2>
          <Slider data={dataMyPham} />
        </div>
      </section>
    </main>
  )
}

export default Product