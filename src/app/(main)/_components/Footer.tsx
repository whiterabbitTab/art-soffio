import { footerPages, socailMedias } from "@/constants/footer";
import { Image } from "antd";
import Link from "next/link";

export const Footer = () => {
  return(
    <footer className="flex items-center justify-center h-[216px] w-full bg-[#A19C9C] text-white text-sm font-semibold">
      <div className="flex gap-x-32">
        <div className="flex flex-col gap-y-2 hover:[&>*]:opacity-60 [&>*]:transition-all [&>*]:duration-300 cursor-pointer">
          {footerPages.map(link => {
            return <Link href={link.href}>{link.title}</Link>
          })}
        </div>
        <div className="flex flex-col gap-y-2">
          <span>Связаться с нами</span>
          <span>+7 (747) 845 58 86</span>
          <Link className="transition-colors duration-200 hover:text-[#3fe7e7]" href='#'>admin@artsoffio.kz</Link>
        </div>
        <div className="flex flex-col gap-y-2 w-[145px]">
          <span className="text-center">Мы в социальных сетях</span>
          <div className="flex w-full justify-around items-center">
            {socailMedias.map(img => {
              return <Image className="transition-all duration-200 hover:scale-105 cursor-pointer" src={img} preview={false} alt={img.slice(1, -4)} />
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
