/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OvdVgVOvtr3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import TicketProp from "@/services/tickets/TicketProp"
import Link from "next/link"


export default function Component() {
  //write a function that will redirect to /info/ticketNumber
  //so that we can retrieve the ticket number from the url
  //and then fetch the ticket details from the database using the ticket number
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Ticketing System</h1>
        <Button className="ml-auto" size="sm">
          New Ticket
        </Button>
      </div>
      <div className="flex items-center w-full max-w-sm rounded-lg border dark:border-gray-800">
        <SearchIcon className="h-4 w-4 ml-2.5 mr-2.5 text-gray-500 dark:text-gray-400" />
        <Input
          className="w-full border-0 shadow-none appearance-none bg-gray-100/40 dark:bg-gray-800/40"
          placeholder="Search tickets..."
          type="search"
        />
      </div>
      <div className="grid items-center gap-4 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket Number</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Link href="#">T001</Link>
              </TableCell>
              <TableCell className="font-medium">JohnDoe</TableCell>
              <TableCell className="font-medium">Issue with account login</TableCell>
              <TableCell className="hidden md:table-cell">Open</TableCell>
              <TableCell className="hidden md:table-cell">Mar 16, 2024</TableCell>
            </TableRow>
            <TicketProp 
                ticketNumber="T002"
                username="JaneDoe"
                subject="Issue with account login"
                status="Open"
                date="Mar 16, 2024"
            />
            <TicketProp 
                ticketNumber="T003"
                username="JohnSmith"
                subject="Issue with account login"
                status="Open"
                date="Mar 16, 2024" 
            />
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
