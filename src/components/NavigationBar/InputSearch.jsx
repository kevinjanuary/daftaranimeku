"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value.trim()

        if (!keyword) return
        
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input 
                placeholder="Cari anime..."
                className="w-full p-2 rounded outline-none bg-zinc-700"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button onClick={handleSearch} className="absolute top-2 end-2">
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch