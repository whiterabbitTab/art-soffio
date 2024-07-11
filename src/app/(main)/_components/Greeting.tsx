"use client"

import Link from "next/link";

export const Greeting = () => {
  return(
    <div className="w-[1520px] h-[500px] bg-[url('/home_greeting_image.jpeg')] bg-center bg-no-repeat bg-cover pointer-events-none">
      <Link className="transition-all duration-300 hover:opacity-80 flex items-center justify-center h-[23px] border border-[#555555] rounded-[19px] w-[114px] font-semibold text-xs pointer-events-auto" href='/'>Купить</Link>
    </div>
  );
};