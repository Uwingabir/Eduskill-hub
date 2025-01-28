"use client";
import Image from "next/image";
import Navbar from "@/components/navigation";
import Footer from "@/components/footer";

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Title</h1>
          <p className="text-xl text-gray-700 mb-8">
            Learn everything you need to know to succeed in your career!
          </p>
          <Image
            src="/images/coursse.jpg"
            alt="Course Preview"
            width={1920}
            height={720}
            className="w-full h-48 object-cover rounded-lg"
          />

          {/* Team Image */}
          <div className="relative mx-auto mb-6 w-40 h-40 rounded-full overflow-hidden">
            <Image
              src="/teamImage.jpg" // Replace with the actual path to your team image
              alt="Our Team"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are passionate about educating individuals and bridging the skills gap. Join our team of expert instructors who are committed to making learning accessible and impactful!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Course Cards */}
          {[
            { src: "/images/images  for course 1.jpg", title: "Course 1", description: "This course teaches the fundamentals of web development using modern frameworks." },
            { src: "/images/course 2.jpg", title: "Course 2", description: "Master data science with hands-on examples and industry-relevant skills." },
            { src: "/images/course 3.jpg", title: "Course 3", description: "Study human cultures, their development, and how they interact with environments, useful for designing inclusive, global applications." },
            { src: "/images/couese 4.jpg", title: "Course 4", description: "Analyze governance systems, public policy, and political behavior, essential for roles in policy analysis and civic data science." },
            { src: "/images/Course 5.jpg", title: "Course 5", description: "Learn about cloud computing and how to build scalable, efficient systems in the cloud." },
            { src: "/images/course  6.jpg", title: "Course 6", description: "Study human cultures, their development, and how they interact with environments, useful for designing inclusive, global applications." },
          ].map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={course.src}
                alt={course.title}
                width={400}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
