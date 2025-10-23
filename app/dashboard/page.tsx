"use client";
import { getServerSession } from "next-auth";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard (){

    // const {data: session, status} = useSession();

    // if (status === "loading") return <p>Loading...</p>
    // if (!session) return <p>You don't have access here</p>
    // console.log(session?.user)

    // const session = getServerSession();
    // console.log("YO", session)

    const router = useRouter();

    // async function handleSignOut() {
    //     const res = signOut();

    //     if (!res){
    //         console.log("Error while signing out")
    //     }
    //     else{
    //         console.log("Signed Out")
    //         router.push("/login")
    //     }
    // }

    return(
        <>
        <h1>Welcome</h1>
        {/* <button onClick={handleSignOut} className="w-full h-12 bg-[#BEEBD4] text-[#1D3D27] font-semibold rounded-md hover:bg-[#809D8E] hover:text-white">Sign Out</button> */}
        </>
    );
}