// pages/index.tsx
"use client"

import Head from "next/head";
import Navbar from "../components/navigation"; // Import the Navbar component

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <Head>
        <title>Welcome to EduSkills</title>
        <meta name="description" content="Bridging education and industry needs through skills development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Include the Navbar */}
      <Navbar />

      <main className="flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Welcome to <span className="text-blue-800">EduSkills</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Empowering individuals through education and skills development. Let's bridge the gap between learning and industry needs.
        </p>
        <div className="mt-8">
          <a
            href="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Explore Programs
          </a>
        </div>
      </main>

      <footer className="w-full text-center py-4 border-t">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} EduSkills. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
