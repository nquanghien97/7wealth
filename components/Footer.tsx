import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-[#235932] text-white max-lg:px-8">
      <div className="max-w-6xl m-auto py-10">
        <div className="flex max-lg:flex-col gap-4 mb-4">
          <div className="w-full md:w-[40%]">
            <h2 className="text-xl font-semibold">Thương Hiệu 7Wealth</h2>
            <ul>
              <li>Address: 72 Đ.Nguyễn Trãi, Khu đô thị Royal City, Thanh xuân, Hà Nội</li>
              <li>Phone: 0911 277 869</li>
              <li>Website: 7wealth.com</li>
              <li>Email: 7wealth@gmail.com</li>
            </ul>
          </div>
          <div className="w-full md:w-[38%]">
            <h2 className="text-xl font-semibold">Các sản phẩm</h2>
            <div className="flex">
              <ul className="flex-1">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
              <ul className="flex-1">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-[22%]">
            <h2 className="text-xl font-semibold">Chính sách chung</h2>
            <ul>
              <li>
                <Link href='/'>Hướng dẫn mua hàng và Thanh toán</Link>
              </li>
              <li>
                <Link href='/'>Chính sách bảo hành và đổi trả</Link>
              </li>
              <li>
                <Link href='/'>Chính sách thi công lắp đặt</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center">@Copyright 2024</p>
      </div>
    </footer>
  )
}

export default Footer