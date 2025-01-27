import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Country Explorer" },
    {
      name: "Query a list of countries and learn more about them",
      content: "Welcome to Country Explorer!",
    },
  ];
}

export default function Home() {
  return (
    <div className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center mx-auto max-w-6xl xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block text-green-500 xl:inline">Query Countries with </span>
                <span className="block text-indigo-400 xl:inline">Real Time Data</span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl">Discover a variety of information about countries around the world</p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link to="/countries" className="flex items-center justify-center px-6 py-3 text-lg text-white bg-indigo-400 rounded-md hover:bg-green-500">Get Started 🌍</Link>
                <Link to="/about" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">Learn More 📖</Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-xl">
              <img src="https://s1.1zoom.me/big7/360/Switzerland_Mountains_338746.jpg" className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
