import Image from "next/image";
import Link from "next/link";
import React from "react";
import pooster from "/public/assets/images/Meetpooster.png"
import celery from "/public/assets/images/carafs.png"
import apple from "/public/assets/images/apple.png"
import meet from "/public/assets/images/agromarco-logo.png"

export const metadata = {
  title: "پلتفرم بازار کشاورزی",
  description: "",
};


const AgroMarco = () => {
  return (
      <div className="!bg-[#007D3E] w-full flex flex-col gap-4 items-center justify-start py-4 h-[100vh] shadow-inner overflow-hidden relative">

        <div className="flex flex-row max-lg:flex-row gap-4 py-2 lg:pr-32 max-lg:px-2 w-full !bg-[#0e6d3e] items-center justify-center">

          <h2 className="!text-[#ffffff] text-[3rem] -mb-2 max-lg:text-base font-bold">
            AgroMarco
          </h2>

          <div className="flex agroyaar-button !rounded-full max-lg:p-px p-[7px] w-fit h-fit justify-center items-center hover:brightness-110 hover:-translate-y-2 duration-500">

            <Image className="brightness-[10]" src={meet} alt="agro-meet" width={60} />

          </div>

          <h1 className="!text-[#ffffff] text-[2.5rem] max-lg:text-[1.1rem] whitespace-nowrap font-bold">
            پلتفرم بازار کشاورزی
          </h1>

        </div>

        <div className={`flex flex-row max-lg:flex-col-reverse gap-24 max-lg:gap-2 items-center justify-center mb-4 !rounded-2xl p-4 max-lg:p-px`}>

          <div className={`agroyaar-button z-50 lg:w-[50%] lg:-mr-20 flex flex-col max-lg:w-[95%] items-center justify-center gap-4 py-6 bg-[#007D3E] rounded-[20px]`}>
            <div className="flex flex-col items-center justify-center gap-6">
              <h4 className="text-white text-center text-3xl max-lg:text-2xl font-bold">
                اگرو مارکو
              </h4>
              <p className="text-white text-center font-thin text-[16px] max-lg:text-sm w-[90%]">
                بازار کشاورزی اگرومارکو یک پلتفرم آنلاین است که به منظور فراهم کردن بستری برای خرید و فروش محصولات تولیدی کشاورزی طراحی شده است.
                <br />
                اگرومارکو به کشاورزان و تولیدکنندگان محصولات کشاورزی این امکان را می‌دهد که محصولات تولیدی خودرا به صورت آنلاین تبلیغ و عرضه کنند.
              </p>
            </div>
            <Link href="/AgroMarco">
              <div className={`button-neo flex hover:brightness-110 hover:duration-500 cursor-pointer transition-all items-center justify-center px-[32px] text-neo py-[4px] !bg-white rounded-3xl !text-[#007D3E] text-[23px] max-lg:text-xl font-bold`} >
                به زودی ...
              </div>
            </Link>
          </div>

          <Image className="lg:w-[42%] max-lg:w-[80%] hover:brightness-110 hover:-translate-y-2 hover:scale-105 duration-500 z-50" src={pooster} alt="agro-meet" />

        </div>

       
        <Image className="absolute opacity-60 -right-20 top-[120px] z-0 hover:-translate-y-12 hover:opacity-100 duration-500" src={apple} alt="agromarco-apple" width={306} />
        {/* <Image className="absolute -bottom-24" src={celery} alt="agromarco-carafs" width={264} /> */}

      </div>
  
  );
};


export default AgroMarco;
