"use client";
import Image from "next/image";
import Navbar from "@/components/navigation";
import Footer from "@/components/footer";
import Layout from "@/components/Layout";
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-5">
       <Navbar />
      <h1 className="text-4xl font-bold text-gray-800 mb-5">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        We'd love to hear from you! Whether you have questions about our platform, 
        feedback, or just want to say hi, feel free to reach out.
      </p>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5 flex flex-wrap items-center">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-100 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Team Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="/team.jpg"
            alt="Our Team"
            width={400}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
        <p className="text-gray-600 mt-2">Email: contact@yourcompany.com</p>
        <p className="text-gray-600">Phone: +123 456 7890</p>
        <p className="text-gray-600">Address: 123 Main St, Your City, Your Country</p>
      </div>
      <Footer />
    </div>
    
  );
};

export default Contact;
