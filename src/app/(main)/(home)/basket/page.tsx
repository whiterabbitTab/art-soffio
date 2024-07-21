
const Basket = () =>{
  return (
    <div className="flex justify-between w-full text-[#555555]">
      <div className="flex flex-col items-center gap-y-5 w-3/5">
        <div className="flex flex-col justify-center px-[30px] py-8 gap-y-8 w-full h-36 bg-[#F8F8F8]">
          <h1 className="font-bold text-2xl leading-6">Корзина (0)</h1>
          <form className="flex items-center gap-x-2">
            <input className="size-[18px] cursor-pointer" name="allProd" type="checkbox" />
            <label className="text-[#888888] font-normal text-sm" htmlFor="allProd">Выбрать все</label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Basket