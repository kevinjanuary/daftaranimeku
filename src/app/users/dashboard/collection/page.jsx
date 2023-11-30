import Header from "@/components/Dashboard/Header"
import prisma from "@/libs/prisma"
import { getCurrentUser } from "@/libs/session"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
  const user = getCurrentUser()
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  })
  console.log({ collection })

  return (
    <>
      <section className="mt-4">
        <Header title={"My Collection"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collection.map((item) => (
            <Link href={`/anime/${item.anime_mal_id}`} key={item.id}>
              <Image src="/" alt=".." width={250} height={250} />
              <div className="w-full flex items-center justify-center">
                <h5 className="text-xl text-center">
                  ID Anime: {item.anime_mal_id}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Page
