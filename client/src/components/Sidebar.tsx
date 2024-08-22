"use client";
import React, { useState } from "react";
// import Navbar from "./Navbar";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { ModeToggle } from "./ModeToggle";
import { Github } from "lucide-react";
import Account from "./Account";
import Link from "next/link";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT", "CONTACT"];

  return (
    <>
      <div className="bg-slate-600">
        <Navbar onMenuOpenChange={setIsMenuOpen}>
          {/* MOBILE MENU */}
          <NavbarMenu>
            <NavbarMenuItem>
              <Link
                className="w-full bg-red-500"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Link
                className="w-full bg-red-500"
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Link
                className="w-full bg-red-500"
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>

          {/* DESKTOP MENU */}

          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <p className="font-bold text-2xl">NexContact</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link href="/">HOME</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about">ABOUT</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contact">CONTACT</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <Link href="https://github.com/Omi-Patel">
              <NavbarItem className="bg-gray-200 dark:bg-zinc-800 p-2 rounded-lg lg:flex">
                <Github />
              </NavbarItem>
            </Link>
            {/* <NavbarItem>
              <ModeToggle />
            </NavbarItem> */}
            <NavbarItem>
              <Account />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
};

export default Sidebar;
