import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-full max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <h3 className="font-medium my-4">NOT FOUND</h3>
                <Link href="/">Home</Link>
            </div>
        </div>
    )
}

export default NotFound