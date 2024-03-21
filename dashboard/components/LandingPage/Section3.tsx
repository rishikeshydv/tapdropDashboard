import React from 'react';
import Link from "next/link"

export default function Section3() {
    // Implement your component logic here

    return (
        <div>

      <section className="w-full py-12 bg-gray-100 dark:bg-gray-800 mt-8">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div className="relative group grid overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Image 1"
                className="object-cover w-full aspect-[4/3]"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
            </div>
            <div className="relative group grid overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Image 2"
                className="object-cover w-full aspect-[4/3]"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
            </div>
          </div>
        </div>
      </section>
        </div>    );
};
