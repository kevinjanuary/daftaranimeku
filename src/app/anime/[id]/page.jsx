import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async ({ params: {id} }) => {
    const { data } = await getAnimeResponse(`anime/${id}`)
    return (
        <div>
            <h3 className="text-xl font-medium">{data.title}</h3>
            <div className="flex flex-wrap sm:flex-nowrap">
                <p>{data.synopsis}</p>
                <Image src={data.images.webp.image_url} alt={data.images.jpg.image_url} width={250} height={250} className=""/>
            </div>
        </div>
    )
}

export default Page