"use client"
import { useRouter } from "next/navigation"

const NotFound = () => {
  const router = useRouter()

  return (
    <div className="min-h-full max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <h3 className="font-medium my-4">NOT FOUND</h3>
        <button onClick={() => router.back()}>Back</button>
      </div>
    </div>
  )
}

export default NotFound
