'use client';

import Nao from "@/assets/body/nao"
import TeBaoLympho from "@/assets/body/Te-bao-lympho";
import TuyenGiap from "@/assets/body/Tuyen-giap";
import Image from "next/image"

function BodySection() {
  return (
    <section>
      <div className="max-w-6xl m-auto">
        <div className="flex justify-center relative w-1/2 m-auto">
          <Image src="/body.png" alt="body" width={653} height={910} className="" />
          <div
            className="absolute md:top-0 sm:top-[-16px] top-[-28px] hover:scale-110 duration-300 cursor-pointer w-1/6"
            onMouseEnter={() => console.log('hover')}
            onMouseLeave={() => console.log('leave')}
          >
            <Nao width={112} height={94} className="w-full" />
          </div>
          <div className="absolute top-[18%] md:top-[22%] sm:top-[20%]">
            <TuyenGiap width={45} height={38} className="w-4 md:w-8 lg:w-full" />
          </div>
          <div className="absolute lg:top-[calc(19%+2px)] lg:left-[calc(38%+1px)] md:top-[calc(18%+3px)] md:left-[calc(38%)] sm:top-[20%] sm:left-[calc(39%)] top-[18%] left-[39%]">
            <TeBaoLympho width={50} height={68} fill="#33A856" className="w-8 md:w-[44px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BodySection