import React from 'react';
import {TableRow, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import TicketForm from '@/components/Tickets/TicketForm';

interface TicketPropProps {
    ticketNumber: string;
    username: string;
    subject: string;
    status: string;
    date: string;
}


const TicketProp = (props:TicketPropProps) => {
    return (
            <TableRow className=''>
              <TableCell>
                <Link href="#">{props.ticketNumber}</Link>
              </TableCell>
              <TableCell className="font-medium">{props.username}</TableCell>
              <TableCell className="font-medium">
                <div className='flex items-center gap-2'>
                {props.subject}

                {/* Here is the popup for ticket open */}
                <AlertDialog>
              <AlertDialogTrigger className='bg-gray-900 p-2 rounded-lg'>Open</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className='text-center font-bold text-2xl'>Ticket {props.ticketNumber}</AlertDialogTitle>
                  <AlertDialogDescription>
              <TicketForm />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>



                <Button className='p-2'>Resolve</Button>

                </div>

                </TableCell>
              <TableCell className="hidden md:table-cell">{props.status}</TableCell>
              <TableCell className="hidden md:table-cell">{props.date}</TableCell>
            </TableRow>
    );
};

export default TicketProp;