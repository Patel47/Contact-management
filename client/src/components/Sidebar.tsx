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
  Link,
  Button,
} from "@nextui-org/react";
import { ModeToggle } from "./ModeToggle";
import { Github } from "lucide-react";
import Account from "./Account";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["HOME", "ABOUT", "CONTACT"];

  return (
    <>
      <div className="bg-slate-600">
        <Navbar onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link href="/">HOME</Link>
            </NavbarItem>
            <NavbarItem >
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
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
};

export default Sidebar;
