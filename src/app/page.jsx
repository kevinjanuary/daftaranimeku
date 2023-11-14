import AnimeCard from "@/components/AnimeCard"
import Header from "@/components/AnimeCard/Header"
import { getAnimeResponse, getNestedAnimeResponse, randomData } from "@/libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=16")
  const recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  const randomizeData = randomData(recommendedAnime, 8)

  return (
    <>
      <section>
        <Header title="Anime populer" linkTitle="Lihat semua" linkHref="/populer"/>
        <AnimeCard api={topAnime}/>
      </section>
      <section>
        <Header title="Rekomendasi Anime" linkTitle="Lihat semua" linkHref="/populer"/>
        <AnimeCard api={randomizeData}/>
      </section>
    </>
  )
}

export default Page