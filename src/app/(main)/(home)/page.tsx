"use client"

import { Greeting } from "../_components/Greeting";
import "react-multi-carousel/lib/styles.css";
import { CarouselHome } from "../_components/CarouselHome";
import { MorePages } from "../_components/MorePages";
import { ProductsTypeCards } from "../_components/ProductsTypeCards";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-10">
      <Greeting />
      <CarouselHome />
      <MorePages />
      <ProductsTypeCards />
    </div>
  );
}