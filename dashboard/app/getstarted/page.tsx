"use client"
import {useEffect} from "react";
import Plx from "react-plx";
import Section1 from "@/components/LandingPage/Section1";
import Section2 from "@/components/LandingPage/Section2";
import Section3 from "@/components/LandingPage/Section3";
import Section4 from "@/components/LandingPage/Section4";
import Section5 from "@/components/LandingPage/Section5";
import Section6 from "@/components/LandingPage/Section6";
import Section7 from "@/components/LandingPage/Section7";
import { fairyDustCursor } from "cursor-effects";

export default function Home() {
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

  useEffect(() => {
    const newCursor = fairyDustCursor();

    return () => {
      // You might need to clean up the effect when the component unmounts.
      // This depends on the implementation of fairyDustCursor.
      // newCursor.cleanup();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="flex flex-col min-h-[100dvh]">
           <Plx className="MyAwesomeParallax" parallaxData={parallaxData1}>
           <Section1 />
      </Plx>
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData1}>
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
      <Section7 />
    </div>
  )
}

