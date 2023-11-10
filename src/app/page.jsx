import AnimeCard from "@/components/AnimeCard"
import Header from "@/components/AnimeCard/Header"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=16")

  return (
    <>
      <section>
        <Header title="Anime populer" linkTitle="Lihat semua" linkHref="/populer"/>
        <AnimeCard api={topAnime}/>
      </section>
    </>
  )
}

export default Page