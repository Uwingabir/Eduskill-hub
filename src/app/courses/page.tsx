"use client";
import Image from 'next/image'
import Navbar from "@/components/navigation";
import Footer from "@/components/footer";

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
     < Navbar /> 
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Title</h1>
          <p className="text-xl text-gray-700 mb-8">Learn everything you need to know to succeed in your career!</p>
          
          {/* Team Image */}
          <div className="relative mx-auto mb-6 w-40 h-40 rounded-full overflow-hidden">
            <Image
              src="/teamImage.jpg"  // Replace this with the actual path to your team image
              alt="Our Team"
              layout="fill"
              objectFit="cover"
            />
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are passionate about educating individuals and bridging the skills gap. Join our team of expert instructors who are committed to making learning accessible and impactful!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Course Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Course 1</h3>
              <p className="text-gray-600 mt-2">This course teaches the fundamentals of web development using modern frameworks.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Course 2</h3>
              <p className="text-gray-600 mt-2">Master data science with hands-on examples and industry-relevant skills.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-yellow-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Course 3</h3>
              <p className="text-gray-600 mt-2">Learn about cloud computing and how to build scalable, efficient systems in the cloud.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CoursePage
