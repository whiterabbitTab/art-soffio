import { IProducts } from "@/types/products.type";
import { MouseEvent, useEffect, useState } from "react";

export const ProductDescription = ({ product }: { product: IProducts }) => {

  const [text, setText] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleDesc = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement
    setText(Number(button.dataset.desc))
    const buttons = document.querySelectorAll(`button[data-desc]`) as NodeListOf<HTMLButtonElement>
    buttons.forEach((btn) => {
      btn.style.color = "#838181"
    })
  }

  const showMore = () => {
    const description = document.getElementById('description') as HTMLUListElement
    if (isOpen) {
      description.style.overflow = 'visible'
      description.style.height = 'auto'
      description.style.color = '#555555'
    } else {
      description.style.overflow = 'hidden'
      description.style.height = '32px'
      description.style.color = '#C4C2C2'
    }
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const button = document.querySelector(`button[data-desc="${text}"]`) as HTMLButtonElement
    button.style.color = "#555555"
  }, [text])

  return(
    <div className="flex flex-col items-center gap-y-7 w-full text-[#555555]"> {/* ПО СУТИ ДОЛЖНО ИДТИ ИЗ АПИ, НО БЛЯТЬ ДОБАВЛЯТЬ НОВЫЕ ПРОДУКТЫ В ЕБАННУЮ БД К КАЖДОМУ ТОВАРУ МНЕ СЛИШКОМ ЛЕНЬ */}
      <div className="flex w-full items-center justify-between">
        <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleDesc(e)} data-desc='0' className="font-normal text-[30px] text-[#838181]">Описание товара</button>
        <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleDesc(e)} data-desc='1' className="font-normal text-[30px] text-[#838181]">Как пользоваться</button>
        <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleDesc(e)} data-desc='2' className="font-normal text-[30px] text-[#838181]">Ингредиенты</button>
      </div>
      <div className="flex flex-col gap-y-3 w-3/5">
        <p style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical" }} className="h-12 overflow-hidden text-ellipsis text-base font-normal">{product.description.heading}</p>
        <ul id="description" className="flex flex-col gap-y-1 overflow-hidden h-8 text-[#C4C2C2]">
          {product.description.fullInfo.map((info) => {
            return <li className="font-normal text-base list-disc ml-4">{info}</li>
          })}
        </ul>
        <button onClick={() => showMore()} className="transition-all duration-300 hover:opacity-60 font-normal text-sm leading-10">Подробнее</button>
      </div>
    </div>
  );
};
