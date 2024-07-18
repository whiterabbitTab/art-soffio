"use client"

import { Footer } from "./_components/Footer"
import { Header } from "./_components/Header"

export default function MainLayout({ children }: { children: React.ReactNode }) {
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