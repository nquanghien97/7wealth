import Banner from './Banner';
import Image from 'next/image';

function CoHoiKinhDoanh() {
  return (
    <main>
      <Banner />
      <section className="mb-16 px-2">
        <div className="max-w-[1100px] m-auto">
          <h2 className="uppercase text-4xl font-bold text-center mb-4"><span className="text-[#00305b]">Welcome to</span> <span className="text-[#589f46]">7WEALTH</span></h2>
          <p className="text-center mb-4">Founded in 2017, Bamboo Airways has started to operate commercial flights since January 2019, with the orientation of being a five-star Airline.</p>
          <p className="text-center mb-4">As a dynamic and innovative airline, we’re proud to become a phenomenon in the aviation sector. We wish to bring the experience of “More than just a flight” to our passengers and to become the first five-star airline in Vietnam to offer a first-class compartment. Bamboo Airways has the vision to lead Asian aviation in the upcoming journey.</p>
          <p className="text-center mb-4">Behind every safe flight and all of our milestones are the enormous efforts of our winning team members. If you have a great flying dream and a desire to make a difference, seize the opportunity to join and grow together with us in Bamboo Airways! className="text-center mb-4"</p>
        </div>
      </section>
      <section className="mb-8 px-2">
        <div className="max-w-[1100px] m-auto">
          <h2 className="uppercase text-4xl font-bold text-center mb-8"><span className="text-[#00305b]">Life at</span> <span className="text-[#589f46]">7WEALTH</span></h2>
          <div className="flex mb-2">
            <div className="lg:w-2/3 w-full p-2">
              <div className="flex">
                <div className="flex-1 w-1/2">
                  <Image src="/anh-1.jpg" alt="anh-1" width={1500} height={1500} />
                </div>
                <div className="flex-1 w-1/2 flex flex-col justify-center">
                  <h3 className="text-[#00305b] text-base sm:text-4xl font-bold px-4 mb-2 sm:mb-4">PROACTIVE & ENTHUSIASTIC PEOPLE</h3>
                  <p className="px-4 text-xs sm:text-base">Good knowledge, professional working skills, and creative approach ensure our high efficiency</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 w-1/2 flex flex-col justify-center">
                  <h3 className="text-[#00305b] text-base sm:text-4xl font-bold px-4 mb-2 sm:mb-4">SUPPORTIVE ENVIRONMENT</h3>
                  <p className="px-4 text-xs sm:text-base">With supports from 3,000 colleagues in Bamboo Airways, we encourage you to make contributions to achieve our common goals</p>
                </div>
                <div className="flex-1 w-1/2">
                  <Image src="/anh-2.jpg" alt="anh-2" width={1500} height={1500} />
                </div>
              </div>
            </div>
            <div className="flex w-1/3 max-lg:hidden p-2">
              <Image src="/anh-3.jpg" alt="anh-3" width={1000} height={2000} />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 lg:w-2/3 p-2">
              <Image src="/anh-4.jpg" alt="anh-4" width={1920} height={960} />
            </div>
            <div className="flex flex-col justify-center w-1/2 lg:w-1/3 p-2">
              <h3 className="text-[#00305b] text-base sm:text-4xl font-bold px-4 mb-2 sm:mb-4">SUPPORTIVE ENVIRONMENT</h3>
              <p className="px-4 text-xs sm:text-base">With supports from 3,000 colleagues in Bamboo Airways, we encourage you to make contributions to achieve our common goals</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center w-1/3">
              <h3 className="text-[#00305b] text-base sm:text-4xl font-bold px-4 mb-2 sm:mb-4">COMPETITIVE BENEFITS</h3>
              <p className="px-4 text-xs sm:text-base">We offer the market-leading benefits package, especially BAV air tickets for yourself and family members</p>
            </div>
            <div className="flex-1 w-1/2">
              <Image src="/anh-1.jpg" alt="anh-1" width={1500} height={1500} className="p-2" />
            </div>
            <div className="flex-1 w-1/2">
              <Image src="/anh-1.jpg" alt="anh-1" width={1500} height={1500} className="p-2" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 lg:w-2/3 p-2">
              <Image src="/anh-7.jpg" alt="anh-7" width={1920} height={960} />
            </div>
            <div className="flex flex-col justify-center w-1/2 lg:w-1/3 p-2">
              <h3 className="text-[#00305b] text-base sm:text-4xl font-bold px-4 mb-2 sm:mb-4">SUPPORTIVE ENVIRONMENT</h3>
              <p className="px-4 text-xs sm:text-base">With supports from 3,000 colleagues in Bamboo Airways, we encourage you to make contributions to achieve our common goals</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CoHoiKinhDoanh