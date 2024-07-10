import { headerLink } from "@/constants/header";
import { Image } from "antd";
import Link from "next/link";

export const Header = () => {
  return(
    <>
      <div className="absolute w-full top-[99px] h-[1px] bg-[#E5E5E5]"></div>
      <header className="flex flex-col items-center h-40 w-4/5 mx-auto">
        <div className="h-24 flex justify-around items-center w-full">
          <div className="flex flex-col items-center gap-y-1">
            <span className="font-normal font-base leading-6 cursor-default">+7 (747) 845 58 86</span>
            <button className="transition-all duration-300 hover:opacity-80 flex items-center justify-center h-[23px] w-full border border-[#555555] rounded-[19px] font-semibold text-xs">Заказать звонок</button>
          </div>
          <div>
            <Link href='/'>
              <Image src="/art-soffio_header.png" alt="art soffio" preview={false} width={307} height={56} className="cursor-pointer" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-5">
            <Image src="/search_header.png" alt="Search" preview={false} className="transition-all duration-200 hover:opacity-60 cursor-pointer" />
            <Image src="/basket_header.png" alt="Basket" preview={false} className="transition-all duration-200 hover:opacity-60 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center h-14 w-full justify-around">
          {headerLink.map(link => {
            return <Link className="transition-all duration-300 hover:text-[#FF00FF] font-semibold text-xl leading-6" href={link.href}>{link.name}</Link>
          })}
        </div>
      </header>
    </>
  );
};
