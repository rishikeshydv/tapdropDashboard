/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bPgs4jRIntL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TicketForm() {
  return (
    <div className="w-full max-w-2xl space-y-8 p-4 rounded-lg border border-gray-200 border-gray-200 dark:border-gray-800">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Submit a ticket</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter the subject" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea className="min-h-[100px]" id="description" placeholder="Enter the description" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attachments">Attachments</Label>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            You can attach up to 5 files. Max 10MB each.
            <Link href="#">Attachment guidelines</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
