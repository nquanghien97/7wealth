'use client';

import BachCau from "@/assets/body/Bach-cau";
import BuongTrung from "@/assets/body/BuongTrung";
import DauVaCo from "@/assets/body/DauVaCo";
import DuongRuot from "@/assets/body/DuongRuot";
import Gan from "@/assets/body/Gan";
import HacToDa from "@/assets/body/HacToDa";
import Nao from "@/assets/body/Nao"
import Nguc from "@/assets/body/Nguc";
import NoiMacTuCung from "@/assets/body/NoiMacTuCung";
import Phoi from "@/assets/body/Phoi";
import TeBaoLympho from "@/assets/body/Te-bao-lympho";
import Than from "@/assets/body/Than";
import ThucQuan from "@/assets/body/ThucQuan";
import TuyenGiap from "@/assets/body/Tuyen-giap";
import TuyenTuy from "@/assets/body/TuyenTuy";
import Image from "next/image"

import NaoIcon from "@/assets/body/icons/Nao";
import BachCauIcon from "@/assets/body/icons/Bach-cau";
import Image1 from "@/assets/body/image1";
import { useState } from "react";
import DauVaCoIcon from "@/assets/body/icons/DauVaCo";
import DuongRuotIcon from "@/assets/body/icons/DuongRuot";
import NgucIcon from "@/assets/body/icons/Nguc";
import TuyenTuyIcon from "@/assets/body/icons/TuyenTuy";
import TuyenGiapIcon from "@/assets/body/icons/Tuyen-giap";
import ThucQuanIcon from "@/assets/body/icons/ThucQuan";
import PhoiIcon from "@/assets/body/icons/Phoi";
import GanIcon from "@/assets/body/icons/Gan";
import HacToDaIcon from "@/assets/body/icons/HacToDa";
import ThanIcon from "@/assets/body/icons/Than";
import TeBaoLymphoIcon from "@/assets/body/icons/Te-bao-lympho";
import BuongTrungIcon from "@/assets/body/icons/BuongTrung";
import NoiMacTuCungIcon from "@/assets/body/icons/NoiMacTuCung";
import Modal from "../common/Modal";
import { ListBodyData } from "@/config/ListBodyData";
import Link from "next/link";

