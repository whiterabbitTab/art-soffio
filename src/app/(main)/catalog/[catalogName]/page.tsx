'use client'

import { useParams } from "next/navigation"
import { catalogPages } from "@/constants/catalog.constants"
import { Image } from "antd"
import CatalogCard from "../_components/CatalogCard"

const Catalog = () =>{

  const params = useParams()
  const catalog = catalogPages.filter(el => el.href.includes(params.catalogName as string))[0]

  return (
    <div className="flex flex-col gap-y-4 my-4 w-full">
      {/* <Image /> */}
      <div className="grid grid-cols-3 justify-center gap-y-2 gap-x-2 2xl:grid-cols-4 w-full mx-auto">
        {catalog.catalogs.map(({ href, image, title }) => {
          return <CatalogCard href={href} image={image} title={title}  />
        })}
      </div>
    </div>
  )
}

export default Catalog