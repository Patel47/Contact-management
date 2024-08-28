import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { EllipsisVertical, Eye, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import getColorFromLetter from "@/services/getColorFromLetter";

export default function DataTable({ contacts }: { contacts: any[] }) {
  return (
    <Table selectionMode="single" aria-label="Example empty table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>MOBILE</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {contacts.map((contact: any, index) => {
          const bgColor = getColorFromLetter(contact?.name.charAt(0));

          return (
            <TableRow key={index}>
              <TableCell className=" flex items-center gap-2">
                <span>
                  <Avatar
                    className="border-2"
                    style={{
                      borderColor: bgColor,
                    }}
                  >
                    <AvatarImage />
                    <AvatarFallback>
                      {contact?.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </span>
                <span className="tracking-wider">{contact.name}</span>
              </TableCell>
              <TableCell className="tracking-wide">{contact.phone}</TableCell>
              <TableCell className=" pl-6">
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-24">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          <span>Update</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
