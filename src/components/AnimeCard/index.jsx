import Image from "next/image"
import Link from "next/link"

const AnimeCard = ({ api }) => {
    return (
        <div className="grid 2xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4">
            {api.data.map(anime => {
                return (
                    <div key={anime.mal_id} className="rounded overflow-hidden bg-zinc-900">
                        <Link href={`/${anime.mal_id}`}>
                            <Image src={anime.images.webp.image_url} alt="..." width={300} height={420} className="aspect-card w-full object-cover"/>
                            <h3 className="font-medium text-sm p-2">{anime.title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AnimeCard;