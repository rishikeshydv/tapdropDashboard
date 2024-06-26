/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OvdVgVOvtr3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Section7 from "@/components/Tickets/Section7"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import GetTickets from "@/queries/GetTickets"
import TicketProp from "@/services/tickets/TicketProp"
import { useState, useEffect, use } from "react"



export default function Component() {
  const [tickets, setTickets] = useState<any[]>([]);
  useEffect(() => {
  GetTickets().then((res) => {
    setTickets(res);
  });
  }, []);
  
  return (

    <div className="w-full overflow-hidden bg-gradient-to-r from-slate-600 via-gray-700 to-zinc-800">
      <div className="relative grid  ">
        <div className="flex flex-col ">
        </div>
        <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="text-center">
        <div className="flex flex-col items-center">
        <h1 className="font-bold text-7xl text-white">Ticketing System</h1>
        <Button className="ml-auto" size="sm">
          New Ticket
        </Button>
        </div>
      </div>
      <div className="bg-gray-700 p-8 rounded-2xl shadow-2xl">
      <div className="flex items-center w-full max-w-sm rounded-lg border dark:border-gray-00">
        <SearchIcon className="h-4 w-4 ml-2.5 mr-2.5 text-white" />
        <Input
          className="w-full border-0 shadow-none appearance-none bg-gray-100/40 dark:bg-gray-800/40"
          placeholder="Search tickets..."
          type="search"
        />
      </div>
      <div className="grid items-center gap-4 overflow-auto">
        <Table className="text-slate-300">
          <TableHeader className="font-bold">
            <TableRow>
              <TableHead className="text-white font-bold text-lg">Username</TableHead>
              <TableHead className="text-white font-bold text-lg">Subject</TableHead>
              <TableHead className="text-white font-bold text-lg">Status</TableHead>
              <TableHead className="text-white font-bold text-lg">Date Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
                          <TicketProp 
                          key={ticket.id}
                          num={ticket.num}
                          email={ticket.email}
                          username={ticket.username}
                          subject={ticket.subject}
                          status={ticket.status}
                          description={ticket.description}
                          date={ticket.date}
                      />
            ))}
            


          </TableBody>
        </Table>
      </div>
      </div>
      <Section7 />
      </div>
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