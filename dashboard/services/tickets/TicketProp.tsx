import React from 'react';
import {TableRow, TableCell } from "@/components/ui/table"
import Link from "next/link"

interface TicketPropProps {
    ticketNumber: string;
    username: string;
    subject: string;
    status: string;
    date: string;
}

const TicketProp = (props:TicketPropProps) => {
    return (
            <TableRow>
              <TableCell>
                <Link href="#">{props.ticketNumber}</Link>
              </TableCell>
              <TableCell className="font-medium">{props.username}</TableCell>
              <TableCell className="font-medium">{props.subject}</TableCell>
              <TableCell className="hidden md:table-cell">{props.status}</TableCell>
              <TableCell className="hidden md:table-cell">{props.date}</TableCell>
            </TableRow>
    );
};

export default TicketProp;