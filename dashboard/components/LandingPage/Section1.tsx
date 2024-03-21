/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1rVO2lDk90D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Section1() {
  return (
    <header className="w-full py-5 bg-black">
      <div className="container flex items-center px-4 md:px-6">
        <div/>
        <div className="flex items-center space-x-4 flex-1 justify-center ml-64">
          <Link href="#">
            <span className="text-lg font-bold"><img src="/NewLogo5.png" alt="home" width={500} height={500} /></span>
          </Link>
        </div>
        <div className="flex items-end space-x-4 rounded-2xl">
          <Button size="sm" className="text-black bg-white">Documentation</Button>
        </div>
      </div>
    </header>
  )
}

