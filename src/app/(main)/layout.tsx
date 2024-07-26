"use client"

import { useGetUserByIdQuery } from "@/store/api/user.api"
import { Footer } from "./_components/Footer"
import { Header } from "./_components/Header"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/config/firebase.config"
import { useTypedDispatch } from "@/hooks/typedHooks"
import { userSlice } from "@/store/userslice/user.slice"

export default function MainLayout({ children }: { children: React.ReactNode }) {

  const [uid, setUid] = useState<string>('')
  const { data: userData } = useGetUserByIdQuery(uid)
  const dispatch = useTypedDispatch()
  
  if (userData) {
    Object.keys(userData).map((key) => {
      dispatch(userSlice.actions.setUser([ key, userData[key as keyof object] ]))
    })
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid)
      }
    })
    return () => {
      listen()
    }
  }, [])
  

  return (
    <>
      <Header />
      <main className="md:w-4/5 w-full mx-auto">
        {children}
      </main>
      <Footer />
    </>
  )
}