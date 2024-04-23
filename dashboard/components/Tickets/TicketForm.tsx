/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bPgs4jRIntL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import exp from "constants";

interface Tickets {
  username: string;
  email: string;
  subject: string;
  description: string;
  id: string;
}

const TicketForm:React.FC<Tickets> = ({username,email,subject,description,id}) => {
  return (
    <div className="w-full max-w-2xl space-y-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Ticket Details</h1>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Roblox Username</Label>
            <Input id="name" placeholder={username} readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder={email} type="email" readOnly/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder={subject} readOnly/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea className="min-h-[100px]" id="description" placeholder={description} readOnly/>
        </div>
        {/* <div className="space-y-2 flex flex-col">
          <Label htmlFor="attachments">Attachments</Label>
          <span className="text-xs text-gray-500 dark:text-gray-400">
          <Image 
          src={`/console1.webp`}
          width={200}
          height={200}
          alt="issues"
          >
          </Image>
          </span>
        </div> */}
      </div>
    </div>
  )
}

export default TicketForm;
