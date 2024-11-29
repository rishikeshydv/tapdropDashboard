
import React from "react";
import Link from "next/link";

export default function Section4() {


  return (
    <div className="px-40 mt-32">
<div className="flex flex-col items-center justify-center text-7xl tracking-tight font-bold text-white px-40 py-10">
  <div className="flex"><h1 className="bg-gradient-to-r from-[#22817F] from-5% via-[#1E716F] via-50% to-[#1A6160] to-100% inline-block text-transparent bg-clip-text">Uncover</h1> &nbsp;<h1 className="bg-gradient-to-r from-[#22817F] from-5% via-[#1E716F] via-50% to-[#1A6160] to-100% inline-block text-transparent bg-clip-text">What Makes</h1></div>
  <div>Your Game Tick</div>
</div>
      <section className="container grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6 mt-16">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Feature 1"
            className="object-cover w-full h-64"
            height={400}
            src="/console1.webp"
            style={{
              aspectRatio: "500/400",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white p-4 dark:bg-gray-950 flex flex-col items-center">
            <h3 className="font-bold text-xl">Feature 1</h3>
            <p className="text-sm text-gray-500">Description of feature 1</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Feature 2"
            className="object-cover w-full h-64 bg-gray-200"
            height={400}
            src="/console1.webp"
            style={{
              aspectRatio: "500/400",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white p-4 dark:bg-gray-950 flex flex-col items-center">
            <h3 className="font-bold text-xl">Feature 2</h3>
            <p className="text-sm text-gray-500">Description of feature 2</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Feature 3"
            className="object-cover w-full h-64 bg-gray-200"
            height={400}
            src="/console1.webp"
            style={{
              aspectRatio: "500/400",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white p-4 dark:bg-gray-950 flex flex-col items-center">
            <h3 className="font-bold text-xl">Feature 3</h3>
            <p className="text-sm text-gray-500">Description of feature 3</p>
          </div>
        </div>
      </section>
    </div>
  );
}
