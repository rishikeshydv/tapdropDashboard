/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1rVO2lDk90D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import Link from "next/link"
import { FaBook } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Section1() {
  const router = useRouter();
  return (
<div className="flex w-28 flex-col shrink-0 items-stretch gap-6 shadow-xl py-28 bg-slate-700 rounded-full">
<div className="flex-1 grid place-items-center rounded-full" onClick={()=>router.push("/")}>
  <Link className="p-2 hover:scale-75" href="#">
    <img src="/navbarIcons/navbar_logo.png" width={60} alt="" /> 
  </Link>
      </div>
      <div className="flex-1 grid place-items-center mt-20" onClick={()=>router.push("/docs")}>
        <Link className=" p-2 bg-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-75" href="#">
        <FaBook className="h-10 w-10 p-2"/>
        </Link>
      </div>
      <div className="flex-1 grid place-items-center">
        <Link className="bg-gray-400 rounded-full flex flex-col items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-75" href="#">
          <SiGoogleanalytics className="h-10 w-10 p-2" />
        </Link>
      </div>
      <div className="flex-1 grid place-items-center" onClick={()=>router.push("/tickets")}>
        <Link className="bg-gray-400 rounded-full flex flex-col items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-75" href="#">
          <MdOutlineSupportAgent className="h-12 w-12 p-2" />
        </Link>
      </div>
    </div>
  )
}


function BookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BarChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function HelpCircleIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}

