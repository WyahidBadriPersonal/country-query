export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">About Country explorer</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          This project utalizes the REST API provided by 
          <a
            className="underline text-indigo-400 font-semibold"
            href="https://restcountries.com/"
            target="_blank"
            rel="noreferrer"
          >
            restcountries.com
          </a>
          to query information about countries around the world by name and
          region.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The goal was build buld a responsive and interactive web application
          that allows users to search for information about countries around the
          world. Using Reacr Router 7, TailwindCSS and TypeScript
        </p>
      </div>
    </div>
  );
}
