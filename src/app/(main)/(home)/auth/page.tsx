'use client'

import { CustomButton } from "@/features/CustomButton"
import { InputField } from "../../_components/InputField"
import { MouseEvent, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/config/firebase.config"
import { redirect } from "next/navigation"

const AuthPage = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmpassword, setConfirmPassword] = useState<string>('')
  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    if (password === confirmpassword) {
      signInWithEmailAndPassword(auth, email, password) // не работает в submit
        .then((user) => {
          console.log(user)
          setEmail('')
          setPassword('')
          setConfirmPassword('')
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="flex flex-col items-center w-full my-12">
      <form className="flex flex-col items-center w-1/2 gap-y-12 py-6 px-4 bg-[#dddada] rounded-xl">
        <h1 className="font-bold text-3xl leading-10">Авторизация</h1>
        <div className="flex flex-col mb-24">
          <InputField type="email" name="email" title="Введите ваш email" placeholder="Введите ваш email" setState={setEmail} state={email} className="mb-4" isImportant={true} />
          <InputField type="password" name="password" title="Введите ваш пароль" placeholder="Введите ваш пароль" setState={setPassword} state={password} className="mb-4" isImportant={true} />
          <InputField type="password" name="confirmpassword" title="Подтвердите ваш пароль" placeholder="Подтвердите ваш пароль" setState={setConfirmPassword} state={confirmpassword} className="mb-4" isImportant={true} />
        </div>
        <div className="flex flex-col gap-y-2 w-3/5">
          <CustomButton clickFn={handleLogin} title="Вход" className="bg-[#43BE65] w-full h-10 hover:text-[#43BE65] hover:bg-white border-2"/>
          <button type="button" className="transition-all duration-300 hover:opacity-60 font-normal text-sm">Нет аккаунта?</button>
        </div>
      </form>
    </div>
  )
}

export default AuthPage