"use client";
import React, { useState } from "react";
import { LogOut, Moon, SunDim, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className=" p-4 ">LOGO</div>
      <main className="bg-blue-800 min-h-[92vh] flex flex-col justify-between">
        <div className="">
          <div className="flex flex-col gap-6 bg-blue-500 mt-10 py-10  p-4">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>CONTACT</div>
          </div>
        </div>
        <div className="bg-cyan-400 p-4 flex flex-col items-center">
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    {theme == "light" ? (
                      <div
                        className="flex items-center w-full"
                        onClick={() => setTheme("dark")}
                      >
                        <Moon className="mr-2 h-4 w-4" />
                        <span>Dark Mode</span>
                      </div>
                    ) : (
                      <div
                        className="flex items-center w-full"
                        onClick={() => setTheme("light")}
                      >
                        <SunDim className="mr-2 h-4 w-4" />
                        <span>Light Mode</span>
                      </div>
                    )}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          USER PROFILE
        </div>
      </main>
    </>
  );
};

export default Navbar;
