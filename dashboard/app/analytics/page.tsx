/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L9VsaAT10l8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import Leftbox from "@/components/Analytics/Leftbox";
import Rightbox from "@/components/Analytics/Rightbox";
import Section7 from "@/components/Tickets/Section7";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { UpdateComponent } from "@/components/Analytics/UpdateComponent";
export default function Analytics() {
  //state value for the toggle switch
  const [state, setState] = useState(true);
  const [cardMove, setCardMove] = useState("");
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
    "December",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Tapdrop Monthly Earnings",
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
        tension: 0.1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  //create the doughnut chart
  const dataDonut = {
    labels: ["Type1 ", "Type2", "Type3"],
    datasets: [
      {
        label: "Recent Purchases",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    const ctx = document.getElementById("bar") as HTMLCanvasElement;
    // const ctxLine = document.getElementById('_bar') as HTMLCanvasElement;
    const ctxRight = document.getElementById("round") as HTMLCanvasElement;

    //create the bar chart
    const myBarChart = new Chart(ctx, {
      type: state ? "bar" : "line",
      data: data,
      options: {
        scales: {
          x: {
            ticks: {
              color: "black", // Change color of x-axis labels to white
            },
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "rgba(0, 0, 0, 1)", // Change label text color to white,
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
        },
      },
    });

    //create the donut chart
    const DonutChart = new Chart(ctxRight, {
      type: "doughnut",
      data: dataDonut,
      options: {
        plugins: {
          legend: {
            labels: {
              color: "rgba(0, 0, 0, 1)", // Change label text color to white,
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
        },
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
    };
  }, [state]);

  //leftBox logic
  const [earning, setEarning] = useState("$12,999K");
  const [purchase, setPurchase] = useState("25,683");
  const [average, setAverage] = useState("$29.99");

  let weekly = ["$1,999K", "5,683", "$299.99"];
  let monthly = ["$12,999K", "10,683", "$3000.00"];
  let yearly = ["$20,999K", "25,683", "$29001.99"];
  return (
    <div className="w-full overflow-hidden">
      <div className="relative grid">
        <div className="flex flex-col "></div>
        <div className="flex flex-col min-h-screen">
          <div className="grid place-items-center h-14">
            <div className="my-10 mr-20 flex flex-col">
              <h1 className="text-7xl font-bold text-black text-center tracking-tighter">
                Dashboard
              </h1>
              <p className="text-black text-lg tracking-wider p-2 text-center">
                Empower Your Performance: Elevate Your Game with One Click
                Analysis!
              </p>
            </div>
          </div>

          {/* Two analytics cards */}

          <div className="flex px-10 py-6">
            {/* We will be using leftBox's entire code as we could not change the state value through props */}
            {/* <Leftbox /> */}
            {/* Leftbox Start */}
            <div
              className="grid gap-4 px-6 border-white bg-slate-100 shadow-2xl rounded-3xl mt-20 mr-10"
              style={{ width: 1000 }}
            >
              <div className="grid gap-4">
                <nav className="flex-1 items-center justify-between overflow-y-auto py-4">
                  <div className="px-3">
                    <h1 className="text-center py-4 text-4xl font-bold tracking-tighter">
                      Earning Overview
                    </h1>
                    <ul className="space-y-1 flex flex-row items-center justify-center gap-6 ">
                      <li className="border w-40 rounded-full bg-black">
                        <Link
                          className="flex items-center py-2 px-12 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-300 hover:rounded-full dark:hover:text-black dark:hover:bg-gray-200"
                          href="#"
                          onClick={() => {
                            setEarning(weekly[0]);
                            setPurchase(weekly[1]);
                            setAverage(weekly[2]);
                            setCardMove("-translate-y-2");
                          }}
                        >
                          Weekly
                        </Link>
                      </li>
                      <li className="border rounded-full bg-black">
                        <Link
                          className="flex items-center w-36 py-2 px-11 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-300 hover:rounded-full dark:hover:text-gray-50 dark:hover:bg-gray-200"
                          href="#"
                          onClick={() => {
                            setEarning(monthly[0]);
                            setPurchase(monthly[1]);
                            setAverage(monthly[2]);
                            setCardMove("translate-y-2");
                          }}
                        >
                          Monthly
                        </Link>
                      </li>
                      <li className="border rounded-full bg-black">
                        <Link
                          className="flex items-center w-36 py-2 px-11 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-300 hover:rounded-full dark:hover:text-gray-50 dark:hover:bg-gray-200"
                          href="#"
                          onClick={() => {
                            setEarning(yearly[0]);
                            setPurchase(yearly[1]);
                            setAverage(yearly[2]);
                            setCardMove("-translate-y-2");
                          }}
                        >
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Three Boxes */}
                <div className="flex items-start w-full gap-4 px-20 py-6">
                  <div
                    className={`flex flex-col w-[250px] bg-gray-900 items-start gap-2 p-4 rounded-2xl border shadow-2xl ${cardMove}`}
                  >
                    <Image
                      src={`/chart_up.png`}
                      alt=""
                      height={40}
                      width={40}
                    />
                    <span className="text-sm mt-12 text-white font-semibold">
                      Total Earnings
                    </span>
                    <p className="text-4xl text-start text-white line-clamp-3 tracking-tighter font-bold dark:text-gray-400">
                      {earning}
                    </p>
                  </div>

                  <div
                    className={`flex flex-col w-[250px] bg-gray-900 items-start gap-2 p-4 rounded-2xl border shadow-2xl ${cardMove}`}
                  >
                    <Image
                      src={`/chart_down.png`}
                      alt=""
                      height={40}
                      width={40}
                    />
                    <span className="text-sm mt-12 text-white font-semibold">
                      Purchase Count
                    </span>
                    <p className="text-4xl text-start text-white line-clamp-3 tracking-tighter font-bold dark:text-gray-400">
                      {purchase}
                    </p>
                  </div>

                  <div
                    className={`flex flex-col w-[250px] bg-gray-900 items-start gap-2 p-4 rounded-2xl border shadow-2xl ${cardMove}`}
                  >
                    <Image
                      src={`/chart_up.png`}
                      alt=""
                      height={40}
                      width={40}
                    />
                    <span className="text-sm mt-12 text-white font-semibold">
                      Average Purchase
                    </span>
                    <p className="text-4xl text-start  text-white font-bold line-clamp-3 tracking-tighter dark:text-gray-400">
                      {average}
                    </p>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <Switch
                    defaultChecked
                    id="user-1"
                    className="bg-white border"
                    onClick={() => {
                      setState(!state);
                    }}
                  />
                </div>
                <canvas
                  className="space-y-4 px-6 shadow-xl rounded-2xl hover:bg-gray-100"
                  id="bar"
                  style={{ width: 900 }}
                ></canvas>
                <div
                  className="space-y-4 p-6 shadow-xl rounded-2xl my-6 hover:bg-gray-100"
                  id="upcoming"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-4xl font-bold px-6 tracking-tighter">
                      Upcoming Products
                    </p>
                  </div>
                  <hr className="border-gray-500 border-1" />

                  <div className="flex items-center justify-start gap-4">
                    <UpdateComponent />
                  </div>
                </div>
              </div>
            </div>
            {/* Leftbox End */}

            <Rightbox />
          </div>
        </div>
      </div>
      <Section7 />
    </div>
  );
}

function CalendarIcon(props: any) {
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
  );
}

function ClockIcon(props: any) {
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
  );
}
