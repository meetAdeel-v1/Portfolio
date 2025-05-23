import Link from "next/link";

export default function HomePage() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-[75vh] md:min-h-[80vh] px-4 py-12 
                 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Experienced .NET Developer | Building Robust & Scalable Solutions
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
          With 8 years of hands-on experience, I specialize in developing
          high-performance web applications and services using .NET, Angular,
          and modern cloud technologies. I&apos;m passionate about crafting clean
          code and delivering impactful solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition-colors duration-150 ease-in-out text-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-150 ease-in-out text-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
