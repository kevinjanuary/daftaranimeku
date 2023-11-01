import AnimeCard from "@/app/components/AnimeCard"
import Link from "next/link"

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=16`
  )
  const anime = await response.json()

  return (
    <div className="md:px-6 md:pb-6 px-4 pb-4">
      <div className="flex justify-between p-4">
        <h1 className="text-lg font-medium">Anime populer</h1>
        <Link href="/populer" className="text-lg hover:text-yellow-400">Lihat semua</Link>
      </div>
      <div className="grid 2xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl bg-neutral-900 rounded overflow-hidden">
              <AnimeCard id={data.mal_id} title={data.title} images={data.images.webp.image_url}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home