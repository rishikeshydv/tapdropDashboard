/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L9VsaAT10l8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Section1 from "@/components/LandingPage/Section1"
import Image from "next/image"
import Chart from 'chart.js/auto';
import { useEffect } from "react";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Leftbox from "@/components/Analytics/Leftbox";
import Rightbox from "@/components/Analytics/Rightbox";



export default function Analytics() {
    //the following information is for the bar-chart
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      
    const data = {
  labels: labels,
  datasets: [{
    label: 'Tapdrop Monthly Earnings',
    data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)'
    ],
    borderWidth: 1,
    borderRadius: 10,
  }]
};


 useEffect(() => {
    const ctx = document.getElementById('bar') as HTMLCanvasElement;
    const ctxRight = document.getElementById('round') as HTMLCanvasElement;

    //create the bar chart
    const myBarChart = new Chart(ctx, 
      {
        type: 'bar',
        data: data,
        options: {
          scales: {
            x: {
              ticks: {
                color: 'white' // Change color of x-axis labels to white
              }
            },
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'rgba(255, 255, 255, 255)', // Change label text color to white,
                font: {
                  size: 14,
                  weight: 'bold'
                }
              },
            }
          }
        },
      });


      //create the doughnut chart
      const dataDonut = {
        labels: [
          'Type1 ',
          'Type2',
          'Type3'
        ],
        datasets: [{
          label: 'Recent Purchases',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const DonutChart = new Chart(ctxRight, 
        {
          type: 'doughnut',
          data: dataDonut,      
          options: {
            plugins: {
              legend: {
                labels: {
                  color: 'rgba(255, 255, 255, 255)', // Change label text color to white,
                  font: {
                    size: 14,
                    weight: 'bold'
                  }
                },
              }
            }
          },
        });
      return () => {
         //destroy the chart when the component is unmounted
        if (myBarChart !== null) {
          myBarChart.destroy();
        }

        if (DonutChart !== null) {
          DonutChart.destroy();
        }
        }
      }
 , [])

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-slate-600 via-gray-700 to-zinc-800">
      <div className="relative grid min-h-screen md:grid-cols-[200px_1fr] ">
      <div className="fixed left-10 top-20">
    <Section1 />
    </div>
        <div className="flex flex-col ">
        </div>
        <div className="flex flex-col min-h-screen">
          <div className="grid place-items-center h-14">
            <div className="mx-4 my-10 flex">
                <h1 className="text-6xl font-bold text-white">Analytics</h1>
                <p className="flex text-lg font-bold text-gray-400 py-9">
                    By Neo
                    <Image 
                src={`/fire.png`}
                height={20}
                width={40}
                alt="fire"
                className="px-2"
                />
            </p>
            </div>
          </div>
          <div className="flex mr-6 gap-2">
          <Button className="ml-auto w-60" size="lg" >
          rishikeshadh4@gmail.com
        </Button>
        <Image 
        src={`/logout.png`}
        alt=""
        height={20}
        width={40}
        onClick={()=>{}}
        />
          </div>


          {/* Two analytics cards */}

          <div className="flex">

          <Leftbox />
          <Rightbox />

          </div>


        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props:any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FlagIcon(props:any) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
