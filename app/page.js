
export default function WelcomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: "#03c03c", fontFamily: "monospace" }}
    >
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">Welcome to saran</h1>
        <p className="text-lg text-gray-600 mb-8"></p>
        <a
          className="  py-2 px-10 rounded-lg text-lg font-bold transition-colors"
          style={{backgroundColor:"#001e2b", borderRadius:"50px"}}
          href="/get-started"
        >
          Get Started
        </a>
      </main>
    </div>
  );
}
