"use client"

import { Footer } from "./_components/Footer"
import { Header } from "./_components/Header"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="sm:w-4/5 mx-auto">
        {children}
      </main>
      <Footer />
    </>
  )
}