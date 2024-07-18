import { CustomButton } from "@/features/CustomButton";
import { Image } from "antd";
import Link from "next/link";

export const ProductCard = ({ image, text, price, discount }: { image: string, text: string, price: number, discount: number }) => {
  return(
    <Link href='/' className="flex flex-col gap-y-1 w-[137px] lg:w-[264px] h-[303px] lg:h-[420px] cursor-pointer px-4">
      <div className="hidden xl:flex items-center justify-center">
        <Image src={image} width={220} height={220} preview={false} alt="Product Card"/>
      </div>
      <div className="xl:hidden flex items-center justify-center">
        <Image src={image} width={137} height={137} preview={false} alt="Product Card"/>
      </div>
      <span className="font-normal text-[10px] xl:text-[10px] leading-6 text-[#888888]">ART SOFFIO</span>
      <h2 className="font-normal text-[12px] xl:text-[15px] leading-6 text-[#555555]">{text}</h2>
      <span className="font-normal text-[13px] xl:text-xl leading-6 my-1">{price}₸</span>
      <CustomButton textColor="#FFFFFF" bgColor="#A19C9C" title="Добавить" width={264} height={34} className='hover:bg-white xl:flex hidden text-lg' />
      <CustomButton textColor="#FFFFFF" bgColor="#A19C9C" title="Добавить" width={137} height={23} className='hover:bg-white flex xl:hidden text-xs' />
    </Link>
  );
};
