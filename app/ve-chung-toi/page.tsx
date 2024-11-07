import CartIcon from "@/assets/icons/CartIcon"
import Image from "next/image"

function About() {
  return (
    <main>
      <section className="relative mb-16 bg-[url('/banner-about.jpg')] bg-[length:100%_100%]">
        <div className="py-[120px] md:py-[270px]">
          <h2 className="text-center text-white text-3xl leading-10 font-bold">
            7WEALTH GÓP PHẦN ĐƯA VIỆT NAM
            <br />
            TRỞ NÊN VĨ ĐẠI HƠN
          </h2>
        </div>
      </section>
      <section className="mb-20">
        <div className="max-w-screen-xl m-auto">
          <div className="w-3/5 m-auto mb-16">
            <p className="text-[#235932]">
              Thương hiệu 7WEALTH ra đời với sứ mệnh cao cả là trao đi giá trị giải pháp sức khỏe - sắc đẹp toàn diện cho con người để nâng tầm chất lượng cuộc sống nhân loại.
              <br />
              Chúng tôi bắt đầu 7WEALTH từ một suy nghĩ nhiều năm trước đây về việc nâng cấp chất lượng cuộc sống bằng sự kết hợp giữa công nghệ tiên tiến của thế giới và sự tiếp nối những giá trị, triết lý sống của người Việt Nam xưa.
            </p>
          </div>
          <div className="flex flex-wrap mb-16">
            <div className="w-1/2 md:w-1/3 px-2 mb-4">
              <Image src="/a2.jpg" alt="a2" width={392} height={606} className="h-full rounded-2xl" />
            </div>
            <div className="w-1/2 md:w-1/3 px-2 mb-4">
              <Image src="/a3.jpg" alt="a3" width={392} height={606} className="h-full rounded-2xl" />
            </div>
            <div className="w-1/2 md:w-1/3 px-2 mb-4">
              <Image src="/a7.jpg" alt="a7" width={392} height={606} className="h-full rounded-2xl" />
            </div>
          </div>
          <div className="w-3/5 m-auto mb-16">
            <p className="text-[#235932] mb-4">
              Xuyên suốt quá trình quan sát tìm hiểu cùng những chuyên gia, giáo sư hàng đầu Việt Nam và Thế Giới, chúng tôi nhận ra con người để hạnh phúc trọn vẹn, ta cần vun đắp 7 sự giàu có toàn diện (Trí tuệ, Tâm thái, Nhân cách, Phẩm chất, Năng lực, Thể chất, Vật chất). Chúng tôi may mắn biết bao khi nhận ra được điều này và ứng dụng chúng vào việc phát triển doanh nghiệp để tạo ra những giải pháp sức khỏe - sắc đẹp toàn diện cho con người.
            </p>
            <p className="text-[#235932]">
              Bằng kiến thức chuyên môn về dinh dưỡng, y dược và các thực nghiệm trong quá trình sản xuất cùng sự giúp đỡ của công nghệ, chúng tôi nỗ lực bảo tồn và phát triển những thực phẩm bổ sung, thực phẩm chức năng với mong muốn cung cấp nguồn dinh dưỡng đầy đủ, cân bằng, thiết yếu rồi đến nâng cấp cho lối sống khỏe, sống lành mạnh giàu có bền vững. 7WEALTH như một sự kết tinh thăng hoa giữa những giá trị cốt lõi của doanh nghiệp để kiến tạo nên một cuộc sống nhân loại giàu có toàn diện.
            </p>
          </div>
          <div className="px-2">
            <Image src="/a8.jpg" alt="a8" width={1240} height={663} className="h-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="max-w-screen-xl m-auto">
          <div className="mb-8">
            <h2 className="text-center text-3xl text-[#235932]">Các dòng sản phẩm của 7Wealth</h2>
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/4 px-2 mb-4">
              <Image src="/seller4.png" alt="" width={284} height={284} className="w-full bg-[#ededed] rounded-2xl" />
              <p className="text-center font-semibold">Tinh chất ngăn ngừa lão hóa</p>
              <p className="text-center mb-4">Sáng da căng bóng</p>
              <div className="flex justify-between px-4">
                <p className="text-[red] font-semibold">Cháy hàng</p>
                <div className="p-2 bg-[#235932] rounded-md cursor-pointer">
                  <CartIcon width={24} height={24} fill="white" />
                </div>
              </div>
            </div>
            <div className=" w-1/2 md:w-1/4 px-2 mb-4">
              <Image src="/seller4.png" alt="" width={284} height={284} className="w-full bg-[#ededed] rounded-2xl" />
              <p className="text-center font-semibold">TP BVSK NutriTrust Vitamin C</p>
              <p className="text-center mb-4">Bio C 1000mg</p>
              <div className="flex justify-between px-4">
                <p className="font-semibold">330.000 VNĐ</p>
                <div className="p-2 bg-[#235932] rounded-md cursor-pointer">
                  <CartIcon width={24} height={24} fill="white" />
                </div>
              </div>
            </div>
            <div className=" w-1/2 md:w-1/4 px-2 mb-4">
              <Image src="/seller4.png" alt="" width={284} height={284} className="w-full bg-[#ededed] rounded-2xl" />
              <p className="text-center font-semibold">TP BVSK NutriTrust Vitamin C</p>
              <p className="text-center mb-4">Bio C 1000mg</p>
              <div className="flex justify-between px-4">
                <p className="font-semibold">330.000 VNĐ</p>
                <div className="p-2 bg-[#235932] rounded-md cursor-pointer">
                  <CartIcon width={24} height={24} fill="white" />
                </div>
              </div>
            </div>
            <div className=" w-1/2 md:w-1/4 px-2 mb-4">
              <Image src="/seller4.png" alt="" width={284} height={284} className="w-full bg-[#ededed] rounded-2xl" />
              <p className="text-center font-semibold">TP BVSK NutriTrust Vitamin C</p>
              <p className="text-center mb-4">Bio C 1000mg</p>
              <div className="flex justify-between px-4">
                <p className="font-semibold">330.000 VNĐ</p>
                <div className="p-2 bg-[#235932] rounded-md cursor-pointer">
                  <CartIcon width={24} height={24} fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About