import { greeting } from "@/constants/stocks.constant"
import { Image } from "antd"
import Link from "next/link"

const StocksGreeting = () =>{
  return (
    <div className="flex gap-x-14 items-center w-full">
      {greeting.map(greet => {
        return (
          <div className="flex flex-col items-center gap-y-3">
            <Image src={greet.image} alt="stocks greeting" preview={false} />
            <span className="font-semibold text-xs">{greet.span}</span>
            <h2 className="font-semibold text-xl">{greet.title}</h2>
            <Link href={greet.href} className="transition-all duration-300 hover:opacity-60 font-semibold text-sm leading-10 text-[#555555a9]">СМОТРЕТЬ</Link>
          </div>
        )
      })}
    </div>
  )
}

export default StocksGreeting