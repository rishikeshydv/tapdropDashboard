import React from 'react';


export default function Section5() {

    return (

        <section
        className="w-full py-12 md:py-24 lg:py-32"
        style={{
          backgroundColor: "#F3F4F6",
        }}
      >
        <div className="container grid items-center gap-6 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Company Slogan Here</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Short description of the company and its services.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <img
              alt="Company Image"
              className="object-cover rounded-lg"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width={500}
            />
          </div>
        </div>
      </section>
    );
};
