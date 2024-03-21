import React from "react";
import Link from "next/link";

export default function Section4() {
  // Implement your component logic here

  return (
    <div>
      <div className="flex items-center justify-center py-10 text-6xl font-bold">
        Uncover What Makes Your Game&nbsp;
        <button className="bg-green-400 text-white px-4 py-2 rounded-2xl">
          Tick
        </button>
      </div>
      <section className="container grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Feature 1"
            className="object-cover w-full h-64 bg-gray-200"
            height={400}
            src="/placeholder.svg"
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
            src="/placeholder.svg"
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
            src="/placeholder.svg"
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
