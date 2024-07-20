'use client'

import { Carousel } from "@/app/_components/Carousel"
import { useGetProductByIdQuery } from "@/store/api/products.api"
import { Image } from "antd"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { TonSelector } from "../../_components/TonSelector"
import { CustomButton } from "@/features/CustomButton"

const ProductPage = () => {

  const params = useSearchParams()
  
  const productId = params.get('productId') as string
  const { data: product, isLoading, isSuccess } = useGetProductByIdQuery(productId)

  return (
    <div className="w-full flex flex-col items-center my-12">
      {isLoading ? (<div>Loading...</div>) : isSuccess ? (
        <div className="w-full flex items-center gap-x-8 text-[#888888]">
          <div className="flex flex-col items-center w-1/2">
            <Image src={product.image} alt="product image" preview={false} className="pointer-events-none" />
            {/* <Carousel  /> */}
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <span className={`${new Date(product.entrance).getTime() > new Date().getTime()  ? 'text-[#FF6B74] border-[#FF6B74]' : 'text-[#43BE65] border-[#43BE65]' } select-none rounded-md text-[9px] font-semibold leading-6 px-2 border`}>{new Date(product.entrance).getTime() > new Date().getTime() ? 'ВРЕМЕННО НЕТ В НАЛИЧИИ' : 'В НАЛИЧИИ'}</span>
            {new Date(product.entrance).getTime() > new Date().getTime() ? (
              <span className="text-[11px] font-normal leading-6">Поступление ожидается: {`${new Date(product.entrance).getDate()}.${new Date(product.entrance).getMonth() + 1}.${new Date(product.entrance).getFullYear()}`}</span>
            ) : ''}
            <span className="text-xs font-normal leading-6">{product.brand.replace('-', ' ').toUpperCase()}</span>
            <h2 className="font-semibold text-2xl leading-8 w-[80%] text-[#555555] h-[65px] overflow-hidden text-ellipsis whitespace-normal">{product.title}</h2>
            <div className="w-full flex items-center justify-between">
              <span className="text-[11px] font-normal">{product.weight}</span>
              <div className="flex items-center gap-x-6">
                <span className="font-normal max-w-[137px] xl:max-w-[264px] text-[10px] text-[#555555] text-lg leading-6 my-1">{product.price}₸</span>
              </div>
            </div>
            <TonSelector tons={product.tons} />
            <CustomButton title="В корзину" className="w-full h-10 bg-[#43BE65] text-white text-lg font-normal border-2 hover:text-[#43BE65] hover:bg-white" />
          </div>
        </div>
      ) : (<div>Not found</div>)}
    </div>
  )
}

export default ProductPage