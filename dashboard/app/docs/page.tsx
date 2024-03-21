/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L9VsaAT10l8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Docs() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative grid min-h-screen bg-gray-100 md:grid-cols-[280px_1fr] dark:bg-gray-800">
        <div className="flex flex-col border-r border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between h-14 px-3 border-b border-gray-200 dark:border-gray-800">
            <Link
              className="flex items-center space-x-2 text-sm font-medium tracking-wider uppercase dark:text-gray-50"
              href="#"
            >
              <FlagIcon className="h-6 w-6" />
              <span>Docs</span>
            </Link>
            <button className="p-2 rounded-md md:hidden">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-3">
              <ul className="space-y-1">
                <li>
                  <Link
                    className="flex items-center py-2 px-3 rounded-md font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center py-2 px-3 rounded-md font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center py-2 px-3 rounded-md font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    Usage
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center py-2 px-3 rounded-md font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center py-2 px-3 rounded-md font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-200"
                    href="#"
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-col min-h-screen">
          <div className="grid place-items-center h-14 border-b border-gray-200 dark:border-gray-800">
            <div className="mx-4 text-lg font-semibold">shadcn</div>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-[300px_1fr] lg:gap-8 lg:p-12">
            <div className="grid gap-4">
              <div className="space-y-4" id="introduction">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to shadcn</h1>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    shadcn is a collection of components that you can use to build your web app or website. These
                    components are designed to work well with Tailwind CSS and are built with accessibility and
                    developer experience in mind.
                  </p>
                </div>
              </div>
              <div className="space-y-4" id="installation">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Installation</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    You can install shadcn via npm or yarn.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                    npm install shadcn
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                    yarn add shadcn
                  </div>
                </div>
              </div>
              <div className="space-y-4" id="usage">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Usage</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    To use a component from shadcn, you can import it into your project and start using it.
                  </p>
                </div>
              </div>
              <div className="space-y-4" id="api-reference">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">API Reference</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
                    <tbody>
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
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Examples</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Here are some examples of how you can use the components available in shadcn.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                    {`
                                    import { Button } from 'shadcn';
                                  `}
                  </div>
                  <div className="grid place-items-center">
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
