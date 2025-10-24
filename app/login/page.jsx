"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    console.log("Login result:", result);

    if (result?.ok) {
      console.log("Login Successful");
      setLoading(false);

      localStorage.setItem("Name", "");
      localStorage.setItem("Username", username);
      localStorage.setItem("Password", password);

      router.push("/dashboard");
    } else {
      console.log("Invalid credentials");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col justify-center bg-white border rounded-lg p-8 max-w-sm w-full">
        <h1 className="font-bold text-3xl text-center text-[#1D3D27] mb-8">
          Login Page
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#1D3D27]">
              Enter Username
            </label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              className="border border-gray-300 w-full rounded-sm h-10 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1D3D27]"
              placeholder="Enter username..."
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-[#1D3D27]">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="border border-gray-300 w-full rounded-sm h-10 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1D3D27]"
              placeholder="Enter password..."
            />
          </div>

          {error && <h1 className="text-red">Error</h1>}
          <button
            type="submit"
            className="w-full h-12 bg-[#BEEBD4] text-[#1D3D27] font-semibold rounded-md hover:bg-[#809D8E] hover:text-white"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
