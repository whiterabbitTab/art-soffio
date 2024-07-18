"use client"

import Link from "next/link";

export const Greeting = () => {
  return(
    <>
      <div className="flex items-end justify-center 2xl:hidden w-[320px] h-[347px] bg-[url('/home_greeting_mb.png')] bg-center bg-cover bg-no-repeat pointer-events-none">
        <Link className="transition-all duration-300 hover:opaticy-80 flex items-center justify-center w-[74px] h-[23px] border border-[#555555] rounded-[19px] font-semibold text-xs pointer-events-auto" href={'/'}>Купить</Link>
      </div>
      <div className="hidden 2xl:block w-[1300px] h-[400px] bg-[url('/home_greeting_image.jpeg')] bg-center bg-no-repeat bg-cover pointer-events-none">
        <Link className="relative top-[62%] left-[72%] transition-all duration-300 hover:opacity-80 flex items-center justify-center h-[23px] border border-[#555555] rounded-[19px] w-[114px] font-semibold text-xs pointer-events-auto" href='/'>Купить</Link>
      </div>
    </>
  );
};