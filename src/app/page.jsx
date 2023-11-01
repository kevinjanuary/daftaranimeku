import AnimeCard from "@/components/AnimeCard"
import Header from "@/components/AnimeCard/Header"

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=16`
  )
  const topAnime = await response.json()

  return (
    <div className="md:px-6 md:pb-6 px-4 pb-4">
      {/* Anime populer */}
      <section>
        <Header title="Anime populer" linkTitle="Lihat semua" linkHref="/populer"/>
        <AnimeCard api={topAnime}/>
      </section>
    </div>
  )
}

export default Page