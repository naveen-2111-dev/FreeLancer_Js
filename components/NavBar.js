"use client"; // Ensure this is a client-side component
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[1000px] p-4 bg-black z-50 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-mono text-[#03c03c]">Creyo</div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-[#03c03c]">Home</Link>
            </li>
            <li>
              <Link href="/explore" className="text-white hover:text-[#03c03c]">Explore</Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
