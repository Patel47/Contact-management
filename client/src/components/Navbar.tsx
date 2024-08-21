"use client";
import React from "react";
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
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <div className="">
        <div className="bg-yellow-300 p-4 ">LOGO</div>
        <div className="flex flex-col gap-6 bg-blue-500 mt-10 py-10 p-4">
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
    </div>
  );
};

export default Navbar;
