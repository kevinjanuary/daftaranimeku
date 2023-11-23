import Link from "next/link"
import InputSearch from "./InputSearch"
import UserAction from "./UserAction"

const NavigationBar = () => {
    return (
        <header className="mb-6">
            <div className="bg-zinc-900 flex md:flex-row flex-col justify-between items-center p-6 gap-2">
                <Link href="/" className="font-medium text-lg">DaftarAnimeKu</Link>
                <InputSearch/>
                <UserAction/>
            </div>
        </header>
    )
}

export default NavigationBar