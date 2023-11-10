import AnimeCard from "@/components/AnimeCard"
import Header from "@/components/AnimeCard/Header"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = async ({ params }) => {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)  
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

  return (
    <div className="md:px-6 md:pb-6 px-4 pb-4">
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}...`} />
        <AnimeCard api={searchAnime}/>
      </section>
    </div>
  )
}

export default Page