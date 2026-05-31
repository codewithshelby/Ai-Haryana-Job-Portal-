export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">JobPortal Hrayana </h1>
        <div className="flex gap-4">
          <a href="/login" className="text-gray-600 hover:text-blue-600">Login</a>
          <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</a>
        </div>
      </nav>

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Jobs For students of Haryana 
        </h2>
        <p className="text-gray-500 text-lg mb-8">
         Upload Resume And Get Matched With The Best Jobs In Haryana
        </p>
        <a href="/register" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
          Start Now 
        </a>
      </section>

      <section className="grid grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl mb-2">📄</div>
          <h3 className="font-bold text-gray-800"> Upload Resume </h3>
          <p className="text-gray-500 text-sm mt-1">Upload Your Resume</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl mb-2">🤖</div>
          <h3 className="font-bold text-gray-800">AI Matching</h3>
          <p className="text-gray-500 text-sm mt-1">AI will match you with the best jobs</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-bold text-gray-800">Easy Apply</h3>
          <p className="text-gray-500 text-sm mt-1">Apply with a single click</p>
        </div>
      </section>
    </main>
  )
}