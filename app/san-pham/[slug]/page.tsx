import ImageDetailsProduct from "@/components/ImageDetailsProduct"
import { ProductEntity } from "@/entities/products.entity"
import { getProductsBySlug } from "@/services/products"
import { formatCurrency } from "@/utils/formatCurrency"

export const dynamic = 'force-dynamic'

async function DetailProduct({ params } : { params : { slug : string } } ) {
  const { data } = await getProductsBySlug(params.slug) as unknown as { data : ProductEntity}
  if(!data) return <div className='text-center py-4'>Không có sản phẩm phù hợp</div>
  return (
    <div className="max-w-6xl m-auto mb-4">
      <div className="py-10 border-b-[1px] border-[#ccc]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:max-w-[40%]">
            <ImageDetailsProduct data={data.images} />
          </div>
          <div className="px-4 ml-4 flex-1">
            <div className="mb-2 max-md:mt-4">
              <h2 className="md:text-3xl text-2xl font-bold">{data.name}</h2>
            </div>
            <div className="bg-[#0000001a] h-[3px] max-w-[30px] md:my-4" />
            <div className="mb-2">
              <span className="text-2xl font-extrabold">{formatCurrency(data.price, 0)} đ</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.description }} className="my-4 description content" />
            {/* <AddCart product={data} /> */}
          </div>
        </div>
      </div>
      <div className="max-md:px-4">
        <div className="py-2">
          <p className="uppercase font-bold text-2xl">Mô tả</p>
        </div>
        <div className="py-2 content" dangerouslySetInnerHTML={{ __html: data.details }} />
      </div>
    </div>
  )
}

export default DetailProduct