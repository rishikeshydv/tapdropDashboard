import React from 'react';
import Link from "next/link"
import Section3 from "./Section3";
export default function Section2() {
    // Implement your component logic here

    return (
        <main className="flex flex-col items-center justify-center space-y-6 mt-40">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className='flex items-center justify-center'>
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl xl:text-7xl/none text-gray-200 ml-10">
            Play the </h1> &nbsp; &nbsp;
            <h1 className='text-4xl font-bold tracking-tighter lg:text-6xl xl:text-7xl/none bg-gradient-to-r from-[#22817F] from-5% via-[#1E716F] via-50% to-[#1A6160] to-100% inline-block text-transparent bg-clip-text'>Unplayed</h1>
          &nbsp; &nbsp; &nbsp;&nbsp; 
          <img src="/video-game.png" alt="gameIcon" />
          </div>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover your next favorite game. Unbiased reviews. Community recommendations. Hidden gems.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#073C5F] from-5% via-[#06304C] via-50% to-[#052439] to-100% px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Documentation
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border-[#073C5F] border-2 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            License
          </Link>
        </div>
        <section className="w-full py-10 px-40 flex flex-col items-center gap-4">
      <div className='text-4xl font-semibold text-white tracking-tighter'>Trusted by the Best</div>
      <Section3/>
      </section>
      </main>
    );
};
