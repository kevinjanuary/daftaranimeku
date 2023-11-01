import Link from "next/link"

const NavigationBar = () => {
    return (
        <header className="mb-6">
            <div className="bg-zinc-900 flex md:flex-row flex-col justify-between p-8 gap-2">
                <Link href="/" className="font-medium text-lg">DaftarAnimeKu</Link>
                <input placeholder="Cari anime..."/>
            </div>
        </header>
    )
}

export default NavigationBar