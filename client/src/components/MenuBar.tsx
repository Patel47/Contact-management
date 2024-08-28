"use client";
import Link from "next/link";
import {
  Award,
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Phone,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Account from "./Account";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie } from "@/services/apiService";

export default function MenuBar({ children }: any) {
  const pathName = usePathname();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = getCookie("authToken");
  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
      <div className=" hidden border-r bg-muted/40 md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2  fixed top-0 left-0 w-[18.3%]">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">NexContact</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  pathName === "/"
                    ? "bg-gray-300 dark:bg-muted"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/about"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  pathName === "/about"
                    ? "bg-gray-300 dark:bg-muted"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Award className="h-4 w-4" />
                About Us
                {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge> */}
              </Link>
              <Link
                href="/contact"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  pathName === "/contact"
                    ? "bg-gray-300 dark:bg-muted"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </Link>

              {isAuthenticated && (
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    pathName === "/dashboard"
                      ? "bg-gray-300 dark:bg-muted"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <LineChart className="h-4 w-4" />
                  Dashboard
                </Link>
              )}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold  w-2/3"
                >
                  <Package2 className="h-6 w-6" />
                  <span className=" ">NexContact</span>
                </Link>
                <Link
                  href="/"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    pathName === "/"
                      ? "bg-gray-300 dark:bg-muted"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    pathName === "/about"
                      ? "bg-gray-300 dark:bg-muted"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Award className="h-5 w-5" />
                  About Us
                  {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge> */}
                </Link>
                <Link
                  href="/contact"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    pathName === "/contact"
                      ? "bg-gray-300 dark:bg-muted"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Phone className="h-5 w-5" />
                  Contact Us
                </Link>

                {isAuthenticated && (
                  <Link
                    href="/dashboard"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                      pathName === "/dashboard"
                        ? "bg-gray-300 dark:bg-muted"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <LineChart className="h-5 w-5" />
                    Dashboard
                  </Link>
                )}
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1 ">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search contacts..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>

          {/* Dropdown in header */}
          <div className=" flex justify-center items-center gap-2">
            <ModeToggle />
            {isAuthenticated ? (
              <Account />
            ) : (
              <Link href={"/signin"}>
                <Button variant={"secondary"}>Login </Button>
              </Link>
            )}
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-2 lg:gap-6 lg:p-6 overflow-auto">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
