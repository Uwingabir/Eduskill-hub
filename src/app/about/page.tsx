"use client";
import React from "react";

import Navbar from "@/components/navigation";
import Footer from "@/components/footer";

const AboutUs: React.FC = () => {
  return (
    
    
    <div className="bg-gray-50 min-h-screen">
    
      <Navbar />
  
    
      
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600">
            We are a passionate team committed to bridging the gap between education and employment. Our mission is to create meaningful opportunities through skill-based learning and job placement.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Dedicated professionals behind the vision.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="w-60 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/team-member-1.jpg"
                alt="Team Member 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  John Doe
                </h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>

            <div className="w-60 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/image1.jpeg"
                alt="Team Member 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Jane Smith
                </h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>

            <div className="w-60 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/team-member-3.jpg"
                alt="Team Member 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Alice Johnson
                </h3>
                <p className="text-gray-600">Head of Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
      
  


  );
};

export default AboutUs;
