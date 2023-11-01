import AnimeCard from "@/components/AnimeCard"
import Header from "@/components/AnimeCard/Header"

const Page = async ({ params }) => {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  )
  const searchAnime = await response.json()

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