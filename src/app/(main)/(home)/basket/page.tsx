'use client'

import { useTypedSelector } from "@/hooks/typedHooks"
import { BasketHeader } from "./_components/BasketHeader"
import { BasketProducts } from "./_components/BasketProducts"
import { BasketSummary } from "./_components/BasketSummary"

const Basket = () => {

  const { basket, ...userInfo } = useTypedSelector(state => state.userSlice)

  return (
    <div className="flex justify-between w-full py-6 text-[#555555]">
      <div className="flex flex-col items-center gap-y-5 w-3/5">
        <BasketHeader countProducts={basket.length} />
        <BasketProducts basket={basket} loading={userInfo.loading} />
      </div>
      <BasketSummary />
    </div>
  )
}

export default Basket