"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
  const router = useRouter()

  const handleBack = (event) => {
    event.preventDefault()
    router.back()
  }

  return (
    <div className="flex flex-col gap-4 mb-8">
      <button onClick={handleBack} className="flex items-center gap-2">
        <ArrowSquareLeft size={32} />
        Back
      </button>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  )
}

export default Header
