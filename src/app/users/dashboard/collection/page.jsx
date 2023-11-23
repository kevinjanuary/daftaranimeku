import Header from "@/components/Dashboard/Header"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
  return (
    <>
      <section className="mt-4">
        <Header title={"My Collection"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/">
            <Image src="" alt=".." width={250} height={250} />
            <div className="w-full flex items-center justify-center">
              <h5 className="text-xl text-center">Judul Anime</h5>
            </div>
          </Link>
          <Link href="/">
            <Image src="" alt=".." width={250} height={250} />
            <div className="w-full flex items-center justify-center">
              <h5 className="text-xl text-center">Judul Anime</h5>
            </div>
          </Link>
          <Link href="/">
            <Image src="" alt=".." width={250} height={250} />
            <div className="w-full flex items-center justify-center">
              <h5 className="text-xl text-center">Judul Anime</h5>
            </div>
          </Link>
          <Link href="/">
            <Image src="" alt=".." width={250} height={250} />
            <div className="w-full flex items-center justify-center">
              <h5 className="text-xl text-center">Judul Anime</h5>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Page
