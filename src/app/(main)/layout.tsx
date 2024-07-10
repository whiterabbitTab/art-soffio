"use client"

import { Header } from "./_components/Header"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}