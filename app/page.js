"use client"; // Mark this file as a Client Component

import Link from "next/link"; // Import Link for navigation
import Navbar from "../components/NavBar"; // Import the Navbar component

export default function WelcomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: "#03c03c", fontFamily: "monospace" }}
    >
      {/* Navbar */}
      <Navbar />

      <main className="text-center mt-16"> {/* Added margin-top to avoid overlap with the navbar */}
        <h1 className="text-4xl font-bold mb-2 text-black">Welcome to Creyo.</h1>
        <p className="text-lg text-gray-200 mb-8">Let's explore the possibilities</p>

        <Link
          href="/explore" // Use Link for navigation
          className="py-2 px-10 rounded-full text-lg font-bold text-white transition-colors"
          style={{
            backgroundColor: "#001e2b",
            border: "2px solid transparent", // Initial border
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#03c03c";
            e.target.style.color = "#001e2b"; // Optional: invert text color
            e.target.style.border = "2px solid black"; // Change border color
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#001e2b";
            e.target.style.color = "white"; // Reset text color
            e.target.style.border = "2px solid transparent"; // Reset border
          }}
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}