type bodyPart = 'não' | 'bạch cầu' | 'đầu và cổ' | 'đường ruột' | 'ngực' | 'tuyến tụy' | 'tuyến giáp' | 'thực quản' | 'phổi' | 'gan' | 'hắc tố da' | 'thận' | 'tế bào lympho' | 'buồng trứng' | 'nội mạc tử cung'
function BodySection() {
  const [bodyPart, setBodyPart] = useState<null | bodyPart>(null);
  const [openModal, setOpenModal] = useState(false);
  const [bodyPartClick, setBodyPartClick] = useState<bodyPart | null>(null)
  console.log(bodyPart)
  return (
    <section>
      <div className="max-w-6xl m-auto">
        <div className="flex justify-center lg:flex-row flex-col">
          <div className="px-6">
            <ul className="flex flex-wrap lg:max-w-[140px] gap-4">
              {/* Não */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('não')}
                onMouseLeave={() => setBodyPart(null)}
                onClick={() => {
                  setOpenModal(true)
                  setBodyPartClick('não')
                }}
              >
                <NaoIcon width={50} height={50} />
              </li>
              {/* Bạch cầu */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('bạch cầu')}
                onMouseLeave={() => setBodyPart(null)}
                onClick={() => {
                  setOpenModal(true)
                  setBodyPartClick('bạch cầu')
                }}
              >
                <BachCauIcon width={50} height={50} />
              </li>
              {/* Đầu và cổ */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('đầu và cổ')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <DauVaCoIcon width={50} height={50} />
              </li>
              {/* Đường ruột */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('đường ruột')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <DuongRuotIcon width={50} height={50} />
              </li>
              {/* Ngực */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('ngực')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <NgucIcon width={50} height={50} />
              </li>
              {/* Tuyến tụy */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('tuyến tụy')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <TuyenTuyIcon width={50} height={50} />
              </li>
              {/* Tuyến giáp */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('tuyến giáp')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <TuyenGiapIcon width={50} height={50} />
              </li>
              {/* Thực quản */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('thực quản')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <ThucQuanIcon width={50} height={50} />
              </li>
              {/* Phổi */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('phổi')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <PhoiIcon width={50} height={50} />
              </li>
              {/* Gan */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('gan')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <GanIcon width={50} height={50} />
              </li>
              {/* Hắc tố da */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('hắc tố da')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <HacToDaIcon width={50} height={50} />
              </li>
              {/* Thận */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('thận')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <ThanIcon width={50} height={50} />
              </li>
              {/* Tế bào lympho */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('tế bào lympho')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <TeBaoLymphoIcon width={50} height={50} />
              </li>
              {/* Buồng trứng */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('buồng trứng')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <BuongTrungIcon width={50} height={50} />
              </li>
              {/* Nội mạc tử cung */}
              <li
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart('nội mạc tử cung')}
                onMouseLeave={() => setBodyPart(null)}
              >
                <NoiMacTuCungIcon width={50} height={50} />
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <Image src="/body.png" alt="body" width={653} height={910} className="m-auto w-[60%]" />
            {/* Não */}
            <div
              className="absolute top-2 left-[45%] w-[40%]"
              onMouseEnter={() => setBodyPart('não')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <Nao width={112} height={94} className="w-[25%] h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-2 left-[56%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'não' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Não</div>
            {/* Bạch cầu */}
            <div
              className="absolute z-10 top-[23%] left-[48%] w-[4%]"
              onMouseEnter={() => setBodyPart('tuyến giáp')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <TuyenGiap width={45} height={38} className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[22%] left-[53%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'tuyến giáp' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Tuyến giáp</div>
            {/* Tế bào lympho */}
            <div
              className="absolute z-10 w-[5%] top-[calc(21%)] left-[calc(43%)]"
              onMouseEnter={() => setBodyPart('tế bào lympho')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <TeBaoLympho width={50} height={68} fill="#33A856" className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[22%] left-[24%] w-[200px] text-start duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:right-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'tế bào lympho' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Tế bào lympho</div>
            {/* Bạch cầu */}
            <div
              className="absolute z-10 w-[2%] top-[40%] left-[37%]"
              onMouseEnter={() => setBodyPart('bạch cầu')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <BachCau width={16} height={16} fill="#33A856" className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[41%] left-[16%] w-[200px] text-start duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:right-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'bạch cầu' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Bạch cầu</div>
            <div
              className="absolute z-10 w-[2%] top-[43%] left-[36%]"
              onMouseEnter={() => setBodyPart('bạch cầu')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <BachCau width={16} height={16} fill="#33A856" className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div
              className="absolute z-10 w-[2%] top-[46%] left-[35%]"
              onMouseEnter={() => setBodyPart('bạch cầu')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <BachCau width={16} height={16} fill="#33A856" className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div
              className="absolute z-10 w-[2%] top-[76%] left-[29%]"
              onMouseEnter={() => setBodyPart('bạch cầu')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <BachCau width={16} height={16} fill="#33A856" className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            {/* Phổi */}
            <div
              className="absolute z-10 w-[8%] top-[32%] left-[calc(41%+3px)]"
              onMouseEnter={() => setBodyPart('phổi')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <Phoi width={84} height={156} className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[36%] left-[21%] w-[200px] text-start duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:right-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'phổi' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Phổi</div>
            {/* Đầu và cổ */}
            <div
              className="absolute z-10 w-[6%] top-[19%] left-[47%]"
              onMouseEnter={() => setBodyPart('đầu và cổ')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <DauVaCo width={60} height={20} className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[17%] left-[53%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'đầu và cổ' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Đầu và cổ</div>
            {/* Đường ruột */}
            <div
              className="absolute z-10 w-[15%] top-[64%] left-[42%]"
              onMouseEnter={() => setBodyPart('đường ruột')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <DuongRuot width={168} height={192} className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[70%] left-[58%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'đường ruột' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Đường ruột</div>
            {/* Ngực */}
            <div
              className="absolute z-10 w-[11%] top-[36%] left-[50%]"
              onMouseEnter={() => setBodyPart('ngực')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <Nguc width={168} height={192} className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[40%] left-[62%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'ngực' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Ngực</div>
            {/* Tuyến tụy */}
            <div
              className="absolute z-20 w-[8%] top-[55%] left-[46%]"
              onMouseEnter={() => setBodyPart('tuyến tụy')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <TuyenTuy width={168} height={192} className="w-full h-full overflow-visible" />
            </div>
            <div className={`top-[56%] left-[54%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'tuyến tụy' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Tuyến tụy</div>
            {/* Thực quản */}
            <div
              className="absolute w-[9%] top-[35%] left-[calc(45%+2px)] z-1"
              onMouseEnter={() => setBodyPart('thực quản')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <ThucQuan width={94} height={219} className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[36%] left-[50%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'thực quản' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Thực quản</div>
            {/* Gan */}
            <div
              className="absolute w-[12%] top-[50%] left-[41%] z-10"
              onMouseEnter={() => setBodyPart('gan')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <Gan width={130} height={100} className="w-full h-full hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className={`top-[52%] left-[20%] w-[200px] text-start duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:right-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'gan' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Gan</div>
            {/* Hắc tố da */}
            <div
              className="absolute w-[2%] top-[34%] right-[36%] z-10 hover:scale-125 duration-300 cursor-pointer"
              onMouseEnter={() => setBodyPart('hắc tố da')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <HacToDa width={24} height={24} className="w-full h-full" />
            </div>
            <div className={`top-[32%] left-[65%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'hắc tố da' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Hắc tố da</div>
            {/* Thận */}
            <div
              className="absolute w-[12%] top-[60%] left-[43%] z-20"
              onMouseEnter={() => setBodyPart('thận')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <Than width={142} height={76} />
            </div>
            <div className={`top-[60%] left-[56%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'thận' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Thận</div>
            {/* Buồng trứng */}
            <div
              className="absolute w-[16%] top-[76%] left-[42%] z-30 hover:scale-110 duration-300 cursor-pointer"
              onMouseEnter={() => setBodyPart('buồng trứng')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <BuongTrung width={180} height={40} className="w-full h-full" />
            </div>
            <div className={`top-[74%] left-[59%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'buồng trứng' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Buồng trứng</div>
            {/* Nội mạc tử cung */}
            <div
              className="absolute w-[6%] top-[76%] left-[47%] z-20 hover:scale-110 duration-300 cursor-pointer"
              onMouseEnter={() => setBodyPart('nội mạc tử cung')}
              onMouseLeave={() => setBodyPart(null)}
            >
              <NoiMacTuCung width={72} height={96} className="w-full h-full" />
            </div>
            <div className={`top-[80%] left-[52%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] ${bodyPart === 'nội mạc tử cung' ? 'opacity-0 lg:opacity-100' : 'opacity-0'}`}>Nội mạc tử cung</div>
            <div className="absolute w-[3%] top-[27%] left-[calc(48%+5px)] z-1 hover:scale-110 duration-300 cursor-pointer">
              <Image1 width={30} height={94} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      {bodyPartClick && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <div className="p-8 bg-white">
            <div className="flex justify-between">
              <p className="text-xl font-semibold text-[#B32026]">{ListBodyData[bodyPartClick].title}</p>
              <div>{ListBodyData[bodyPartClick].image}</div>
            </div>
            <div className="mb-4">
              <ul className="list-disc px-4">
                {ListBodyData[bodyPartClick].description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <p>
                For more information go to
                <Link href={ListBodyData[bodyPartClick].infomation.link} className="ml-2 text-[#B32026] underline">{ListBodyData[bodyPartClick].infomation.name}</Link>
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-8 py-2 bg-[#B32026] border-2 border-[#B32026] text-white rounded-2xl">Tiếp tục khám phá</button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default BodySection