/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L9VsaAT10l8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Section1 from "@/components/LandingPage/Section1"
export default function Docs() {
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
            <div className="mx-4 my-10 text-6xl font-bold text-white">Documentation</div>
          </div>
          <div className="grid gap-4 px-16 border-white bg-slate-600 shadow-2xl rounded-3xl mt-20 mr-10 mb-40">
            <div className="grid gap-4">

            <nav className="flex-1 items-center justify-between overflow-y-auto py-4 my-10">
            <div className="px-3">
              <ul className="space-y-1 flex flex-row items-center justify-center gap-10">
                <li className="border w-40 rounded-full">
                  <Link
                    className="flex items-center py-2 px-6 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-100 hover:rounded-full dark:hover:text-black dark:hover:bg-gray-200"
                    href="#"
                  >
                    Introduction
                  </Link>
                </li>
                <li className="border rounded-full">
                  <Link
                    className="flex items-center w-40 py-2 px-8 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-100 hover:rounded-full dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    Installation
                  </Link>
                </li>
                <li className="border rounded-full">
                  <Link
                    className="flex items-center w-40 py-2 px-12 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-100 hover:rounded-full dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    Usage
                  </Link>
                </li>
                <li className="border rounded-full">
                  <Link
                    className="flex items-center w-40 py-2 px-6 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-100 hover:rounded-full dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    API Reference
                  </Link>
                </li>
                <li className="border rounded-full">
                  <Link
                    className="flex items-center w-40 py-2 px-10 rounded-md font-medium text-white dark:text-gray-50 hover:text-black hover:bg-gray-100 hover:rounded-full dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

              <div className="space-y-4" id="introduction">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-5xl">Welcome to Neo by Tapdrop</h1>
                  <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    shadcn is a collection of components that you can use to build your web app or website. These
                    components are designed to work well with Tailwind CSS and are built with accessibility and
                    developer experience in mind.
                  </p>
                </div>
              </div>
              <div className="space-y-4" id="installation">
                <div className="space-y-2">
                  <h2 className="text-2xl text-white font-bold tracking-tighter sm:text-4xl">Installation</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    You can install shadcn via npm or yarn.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg w-60 border border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                    npm install shadcn
                  </div>
                  <div className="rounded-lg w-60 border border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                    yarn add shadcn
                  </div>
                </div>
              </div>
              <div className="space-y-4" id="usage">
                <div className="space-y-2">
                  <h2 className="text-2xl text-white font-bold tracking-tighter sm:text-4xl">Usage</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    To use a component from shadcn, you can import it into your project and start using it.
                  </p>
                </div>
              </div>
              <div className="space-y-4" id="api-reference">
                <div className="space-y-2">
                  <h2 className="text-2xl text-white font-bold tracking-tighter sm:text-4xl">API Reference</h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Here are some of the components available in shadcn.
                  </p>
                </div>
                <div className="overflow-auto max-w-full rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-4 py-2 bg-gray-50 dark:bg-gray-950">Component</th>
                        <th className="px-4 py-2 bg-gray-50 dark:bg-gray-950">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      <tr className="border-t border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-2">Button</td>
                        <td className="px-4 py-2">The Button component is used to create buttons.</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-2">Card</td>
                        <td className="px-4 py-2">The Card component is used to create cards.</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-2">Modal</td>
                        <td className="px-4 py-2">The Modal component is used to create modals.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-4" id="examples">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white">Examples</h2>
                  <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Here are some examples of how you can use the components available in shadcn.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border w-80 border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                    {`
                                    import { Button } from 'shadcn';
                                  `}
                  </div>
                  <div className="grid place-items-center py-4 mb-5">
                    <Button>Button</Button>
                  </div>
                </div>
              </div>
            </div>
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
