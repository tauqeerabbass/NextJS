'use client';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col justify-center bg-white border rounded-lg p-8 max-w-sm w-full">
        <h1 className="font-bold text-3xl text-center text-[#1D3D27] mb-8">Login Page</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#1D3D27]">Enter Email</label>
            <input
              type="email"
              id="email"
              required
              name="email"
              className="border border-gray-300 w-full rounded-sm h-10 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1D3D27]"
              placeholder="Enter email..."
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-[#1D3D27]">Enter Password</label>
            <input
              type="password"
              id="password"
              required
              name="password"
              className="border border-gray-300 w-full rounded-sm h-10 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1D3D27]"
              placeholder="Enter password..."
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#BEEBD4] text-[#1D3D27] font-semibold rounded-md hover:bg-[#809D8E] hover:text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}