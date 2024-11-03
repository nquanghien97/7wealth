'use client';

import { useState } from "react";
import FemaleBody from "./genderBody/FemaleBody";
import MaleBody from "./genderBody/MaleBody";

function BodySection() {
  
  const [gender, setGender] = useState<'nữ' | 'nam'>('nữ')
  return (
    <section>
      <div className="max-w-6xl m-auto">
        <div className="flex justify-center items-center flex-col mb-4">
          <div className="mb-4">
            <h1 className="text-[#235932] text-3xl font-bold uppercase">Hành trình khám phá cơ thể</h1>
          </div>
          <div className="mb-4 text-center">
            <p className="text-[#235932] italic">Cơ thể con người là kỳ quan đẹp nhất của vũ trụ.</p>
            <p className="text-[#235932] italic">Cùng 7W khám phá, thấu hiểu và làm bạn với cơ thể của chính mình nhé</p>
          </div>
          <div>
            <button
              className={`px-8 py-2 rounded-3xl mr-2 ${gender === 'nữ' ? 'bg-[#235932] text-white' : 'border border-[#235932] text-[#235932]'}`}
              onClick={() => setGender('nữ')}
            >
              Nữ
            </button>
            <button
              className={`px-8 py-2 rounded-3xl ${gender === 'nam' ? 'bg-[#235932] text-white' : 'border border-[#235932] text-[#235932]'}`}
              onClick={() => setGender('nam')}
            >
              Nam
            </button>
          </div>
        </div>
        {gender === 'nữ' && <FemaleBody />}
        {gender === 'nam' && <MaleBody />}
      </div>
    </section>
  )
}

export default BodySection