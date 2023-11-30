import CollectionButton from "@/components/AnimeList/CollectionButton"
import { getAnimeResponse } from "@/libs/api-libs"
import { getCurrentUser } from "@/libs/session"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)
  const user = await getCurrentUser()
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  })

  return (
    <div>
      <h3 className="text-xl font-medium">{data.title}</h3>
      {user && !collection && (
        <CollectionButton mal_id={id} email={user?.email} />
      )}
      <div className="flex flex-wrap sm:flex-nowrap">
        <p>{data.synopsis}</p>
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          width={250}
          height={250}
          className=""
        />
      </div>
    </div>
  )
}

export default Page
