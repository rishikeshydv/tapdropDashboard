import React from 'react';
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

const Rightbox= () => {


    return (
        <div className="px-8 border-white bg-slate-600 shadow-2xl rounded-3xl mt-20 mr-6 mb-40" style={{width:400}}>
        <div className="grid gap-4">

          <div className="space-y-4" id="introduction">
              <h1 className="text-3xl font-bold text-white tracking-tighter mt-8">Recent Purchases</h1>
          </div>
            <canvas className="space-y-2" id="round" style={{width:200}}>
            </canvas>
            <div className='bg-slate-700 rounded-2xl shadow-2xl py-4'>
                <div className='p-4 font-bold text-3xl text-white tracking-tighter'>
                    Top Sellers
                </div>
            <Table>
      <TableHeader>
        <TableRow className='text-lg'>
          <TableHead className="w-[100px]">Username</TableHead>
          <TableHead>Gadget</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className=''>
          <TableCell className="font-medium text-white shadow-2xl">
                <Button className="flex gap-2 bg-slate-700" variant="outline">
      <img
        className="rounded-full  border-gray-200"
        height="24"
        src="/man.png"
        style={{
          aspectRatio: "24/24",
          objectFit: "cover",
        }}
        width="24"
      />
      lucifery001
                </Button>
            </TableCell>
          <TableCell className='text-white shadow-2xl'>Tap Shooter</TableCell>
          <TableCell className='text-green-400 font-bold shadow-2xl'>$250.00</TableCell>
        </TableRow>

        <TableRow className=''>
          <TableCell className="font-medium text-white shadow-2xl">
                <Button className="flex gap-2 bg-slate-700" variant="outline">
      <img
        className="rounded-full  border-gray-200"
        height="24"
        src="/man.png"
        style={{
          aspectRatio: "24/24",
          objectFit: "cover",
        }}
        width="24"
      />
      lucifery001
                </Button>
            </TableCell>
          <TableCell className='text-white shadow-2xl'>Tap Shooter</TableCell>
          <TableCell className='text-green-400 font-bold shadow-2xl'>$250.00</TableCell>
        </TableRow>


        <TableRow className=''>
          <TableCell className="font-medium text-white shadow-2xl">
                <Button className="flex gap-2 bg-slate-700" variant="outline">
      <img
        className="rounded-full  border-gray-200"
        height="24"
        src="/man.png"
        style={{
          aspectRatio: "24/24",
          objectFit: "cover",
        }}
        width="24"
      />
      lucifery001
                </Button>
            </TableCell>
          <TableCell className='text-white shadow-2xl'>Tap Shooter</TableCell>
          <TableCell className='text-green-400 font-bold shadow-2xl'>$250.00</TableCell>
        </TableRow>
        
      </TableBody>
    </Table>
    </div>
        </div>
      </div>
    );
};

export default Rightbox;