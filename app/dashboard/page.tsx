"use client";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const { data: session, status } = useSession();

  console.log("Session result", session);
  if (status === "loading") return <p>Loading...</p>;
  if (!session)
    return (
      <>
        <p>You don't have access here, Login first</p>
        <button
          onClick={() => router.push("/login")}
          className="w-full h-12 bg-[#BEEBD4] text-[#1D3D27] font-semibold rounded-md hover:bg-[#809D8E] hover:text-white"
        >
          Go to Login
        </button>
      </>
    );

  // const session = getServerSession();
  // console.log("YO", session)

  async function handleSignOut() {
    const res = signOut({ callbackUrl: "/login" });

    if (!res) {
      console.log("Error while signing out");
    } else {
      console.log("Signed Out");
      router.push("/login");
    }
  }

  return (
    <>
      <h1>Welcome</h1>
      <button
        onClick={handleSignOut}
        className="w-full h-12 bg-[#BEEBD4] text-[#1D3D27] font-semibold rounded-md hover:bg-[#809D8E] hover:text-white"
      >
        Sign Out
      </button>
    </>
  );
}
