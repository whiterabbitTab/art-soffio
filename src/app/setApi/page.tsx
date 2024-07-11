"use client"

import { IProducts } from '@/types/products.type'
import styles from './setApi.module.scss'
import { FormEvent, useState } from 'react'
import { DescField, fields, TonField } from '@/constants/api.constant'
import { Field } from './_components/Fields'
import { useAddNewProductsMutation, useGetAllProductsQuery } from '@/store/api/products.api'

const setApiPage = () => {

  const [newProduct, setNewProduct] = useState<IProducts>({
    id: '',
    title: '',
    type: '',
    description: {
      fullInfo: [''],
      heading: ''
    },
    price: 0,
    discount: 0,
    entrance: '',
    image: '',
    stock: false,
    tons: [
      {
        id: 0,
        ton: '',
        colors: []
      }
    ],
    weight: ''
  })
  const [updateData] = useAddNewProductsMutation()
  
  const handleSaveProduct = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    updateData(newProduct)
  }

  return (
    <form className={styles.api__page}>
      <h1 className="text-3xl text-[#f121f8] font-semibold tracking-widest">Add New Product</h1>
      {fields.map(field => {
        return <Field typeField='def' newProduct={newProduct} setNewProduct={setNewProduct} value={field} key={field} />
      })}
      <div className={styles.tons_desc__info}>
        <div className={styles.tons}>
          <h2 className='text-lg font-semibold'>В тона введите id,ton,colors ( colors каждое значение через запятую )</h2>
          {TonField.map(ton => 
            <Field typeField='ton' newProduct={newProduct} setNewProduct={setNewProduct} value={ton} key={ton} title={ton} />
          )}
        </div>
        <div className={styles.description}>
          <h2 className='text-lg font-semibold'>В описание введите общее описание и полное ( полное описание через запятую, слова через пробел )</h2>
          {DescField.map(desc => 
            <Field typeField='desc' newProduct={newProduct} setNewProduct={setNewProduct} value={desc} key={desc} title={desc} />
          )}
        </div>
      </div>
      <button type='submit' onSubmit={(e) => handleSaveProduct(e)}>Save Data</button>
    </form>
  )
}

export default setApiPage

// {
//   id: 'p1',
//   title: 'Матовая помада-карандаш Matte Color Тон 01 Сладкий...',
//   type: 'accessories',
//   description: {
//     fullInfo: [
//       "Не сущит, не стирается",
//       "Не сущит, не стирается",
//       "Не сущит, не стирается",
//       "Не сущит, не стирается"
//     ],
//     heading: 'Комфортное матовое покрытие на весь день! Питает и увлажняет губы. Форма помады способствует более точному, ровному нанесению.'
//   },
//   price: 1850,
//   discount: 55,
//   entrance: '2024-07-15T17:18:13',
//   image: '/product1.png',
//   stock: false,
//   tons: [
//     {
//       id: 1,
//       ton: 'Бордовый',
//       colors: [
//         "#CD0E41",
//         "#E790BF",
//         "#46014C"
//       ]
//     },
//     {
//       id: 2,
//       ton: 'Утрення заря',
//       colors: [
//         "#CD0E41",
//         "#E790BF",
//         "#46014C"
//       ]
//     },
//     {
//       id: 3,
//       ton: 'Персико-розовый',
//       colors: [
//         "#CD0E41",
//         "#E790BF",
//         "#46014C"
//       ]
//     },
//     {
//       id: 4,
//       ton: 'Малиновый',
//       colors: [
//         "#CD0E41",
//         "#E790BF",
//         "#46014C"
//       ]
//     }
//   ],
//   weight: '30g'
// }