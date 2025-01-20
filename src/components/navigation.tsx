import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold hover:text-blue-300">
              EduSkills
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-300">
              About
            </Link>
            <Link href="/courses" className="hover:text-blue-300">
              courses
            </Link>
            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
            <Link href="/jobs" className="hover:text-blue-300">
              jobs
            </Link>
            <Link href="/testimorials" className="hover:text-blue-300">
              testimorials
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              About
            </Link>
            <Link href="/courses" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              courses
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Contact
            </Link>
            <Link href="/jobs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              jobs
            </Link>
            <Link href="/testemonials" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              testemonials
            </Link>
          </div>
          <Footer />
        </div>
      )}
    </nav>
  );
};

export default Navbar