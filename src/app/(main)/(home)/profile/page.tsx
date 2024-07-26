'use client'

import { useTypedSelector } from "@/hooks/typedHooks"
import { IUserData } from "@/types/user.type"
import { ChangeEvent, useEffect, useState } from "react"
import { InputField } from "../../_components/InputField"
import { CustomButton } from "@/features/CustomButton"
import { Image } from "antd"
interface IFields {
  name: string;
  value: string;
  placeholder: string
}

const Profile = () => {

  const { basket, ...userInfo } = useTypedSelector(state => state.userSlice)

  const [fields, setFields] = useState<IFields[]>(Object.keys(userInfo).map((key, i) => {
    return {
      name: key,
      value: userInfo[key as keyof object],
      placeholder: `Введите ${key}`
    }
  }))

  useEffect(() => {
    if (userInfo) {
      setFields(Object.keys(userInfo).map((key, i) => {
        return {
          name: key,
          value: userInfo[key as keyof object],
          placeholder: `Введите ${key}`
        }
      }))
    }
  }, [userInfo])

  const handleResetData = () => {
    setFields(Object.keys(userInfo).map((key, i) => {
      return {
        name: key,
        value: userInfo[key as keyof object],
        placeholder: `Введите ${key}`
      }
    }))
  }

  return (
    <div className="flex flex-col items-center my-6 gap-y-3">
      <h1 className="text-3xl font-semibold">Данные пользователя</h1>
      {userInfo.email ? (
        <div className="flex items-center justify-center gap-x-12">
          <div className="flex flex-col items-center gap-y-3">
            <Image src={userInfo.icon ? userInfo.icon : '/auth_icon.png'} width={200} height={200} className="rounded-full pointer-events-none" preview={false} alt="profile" />
            <h2 className="font-semibold text-lg">{userInfo.username}</h2>
          </div>
          <div className="flex flex-col gap-y-12 items-center my-6 rounded-[50px]">
            <form className="grid grid-cols-3 gap-x-5">
              {fields.map((field, i) => {
                return <InputField setState={(e: ChangeEvent<HTMLInputElement>) => setFields(prev => {
                  return prev.map(el => el.name === field.name ? { ...el, value: e.target.value } : el)
                })} title={field.name} name={field.name} placeholder={field.placeholder} state={field.value} key={i} />
              })}
              <CustomButton title="Сбросить" clickFn={() => handleResetData()} className="bg-[#2816c7] text-sm mt-6 px-9 py-1 hover:bg-transparent hover:text-[#2816c7]" type="submit" />
              <CustomButton title="Сохранить" className="bg-[#43BE65] text-sm mt-6 px-9 py-1 hover:bg-transparent hover:text-[#43BE65]" type="submit" />
              <CustomButton title="Выйти из аккаунта" className="bg-[#e21b1b] text-sm mt-6 px-9 py-1 hover:bg-transparent hover:text-[#e21b1b]" type="submit" />
            </form>
          </div>
        </div>
      ) : (<div>Loading...</div>)}
    </div>
  )
}

export default Profile