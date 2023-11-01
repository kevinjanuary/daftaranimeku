import Link from "next/link"

const Header = ({ title, linkTitle, linkHref }) => {
    return (
        <div className="flex justify-between p-4">
            <h1 className="text-lg font-medium">{title}</h1>
            {
                linkHref && linkTitle ?
                <Link href={linkHref} className="text-lg hover:text-yellow-400">{linkTitle}</Link> :
                null
            }
        </div>
    )
}

export default Header