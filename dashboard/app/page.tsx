"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, { useRef,useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { bubbleCursor } from "cursor-effects";
import Image from "next/image";

const ParticleRing = () => {
  useEffect(() => {
    const newCursor = bubbleCursor();

    return () => {
      // You might need to clean up the effect when the component unmounts.
      // This depends on the implementation of fairyDustCursor.
      // newCursor.cleanup();
    };
  }, []); // Empty dependency array ensures this effect runs only once
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <div className="absolute rounded-xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl flex flex-col items-center justify-center">
      <span className="flex text-lg font-bold pointer-events-none">
        <img src="/NewLogo5.png" alt="home" width={500} height={500} />
    </span>
      <a href="/getstarted"><Button size="lg" className="text-black bg-white mt-10 hover:bg-gray-300"> Get Started</Button></a>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if ((ref.current as any)?.rotation) {
      (ref.current as any).rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }:{position:any,color:any}) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;