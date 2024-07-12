import { CustomButton } from "@/features/CustomButton";
import { Image } from "antd";
import Link from "next/link";

export const ProductCard = ({ image, text, price, discount }: { image: string, text: string, price: number, discount: number }) => {
  return(
    <Link href='/' className="flex flex-col gap-y-1 w-[264px] h-[420px] cursor-pointer">
      <Image src={image} width={260} height={260} preview={false} alt="Product Card" />
      <span className="font-normal text-[10px] leading-6 text-[#888888]">ART SOFFIO</span>
      <h2 className="font-normal text-[15px] leading-6 text-[#555555]">{text}</h2>
      <span className="font-normal text-xl leading-6 my-1">{price}₸</span>
      <CustomButton textColor="#FFFFFF" bgColor="#A19C9C" title="Добавить" width={264} height={34} />
    </Link>
  );
};
