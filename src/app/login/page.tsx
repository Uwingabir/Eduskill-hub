"use client";
import React from "react";
import Navbar from "@/components/navigation";
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        {/* Team Image */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/path-to-your-team-image.jpg" // Replace with your team's image path
            alt="Team"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Login</h2>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Links section */}
        <div className="mt-4 text-center space-y-2">
          <a href="#" className="text-sm text-blue-500 hover:underline block">Forgot password?</a>
          <div className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline font-medium">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage