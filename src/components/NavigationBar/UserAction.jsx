import { getCurrentUser } from "@/libs/session";
import Link from "next/link";

const UserAction = async () => {
    const user = await getCurrentUser()

    return (
        <>
            { user ?
                <div className="flex gap-4">
                    <Link href="/users/dashboard" className="font-medium text-lg">Dashboard</Link>
                    <Link href="/api/auth/signout" className="font-medium text-lg">Logout</Link>
                </div>
            : 
                <Link href="/api/auth/signin" className="font-medium text-lg">Login</Link>
            }
        </>
    );
}

export default UserAction