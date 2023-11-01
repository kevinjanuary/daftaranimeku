import Image from "next/image"
import Link from "next/link";

const AnimeCard = ({id, title, images}) => {
    return (
        <Link href={`/${id}`}>
            <Image src={images} alt="..." width={300} height={420} className="aspect-card w-full object-cover"/>
            <h3 className="font-medium text-sm p-2">{title}</h3>
        </Link>
    )
}

export default AnimeCard;