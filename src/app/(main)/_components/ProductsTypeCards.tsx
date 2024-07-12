import { pagesCards } from "@/constants/home.constant";
import { Image } from "antd";
import Link from "next/link";
import { ProductTypeCard } from "./ProductTypeCard";

export const ProductsTypeCards = () => {
  return(
    <div className="flex flex-col items-center gap-y-10 w-full mb-4">
      <h1 className="font-semibold text-4xl text-[#555555]">Мир красоты и ухода</h1>
      <div className="flex justify-between w-full">
        {pagesCards.map(card => {
          return <ProductTypeCard card={card} />
        })}
      </div>
    </div>
  );
};
