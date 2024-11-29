"use client";

import { useEffect, useMemo, useState } from "react";
import { loadFirePreset } from "@tsparticles/preset-fire";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import Plx from "react-plx";
import Section1 from "@/components/LandingPage/Section1";
import Section2 from "@/components/LandingPage/Section2";
import Section4 from "@/components/LandingPage/Section4";
import Section5 from "@/components/LandingPage/Section5";
import Section6 from "@/components/LandingPage/Section6";
import Section7 from "@/components/LandingPage/Section7";
//import { fairyDustCursor } from "cursor-effects";

export default function Home() {
  const [init, setInit] = useState(false);
  //adding cursor effect
  // useEffect(() => {
  //   const newCursor = fairyDustCursor();

  //   return () => {
  //     // You might need to clean up the effect when the component unmounts.
  //     // This depends on the implementation of fairyDustCursor.
  //     // newCursor.cleanup();
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once

  //adding particle effect
  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //     // starting from v2 you can add only the features you need reducing the bundle size
  //     //await loadAll(engine);
  //     //await loadFull(engine);
  //     await loadFirePreset(engine);
  //     //await loadBasic(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);



  // adding parallax effect
  const parallaxData1 = [
    {
      start: 50,
      end: 1500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },
      ],
    },
  ];

  const parallaxData3 = [
    {
      start: 300,
      end: 4000,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },
      ],
    },
  ];

  const parallaxData4 = [
    {
      start: 900,
      end: 4000,
      properties: [
        {
          startValue: 1,
          endValue: 1.25,
          property: "scale",
        },
      ],
    },
  ];

  const parallaxData5 = [
    {
      start: 900,
      end: 4000,
      properties: [
        {
          startValue: 1,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];
    //     if (init) {
  //   return (
  //     <Particles
  //       id="tsparticles"
  //       options={{
  //         preset: "fire",
  //       }}
  //     />
  //   );
  // }
  return (
    // <>
    //   {init && (
    //     <Particles
    //       id="tsparticles"
    //       options={{
    //         preset: "fire",
    //       }}
    //     />
    //   )}
    <div className="grid flex-1 bg-gradient-to-r w-full h-full"
    style={{
      background: "radial-gradient(ellipse at center,transparent 0%, #28464B 0%, #000015 130%)",
    }}>
      {/* <Plx className="MyAwesomeParallax" parallaxData={parallaxData1}>
        <Section2 />
      </Plx>
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData3}>
        <Section3 />
      </Plx>
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData4}>
        <Section4 />
      </Plx>
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData4}>
        <Section5 />
      </Plx>
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData4}>
        <Section6 />
      </Plx>
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData5}>
        <Section7 />
      </Plx> */}
      <div className="fixed left-10 top-20">
      <Section1 />
      </div>
      <div>
      <Section2 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      </div>

    </div>
    // </>  
    );
}
