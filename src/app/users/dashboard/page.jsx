import { getCurrentUser } from "@/libs/session"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
  const user = await getCurrentUser()

  return (
    <div className="flex justify-center flex-col items-center mt-8">
      <h5>Hi, {user.name}!</h5>
      <Image src={user.image} alt=".." width={250} height={250} />
      <div className="flex flex-wrap gap-4 py-8">
        <Link href="/users/dashboard/collection">My Collection</Link>
        <Link href="/users/dashboard/comment">My Comment</Link>
      </div>
    </div>
  )
}

export default Page
