import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between">
          <Link href="/" className="text-xl font-bold">MyWebsite</Link>
          <div className="space-x-4">
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
            <Link href="/courses" className="hover:underline">courses</Link>
            
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
