import React from 'react';


export default function Section5() {

    return (

        <section
        className="w-full mt-16 md:py-24 lg:py-32 px-40" >
        <div className="container grid items-center gap-6 px-4 md:px-6">
          <div className="space-y-3 flex flex-col items-center justify-center text-center">
            <h2 className="text-7xl font-bold text-white tracking-tighter">Update your Roblox game</h2>
            <h2 className=' text-7xl font-bold tracking-tighter bg-gradient-to-r from-[#22817F] from-5% via-[#1E716F] via-50% to-[#1A6160] to-100% inline-block text-transparent bg-clip-text'>with just a few clicks</h2>
            <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-8">
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
