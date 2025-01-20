"use client";
import React from "react";

import Navbar from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

const teamImage = "/path/to/your/image.jpg"; // Update with the correct path to your image
const GenerateJobPage = () => {
  return (
    
    <div className="min-h-screen bg-gray-100 p-6">
      < Navbar />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">
            Generate New Job Opportunities
          </h1>
          <p className="text-gray-600 mt-2">
            We are committed to creating new jobs through education and skill-building.
          </p>
        </header>

        {/* Team Image */}
        <div className="flex justify-center mb-6">
          <Image
            src={teamImage}
            alt="Our Team"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Job Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              rows={4}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="jobLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Job Location
            </label>
            <input
              type="text"
              id="jobLocation"
              name="jobLocation"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="jobSalary"
              className="block text-sm font-medium text-gray-700"
            >
              Job Salary
            </label>
            <input
              type="text"
              id="jobSalary"
              name="jobSalary"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Generate Job Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenerateJobPage;
