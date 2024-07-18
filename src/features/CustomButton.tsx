import { FormEvent, MouseEvent } from "react";

interface ICustomButton {
  width: number;
  height: number;
  submitFn?: (e: FormEvent<HTMLButtonElement>) => void;
  clickFn?: (e: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  bgColor: string;
  textColor: string;
  className: string;
}

export const CustomButton = ({ width, height, submitFn, clickFn, title, bgColor, textColor, className }: ICustomButton) => {
  return(
    <button style={{ width: width, height: height }} onSubmit={submitFn} onClick={clickFn} className={`transition-all duration-300 border text-white hover:text-[${bgColor}] hover:border-[${bgColor}] flex items-center justify-center py-2 font-normal text-lg leading-6 rounded-[19px] ${className} bg-[${bgColor}]`}>{title}</button>
  );
};
