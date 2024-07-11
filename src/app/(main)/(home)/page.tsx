"use client"

import { useGetAllProductsQuery } from "@/store/api/products.api";
import { Greeting } from "../_components/Greeting";

export default function Home() {

  const { data: products, isLoading, isSuccess, isError, error } = useGetAllProductsQuery()
  console.log(products, isSuccess, isError, error)

  return (
    <div className="flex flex-col w-full gap-y-10">
      <Greeting />
    </div>
  );
}