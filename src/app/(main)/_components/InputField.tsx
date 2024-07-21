import { Dispatch, SetStateAction } from "react";

interface IINputField {
  placeholder: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  name: string;
  title: string;
  type?: string;
  className?: string;
  isImportant?: boolean;
}

export const InputField = ({ placeholder, state, setState, name, title, type='text', className, isImportant = false }: IINputField) => {
  return(
    <>
      <label className="font-bold text-[10px] leading-6 ml-[2px]" htmlFor={name}>{title}{isImportant && <span className="text-[12px] text-[#cc1616] ml-[2px]">*</span>}</label>
      <input name={state} type={type} value={state} placeholder={placeholder} onChange={(e) => setState(e.target.value)} className={`placeholder:text-xs text-sm font-medium w-[324px] rounded-sm py-2 px-2 border border-[#A2A6B0] ${className}`} />
    </>
  );
};
