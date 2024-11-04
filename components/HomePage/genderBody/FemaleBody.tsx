import BachCau from '@/assets/body/Bach-cau';
import BuongTrung from '@/assets/body/BuongTrung';
import DauVaCo from '@/assets/body/DauVaCo';
import DuongRuot from '@/assets/body/DuongRuot';
import Gan from '@/assets/body/Gan';
import HacToDa from '@/assets/body/HacToDa';
import Image1 from '@/assets/body/image1';
import Nao from '@/assets/body/Nao';
import Nguc from '@/assets/body/Nguc';
import NoiMacTuCung from '@/assets/body/NoiMacTuCung';
import Phoi from '@/assets/body/Phoi';
import TeBaoLympho from '@/assets/body/Te-bao-lympho';
import Than from '@/assets/body/Than';
import ThucQuan from '@/assets/body/ThucQuan';
import TuyenGiap from '@/assets/body/Tuyen-giap';
import TuyenTuy from '@/assets/body/TuyenTuy';
import Modal from '@/components/common/Modal';
import { ListBodyData, ListBodyIcon } from '@/config/ListBodyData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

type bodyPart = 'não' | 'bạch cầu' | 'đầu và cổ' | 'đường ruột' | 'ngực' | 'tuyến tụy' | 'tuyến giáp' | 'thực quản' | 'phổi' | 'gan' | 'hắc tố da' | 'thận' | 'tế bào lympho' | 'buồng trứng' | 'nội mạc tử cung'
function FemaleBody() {
  const [openModal, setOpenModal] = useState(false);
  const [bodyPartClick, setBodyPartClick] = useState<bodyPart | null>(null);
  const [bodyPart, setBodyPart] = useState<null | bodyPart>(null);
  return (
    <>
      <div className="flex justify-center lg:flex-row flex-col relative">
        <div className="px-6 lg:absolute lg:left-0 z-50">
          <ul className="flex flex-wrap lg:max-w-[140px] gap-4">
            {ListBodyIcon.map(bodyPart => (
              <li
                key={bodyPart.title}
                className="w-[50px] h-[50px] hover:scale-110 duration-300 cursor-pointer"
                onMouseEnter={() => setBodyPart(bodyPart.title)}
                onMouseLeave={() => setBodyPart(null)}
                onClick={() => {
                  setOpenModal(true)
                  setBodyPartClick(bodyPart.title)
                }}
              >
                {bodyPart.icon}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full">
          <Image src="/body.png" alt="body" width={653} height={910} className="m-auto w-[60%]" />
          {/* Não */}
          <div
            className="absolute top-2 left-[45%] w-[40%]"
            onMouseEnter={() => setBodyPart('não')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('não')
            }}
          >
            <Nao width={112} height={94} className={`w-[25%] h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'não' ? 'scale-110' : ''}`} />
          </div>
          <div className={`top-2 left-[56%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rou hidden lg:block nded-[5px] ${bodyPart === 'não' ? 'lg:opacity-100' : 'opacity-0'}`}>Não</div>
          {/* Tuyến giáp */}
          <div
            className="absolute z-10 top-[23%] left-[48%] w-[4%]"
            onMouseEnter={() => setBodyPart('tuyến giáp')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('tuyến giáp')
            }}
          >
            <TuyenGiap width={45} height={38} className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'tuyến giáp' ? 'scale-110' : ''}`} />
          </div>
          <div className={`top-[22%] left-[53%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5 hidden lg:block px] ${bodyPart === 'tuyến giáp' ? 'lg:opacity-100' : 'opacity-0'}`}>Tuyến giáp</div>
          {/* Tế bào lympho */}
          <div
            className="absolute z-10 w-[5%] top-[calc(21%)] left-[calc(43%)]"
            onMouseEnter={() => setBodyPart('tế bào lympho')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('tế bào lympho')
            }}
          >
            <TeBaoLympho width={50} height={68} fill="#33A856" className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'tế bào lympho' && 'scale-110'}`} />
          </div>
          <div className={`top-[22%] left-[24%] w-[200px] text-start duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:right-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] hidden lg:block  ${bodyPart === 'tế bào lympho' ? 'lg:opacity-100' : 'opacity-0'}`}>Tế bào lympho</div>
          {/* Bạch cầu */}
          <div
            className="absolute z-10 w-[2%] top-[40%] left-[37%]"
            onMouseEnter={() => setBodyPart('bạch cầu')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('bạch cầu')
            }}
          >
            <BachCau width={16} height={16} fill="#33A856" className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'bạch cầu' && 'scale-110'}`} />
          </div>
          <div className={`top-[41%] left-[16%] w-[200px] text-start duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:right-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded- hidden lg:block [5px] ${bodyPart === 'bạch cầu' ? 'lg:opacity-100' : 'opacity-0'}`}>Bạch cầu</div>
          <div
            className="absolute z-10 w-[2%] top-[43%] left-[36%]"
            onMouseEnter={() => setBodyPart('bạch cầu')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('bạch cầu')
            }}
          >
            <BachCau width={16} height={16} fill="#33A856" className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'bạch cầu' && 'scale-110'}`} />
          </div>
          <div
            className="absolute z-10 w-[2%] top-[46%] left-[35%]"
            onMouseEnter={() => setBodyPart('bạch cầu')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('bạch cầu')
            }}
          >
            <BachCau width={16} height={16} fill="#33A856" className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'bạch cầu' && 'scale-110'}`} />
          </div>
          <div
            className="absolute z-10 w-[2%] top-[76%] left-[29%]"
            onMouseEnter={() => setBodyPart('bạch cầu')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('bạch cầu')
            }}
          >
            <BachCau width={16} height={16} fill="#33A856" className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'bạch cầu' && 'scale-110'}`} />
          </div>
          {/* Phổi */}
          <div
            className="absolute z-10 w-[8%] top-[32%] left-[calc(41%+3px)]"
            onMouseEnter={() => setBodyPart('phổi')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('phổi')
            }}
          >
            <Phoi width={84} height={156} className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'phổi' && 'scale-110'}`} />
          </div>
          <div className={`top-[36%] left-[21%] w-[200px] text-start duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:right-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:roun hidden lg:block ded-[5px] ${bodyPart === 'phổi' ? 'lg:opacity-100' : 'opacity-0'}`}>Phổi</div>
          {/* Đầu và cổ */}
          <div
            className="absolute z-10 w-[6%] top-[19%] left-[47%]"
            onMouseEnter={() => setBodyPart('đầu và cổ')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('đầu và cổ')
            }}
          >
            <DauVaCo width={60} height={20} className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'đầu và cổ' && 'scale-110'}`} />
          </div>
          <div className={`top-[17%] left-[53%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[ hidden lg:block 5px] ${bodyPart === 'đầu và cổ' ? 'lg:opacity-100' : 'opacity-0'}`}>Đầu và cổ</div>
          {/* Đường ruột */}
          <div
            className="absolute z-10 w-[15%] top-[64%] left-[42%]"
            onMouseEnter={() => setBodyPart('đường ruột')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('đường ruột')
            }}
          >
            <DuongRuot width={168} height={192} className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'đường ruột' && 'scale-110'}`} />
          </div>
          <div className={`top-[70%] left-[58%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5 hidden lg:block px] ${bodyPart === 'đường ruột' ? 'lg:opacity-100' : 'opacity-0'}`}>Đường ruột</div>
          {/* Ngực */}
          <div
            className="absolute z-10 w-[11%] top-[36%] left-[50%]"
            onMouseEnter={() => setBodyPart('ngực')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('ngực')
            }}
          >
            <Nguc width={168} height={192} className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'ngực' && 'scale-110'}`} />
          </div>
          <div className={`top-[40%] left-[62%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:roun hidden lg:block ded-[5px] ${bodyPart === 'ngực' ? 'lg:opacity-100' : 'opacity-0'}`}>Ngực</div>
          {/* Tuyến tụy */}
          <div
            className="absolute z-20 w-[8%] top-[55%] left-[46%]"
            onMouseEnter={() => setBodyPart('tuyến tụy')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('tuyến tụy')
            }}
          >
            <TuyenTuy bodyPart={bodyPart} width={168} height={192} className="w-full h-full overflow-visible" />
          </div>
          <div className={`top-[56%] left-[54%] w-[200px] text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[ hidden lg:block 5px] ${bodyPart === 'tuyến tụy' ? 'lg:opacity-100' : 'opacity-0'}`}>Tuyến tụy</div>
          {/* Thực quản */}
          <div
            className="absolute w-[9%] top-[35%] left-[calc(45%+2px)] z-1"
            onMouseEnter={() => setBodyPart('thực quản')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('thực quản')
            }}
          >
            <ThucQuan width={94} height={219} className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'thực quản' && 'scale-110'}`} />
          </div>
          <div className={`top-[36%] left-[50%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[ hidden lg:block 5px] ${bodyPart === 'thực quản' ? 'lg:opacity-100' : 'opacity-0'}`}>Thực quản</div>
          {/* Gan */}
          <div
            className="absolute w-[12%] top-[50%] left-[41%] z-10"
            onMouseEnter={() => setBodyPart('gan')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('gan')
            }}
          >
            <Gan width={130} height={100} className={`w-full h-full hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'gan' && 'scale-110'}`} />
          </div>
          <div className={`top-[52%] left-[20%] w-[200px] text-start duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:right-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rou hidden lg:block nded-[5px] ${bodyPart === 'gan' ? 'lg:opacity-100' : 'opacity-0'}`}>Gan</div>
          {/* Hắc tố da */}
          <div
            className={`absolute w-[2%] top-[34%] right-[36%] z-10 hover:scale-125 duration-300 cursor-pointer ${bodyPart === 'hắc tố da' && 'scale-110'}`}
            onMouseEnter={() => setBodyPart('hắc tố da')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('hắc tố da')
            }}
          >
            <HacToDa width={24} height={24} className="w-full h-full" />
          </div>
          <div className={`top-[32%] left-[65%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[ hidden lg:block 5px] ${bodyPart === 'hắc tố da' ? 'lg:opacity-100' : 'opacity-0'}`}>Hắc tố da</div>
          {/* Thận */}
          <div
            className="absolute w-[12%] top-[60%] left-[43%] z-20"
            onMouseEnter={() => setBodyPart('thận')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('thận')
            }}
          >
            <Than bodyPart={bodyPart} width={142} height={76} />
          </div>
          <div className={`top-[60%] left-[56%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:roun hidden lg:block ded-[5px] ${bodyPart === 'thận' ? 'lg:opacity-100' : 'opacity-0'}`}>Thận</div>
          {/* Buồng trứng */}
          <div
            className={`absolute w-[16%] top-[76%] left-[42%] z-30 hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'buồng trứng' && 'scale-110'}`}
            onMouseEnter={() => setBodyPart('buồng trứng')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('buồng trứng')
            }}
          >
            <BuongTrung width={180} height={40} className="w-full h-full" />
          </div>
          <div className={`top-[74%] left-[59%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5p hidden lg:block x] ${bodyPart === 'buồng trứng' ? 'lg:opacity-100' : 'opacity-0'}`}>Buồng trứng</div>
          {/* Nội mạc tử cung */}
          <div
            className={`absolute w-[6%] top-[76%] left-[47%] z-20 hover:scale-110 duration-300 cursor-pointer ${bodyPart === 'nội mạc tử cung' && 'scale-110'}`}
            onMouseEnter={() => setBodyPart('nội mạc tử cung')}
            onMouseLeave={() => setBodyPart(null)}
            onClick={() => {
              setOpenModal(true)
              setBodyPartClick('nội mạc tử cung')
            }}
          >
            <NoiMacTuCung width={72} height={96} className="w-full h-full" />
          </div>
          <div className={`top-[80%] left-[52%] w-[200px] z-30 text-end duration-300 absolute border-b border-[#707070] before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:h-[10px] before:w-[10px] before:bg-[#707070] before:rounded-[5px] $ hidden lg:block {bodyPart === 'nội mạc tử cung' ? 'lg:opacity-100' : 'opacity-0'}`}>Nội mạc tử cung</div>
          <div className="absolute w-[3%] top-[27%] left-[calc(48%+5px)] z-1 hover:scale-110 duration-300 cursor-pointer">
            <Image1 width={30} height={94} className="w-full h-full" />
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
                <Link href={ListBodyData[bodyPartClick].information.link} className="ml-2 text-[#B32026] underline">{ListBodyData[bodyPartClick].information.name}</Link>
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-8 py-2 bg-[#B32026] border-2 border-[#B32026] text-white rounded-2xl" onClick={() => setOpenModal(false)}>Tiếp tục khám phá</button>
            </div>
          </div>
        </Modal>
      )}
    </>

  )
}

export default FemaleBody