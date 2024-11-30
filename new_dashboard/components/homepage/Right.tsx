"use client";
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Test from '@/queries/test'

export default function Right() {
  return (
    <div className="w-full p-6 bg-white rounded-3xl my-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search experiences"
            className="pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Metrics (6/6)</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Active Players</DropdownMenuItem>
              <DropdownMenuItem>Session Length</DropdownMenuItem>
              <DropdownMenuItem>Favorites</DropdownMenuItem>
              <DropdownMenuItem>Rating</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={Test}>Export</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <div className='h-[565px]'>
        <Table>
        <TableHeader className='text-sm'>
            <TableRow>
              <TableHead className="w-[300px] border">Games</TableHead>
              <TableHead className='border px-4'>CCU</TableHead>
              <TableHead className='border px-4'>Favorited Count</TableHead>
              <TableHead className='border px-3'>Visits</TableHead>
              <TableHead className='border px-4'>Rating</TableHead>
              <TableHead className='border px-4'>Created On</TableHead>
            </TableRow>
          </TableHeader>
          </Table>
          <div className="overflow-auto h-[500px]">
          <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-[300px]">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.webp"
                    alt="Brookhaven"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium">Brookhaven RP</div>
                    <div className="text-sm text-muted-foreground">@Wolfpaq</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>568,728</TableCell>
              <TableCell>16.5</TableCell>
              <TableCell>22,315,398</TableCell>
              <TableCell>86.41%</TableCell>
              <TableCell>04/20/2020</TableCell>
            </TableRow>
            

          </TableBody>
        </Table>
        </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          1-50 of 33,393 experiences
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">4</Button>
          <Button variant="outline">5</Button>
          <span>...</span>
          <Button variant="outline">668</Button>
          <Button variant="outline">
            Next
          </Button>
          <Select defaultValue="50">
            <SelectTrigger className="w-[130px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 / page</SelectItem>
              <SelectItem value="20">20 / page</SelectItem>
              <SelectItem value="50">50 / page</SelectItem>
              <SelectItem value="100">100 / page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

