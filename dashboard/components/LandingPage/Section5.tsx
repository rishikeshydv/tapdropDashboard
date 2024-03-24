import React from 'react';


export default function Section5() {

    return (

        <section
        className="w-full py-12 md:py-24 lg:py-32 mt-24"
      >
        <div className="container grid items-center gap-6 px-4 md:px-6">
          <div className="space-y-3 flex flex-col items-center justify-center">
            <h2 className="text-7xl font-bold text-white tracking-tighter md:text-6xl/tight">Update your Roblox game with just a few clicks</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            From your dashboard make changes to your game in real-time
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm mt-20">
            <img
              alt="Company Image"
              className="object-cover rounded-lg bg-gray-300"
              src="/console1.webp"
              height={800}
              width={900}
            />
          </div>
        </div>
      </section>
    );
};
