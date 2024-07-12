import { FormEvent, MouseEvent } from "react";

interface ICustomButton {
  width: number;
  height: number;
  submitFn?: (e: FormEvent<HTMLButtonElement>) => void;
  clickFn?: (e: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  bgColor: string;
  textColor: string;
}

export const CustomButton = ({ width, height, submitFn, clickFn, title, bgColor, textColor }: ICustomButton) => {
  return(
    <button style={{ width: width, height: height, color: textColor }} onSubmit={submitFn} onClick={clickFn} className={`transition-all duration-300 hover:text-black border hover:text-[${bgColor}] hover:border-[${bgColor}] flex items-center justify-center py-2 font-normal text-lg leading-6 rounded-[19px] bg-[${bgColor}]`}>{title}</button>
  );
};
