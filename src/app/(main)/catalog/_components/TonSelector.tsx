import { ITon } from "@/types/products.type";
import { Dropdown, MenuProps } from "antd";
import { useState } from "react";

export const TonSelector = ({ tons }: { tons: ITon[] }) => {

  const [tonId, setTonId] = useState<number>(1)
  const items: MenuProps['items'] = tons.map(ton => {
    return {
      key: ton.id,
      label: `Тон ${ton.id < 9 ? `0${ton.id}` : ton.id} - ${ton.ton}`,
    }
  })

  return(
    <div className="flex flex-col w-full items-center gap-y-2 2xl:mb-[161px]">
      <Dropdown 
        arrow={true}
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ['1'],
          onClick: (elem) => {
            setTonId(Number(elem.key))
          }
        }}
        className="w-full"
        trigger={['click']}
        
      >
        <span className="text-center cursor-pointer text-[#555555] font-semibold text-base pr-1">
          Тон {tonId < 9 ? `0${tonId}` : tonId} - {tons.filter(ton => ton.id === tonId)[0].ton}
        </span>
      </Dropdown>
      <div className="grid grid-cols-7 gap-1 h-[136px] overflow-y-scroll border border-black p-[2px]">
        {tons.filter(ton => ton.id === tonId)[0].colors.map(color => {
          return <div className="transition-all duration-300 hover:scale-105 size-[55px] cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
        })}
        {tons.filter(ton => ton.id === tonId)[0].colors.map(color => {
          return <div className="transition-all duration-300 hover:scale-105 size-[55px] cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
        })}
        {tons.filter(ton => ton.id === tonId)[0].colors.map(color => {
          return <div className="transition-all duration-300 hover:scale-105 size-[55px] cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
        })}
        {tons.filter(ton => ton.id === tonId)[0].colors.map(color => {
          return <div className="transition-all duration-300 hover:scale-105 size-[55px] cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
        })}
        {tons.filter(ton => ton.id === tonId)[0].colors.map(color => {
          return <div className="transition-all duration-300 hover:scale-105 size-[55px] cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
        })}
        {tons.filter(ton => ton.id === tonId)[0].colors.map(color => {
          return <div className="transition-all duration-300 hover:scale-105 size-[55px] cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
        })}
        {tons.filter(ton => ton.id === tonId)[0].colors.map(color => {
          return <div className="transition-all duration-300 hover:scale-105 size-[55px] cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
        })}
        {tons.filter(ton => ton.id === tonId)[0].colors.map(color => {
          return <div className="transition-all duration-300 hover:scale-105 size-[55px] cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
        })}
      </div>
    </div>
  );
};
