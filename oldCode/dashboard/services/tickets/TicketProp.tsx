"use client"

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
import ResolveTicket from '@/queries/ResolveTicket';

interface TicketPropProps {
    username: string;
    subject: string;
    status: string;
    date: string;
    description: string;
    num: string;
    email: string;
}


const TicketProp = (props:TicketPropProps) => {

    return (
            <TableRow className=''>
              <TableCell className="font-medium">{props.username}</TableCell>
              <TableCell className="font-medium">
                <div className='flex items-center gap-10'>
                {props.subject}

                {/* Here is the popup for ticket open */}
                <AlertDialog>
              <AlertDialogTrigger className='bg-gray-900 p-2 rounded-lg px-8'>Open</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogDescription>
              <TicketForm 
              username={props.username}
              email={props.username}
              subject={props.subject}
              description={props.description}
              id={props.num}
              />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Back</AlertDialogCancel>
                  <AlertDialogAction onClick={()=>ResolveTicket(
                    props.username,
                    props.num,
                    props.email,
                    props.subject,
                    props.date,
                    props.description
                  
                  )}>Resolve</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
                </div>

                </TableCell>
              <TableCell className="hidden md:table-cell">{props.status}</TableCell>
              <TableCell className="hidden md:table-cell">{props.date}</TableCell>
            </TableRow>
    );
};

export default TicketProp;