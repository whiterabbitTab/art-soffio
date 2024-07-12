import { ProductCard } from "@/app/setApi/_components/ProductCard";
import { homeResponsive } from "@/constants/home.constant";
import { useGetAllProductsQuery } from "@/store/api/products.api";
import Link from "next/link";
import Carousel from "react-multi-carousel";

export const CarouselHome = () => {

  const { data: products, isLoading, isSuccess } = useGetAllProductsQuery()

  return(
    <>
      {isLoading ? (<div>Загрузка</div>) : isSuccess ? (
        <div className="relative w-full hidden md:flex flex-col gap-y-12">
          <h1 className="font-semibold text-4xl w-full text-center text-[#555555]">Хит продаж</h1>
          <Link href='/' className="transition-all duration-300 hover:opacity-60 relative left-[90%] border-b-2 border-[#555555] text-[#555555] font-semibold text-xl w-36">Смотреть все</Link>
          <Carousel
            responsive={homeResponsive}
            autoPlay={false}
            arrows
            className="ml-24"
            pauseOnHover
            customTransition="all .5s"
            transitionDuration={500}
          >
            {products.map(({ discount, price, image, title  }) => {
              return <ProductCard discount={discount} price={price} image={image} text={title}  />
            })}
          </Carousel>
        </div>
      ) : (<div>Товары не найдены</div>)}
    </>
  );
};
