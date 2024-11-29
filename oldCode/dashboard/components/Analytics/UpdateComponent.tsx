
import { Button } from "../ui/button"
export function UpdateComponent() {
  return (
    <section className="w-full bg-gray-200 rounded-2xl py-8 dark:bg-gray-800">
      <div className="container flex items-center justify-between gap-6 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <img
            alt="Game Update"
            className="aspect-video rounded-lg object-cover"
            height={200}
            src="/game-logo.webp"
            width={220}
          />
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">New Update Released</p>
            <h3 className="text-2xl font-bold">Patch Notes v1.5</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Introducing new game modes, quality-of-life improvements, and bug fixes.
            </p>
          </div>
        </div>
        <Button className="bg-gray-900 text-gray-50 rounded-md px-4 py-2 inline-flex items-center" >
      More Info
      <ArrowRightIcon className="ml-2 h-4 w-4" />
    </Button>
      </div>
    </section>
  )
}
function ArrowRightIcon(props:any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}