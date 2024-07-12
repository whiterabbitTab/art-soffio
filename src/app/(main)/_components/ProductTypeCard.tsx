import { IPagesCards } from '@/constants/home.constant';
import { Image } from 'antd';
import Link from 'next/link';

export const ProductTypeCard = ({ card }: { card: IPagesCards }) => {
  return(
    <Link href={card.href} style={{ backgroundColor: card.bgColor }} className="transition-all duration-300 hover:scale-105 flex w-[24%] flex-col items-center justify-around h-[423px]">
      <Image src={card.image} alt={card.title} preview={false} />
      <h1 className="text-[#555555] text-2xl font-normal">{card.title}</h1>
    </Link>
  );
};
