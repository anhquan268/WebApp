import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      {/* Navbar - Cố định trên đầu trang */}
      <div className="fixed top-0 left-0 w-full bg-black py-4 px-6 flex justify-between items-center z-50">
        {/* Logo và Menu */}
        <div className="flex items-center space-x-6">
          <img src="/src/components/images/logo.png" alt="SkyProperties" className="h-8" />
          <a href="/" className="hover:underline text-white">Screenshots</a>
          <a href="/about" className="hover:underline text-white">Property Listings</a>
        </div>
        {/* Login */}
        <div className="text-white">
          <a href="#" className="hover:underline">Login</a>
        </div>
      </div>

      {/* Nội dung chính với padding để không bị che bởi Navbar */}
      <div className="mt-20 w-full flex flex-col items-center">
        {/* Logo */}
        <div className="flex justify-center items-center mb-16">
          <img src="/src/components/images/logo.png" alt="SkyProperties" className="h-16" />
        </div>

        {/* Login Form */}
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full pb-16">
          <p className="text-center text-gray-700 mb-4">
            To login as admin, please use the credentials below:
          </p>
          <p className="text-center text-sm font-semibold mb-6">
            <span className="text-black font-bold">Email:</span> <span className="text-gray-700">admin@tadabase.io</span>
            <br />
            <span className="text-black font-bold">Password:</span> <span className="text-gray-700">123456</span>
          </p>

          {/* Input Fields */}
          <div className="mb-4 flex items-center">
            <label className="w-1/6 text-gray-700 font-medium text-right mr-4">Email Address</label>
            <input
              type="email"
              placeholder="         Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-5/6 px-4 py-3 border rounded-full bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-6 flex items-center">
            <label className="w-1/6 text-gray-700 font-medium text-right mr-4">Password</label>
            <input
              type="password"
              placeholder="         Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-5/6 px-4 py-3 border rounded-full bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Sign In Button - Căn phải */}
          <div className="flex justify-end">
          <label className="w-1/6 text-gray-700 font-medium text-right mr-4"></label>
            <button className="w-5/6 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full hover:bg-green-600">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
