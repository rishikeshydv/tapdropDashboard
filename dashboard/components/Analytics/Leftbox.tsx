import React from 'react';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Chart from 'chart.js/auto'; 
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"


const Leftbox = () => {
    // Implement your component logic here

    return (

        <div className="grid gap-4 px-6 border-white bg-slate-600 shadow-2xl rounded-3xl mt-20 mr-10 mb-40">
        <div className="grid gap-4">

        <nav className="flex-1 items-center justify-between overflow-y-auto py-4">
        <div className="px-3">
            <h1 className="text-center py-4 text-4xl font-bold text-white">Earning Overview</h1>
          <ul className="space-y-1 flex flex-row items-center justify-center gap-6">
            <li className="border w-40 rounded-full">
              <Link
                className="flex items-center py-2 px-12 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-100 hover:rounded-full dark:hover:text-black dark:hover:bg-gray-200"
                href="#"
              >
                Weekly
              </Link>
            </li>
            <li className="border rounded-full">
              <Link
                className="flex items-center w-36 py-2 px-11 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-100 hover:rounded-full dark:hover:text-gray-50 dark:hover:bg-gray-200"
                href="#"
              >
                Monthly
              </Link>
            </li>
            <li className="border rounded-full">
              <Link
                className="flex items-center w-36 py-2 px-11 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-100 hover:rounded-full dark:hover:text-gray-50 dark:hover:bg-gray-200"
                href="#"
              >
                Yearly
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        {/* Three Boxes */}
      <div className="flex items-start w-full gap-4">
  <div className="flex flex-col w-[250px] bg-slate-700 items-start gap-2 p-4 rounded-2xl border shadow-2xl">
    <Image 
    src={`/chart_up.png`}
    alt=""
    height={40}
    width={40}
    />
    <span className="text-sm mt-12 text-gray-400">Total Earnings</span>
    <p className="text-4xl text-start text-white line-clamp-3 dark:text-gray-400">
      $12,999K
    </p>
  </div>

  <div className="flex flex-col w-[250px] bg-slate-700 items-start gap-2 p-4 rounded-2xl border shadow-2xl">
    <Image 
    src={`/chart_down.png`}
    alt=""
    height={40}
    width={40}
    />
    <span className="text-sm mt-12 text-gray-400">Purchase Count</span>
    <p className="text-4xl text-start text-white line-clamp-3 dark:text-gray-400">
      25,683
    </p>
  </div>

  <div className="flex flex-col w-[250px] bg-slate-700 items-start gap-2 p-4 rounded-2xl border shadow-2xl">
    <Image 
    src={`/chart_up.png`}
    alt=""
    height={40}
    width={40}
    />
    <span className="text-sm mt-12 text-gray-400">Average Purchase</span>
    <p className="text-4xl text-start text-white line-clamp-3 dark:text-gray-400">
      $29.99
    </p>
  </div>

</div>
          <canvas className="space-y-4 bg-gray-700 p-6 shadow-2xl rounded-2xl my-6" id="bar">
          </canvas>
          <div className="space-y-4 bg-gray-700 p-6 shadow-2xl rounded-2xl my-6" id="upcoming">
          <div className="flex items-center justify-between">
          <p className="text-4xl text-white font-semibold p-6">Upcoming Products</p>
          <Button className="rounded-full border" variant="outline">
  <CalendarIcon className="mr-2 h-4 w-4" />
  9 April
</Button>
        </div>
        <hr className='border-gray-500 border-2'/>
        
        <div className='flex items-center justify-center gap-4'>
            <div className='border-gray-400 border-2 p-4 shadow-2xl rounded-2xl'>
                <h1 className='text-white font-semibold'>Tap Shooter</h1>
                <div className="flex gap-2 text-xs text-gray-400">
                <ClockIcon className="h-4 w-4 -translate-x-1" />
                12:00:00 PM
                </div>
            </div>
            <div className='border-gray-400 border-2 p-4 shadow-2xl rounded-2xl'>
                <h1 className='text-white font-semibold'>Tap Shooter</h1>
                <div className="flex gap-2 text-xs text-gray-400">
                <ClockIcon className="h-4 w-4 -translate-x-1" />
                12:00:00 PM
                </div>
            </div>
            <div className='border-gray-400 border-2 p-4 shadow-2xl rounded-2xl'>
                <h1 className='text-white font-semibold'>Tap Shooter</h1>
                <div className="flex gap-2 text-xs text-gray-400">
                <ClockIcon className="h-4 w-4 -translate-x-1" />
                12:00:00 PM
                </div>
            </div>
            <div className='border-gray-400 border-2 p-4 shadow-2xl rounded-2xl'>
                <h1 className='text-white font-semibold'>Tap Shooter</h1>
                <div className="flex gap-2 text-xs text-gray-400">
                <ClockIcon className="h-4 w-4 -translate-x-1" />
                12:00:00 PM
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <div className='border-gray-400 border-2 p-4 shadow-2xl rounded-2xl'>
                <h1 className='text-white font-semibold'>Tap Shooter</h1>
                <div className="flex gap-2 text-xs text-gray-400">
                <ClockIcon className="h-4 w-4 -translate-x-1" />
                12:00:00 PM
                </div>
            </div>
            <div className='border-gray-400 border-2 p-4 shadow-2xl rounded-2xl'>
                <h1 className='text-white font-semibold'>Tap Shooter</h1>
                <div className="flex gap-2 text-xs text-gray-400">
                <ClockIcon className="h-4 w-4 -translate-x-1" />
                12:00:00 PM
                </div>
            </div>
            <div className='border-gray-400 border-2 p-4 shadow-2xl rounded-2xl'>
                <h1 className='text-white font-semibold'>Tap Shooter</h1>
                <div className="flex gap-2 text-xs text-gray-400">
                <ClockIcon className="h-4 w-4 -translate-x-1" />
                12:00:00 PM
                </div>
            </div>
            <div className='border-gray-400 border-2 p-4 shadow-2xl rounded-2xl'>
                <h1 className='text-white font-semibold'>Tap Shooter</h1>
                <div className="flex gap-2 text-xs text-gray-400">
                <ClockIcon className="h-4 w-4 -translate-x-1" />
                12:00:00 PM
                </div>
            </div>
        </div>
        

          </div>
        </div>
      </div>
    );
};

export default Leftbox;


function CalendarIcon(props:any) {
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
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    )
  }


function ClockIcon(props:any) {
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
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  