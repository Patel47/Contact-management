"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CircleAlert, SquarePlus } from "lucide-react";
import { useFormik } from "formik";
import { addNewContactSchema } from "@/validations/schema";

const Dashboard = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
    },
    validationSchema: addNewContactSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <main className="flex flex-1 flex-col min-h-screen gap-4 p-2 lg:gap-6 lg:p-6 overflow-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">All Contacts</h1>

        <Dialog>
          <DialogTrigger>
            <div className="flex justify-center items-center gap-1 dark:bg-white bg-gray-200 text-sm text-black px-3 py-2 rounded-lg">
              <span>
                <SquarePlus className="h-5 w-5" />
              </span>
              Add Contact
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Contact</DialogTitle>
              <DialogDescription>
                Make changes to your list here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Pedro Duarte"
                    className="col-span-3 placeholder:text-gray-600"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="flex items-center gap-1 text-red-500 text-sm font-medium">
                      <CircleAlert size={16} />
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="mobile" className="">
                    Contact Number
                  </Label>
                  <Input
                    type="number"
                    id="mobile"
                    placeholder="9789789567"
                    className="col-span-3 placeholder:text-gray-600"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                  />
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div className="flex items-center gap-1 text-red-500 text-sm font-medium">
                      <CircleAlert size={16} />
                      {formik.errors.mobile}
                    </div>
                  ) : null}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no data
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start managing contact as soon as you add a new contact.
          </p>

          <Dialog>
            <DialogTrigger>
              <div className="mt-4 flex justify-center items-center gap-1 dark:bg-white bg-gray-200 text-sm text-black px-3 py-2 rounded-lg">
                <span>
                  <SquarePlus className="h-5 w-5" />
                </span>
                Add Contact
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Contact</DialogTitle>
                <DialogDescription>
                  Make changes to your list here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Pedro Duarte"
                      className="col-span-3 placeholder:text-gray-600"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="flex items-center gap-1 text-red-500 text-sm font-medium">
                        <CircleAlert size={16} />
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="mobile" className="">
                      Contact Number
                    </Label>
                    <Input
                      type="number"
                      id="mobile"
                      placeholder="9789789567"
                      className="col-span-3 placeholder:text-gray-600"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      value={formik.values.mobile}
                    />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="flex items-center gap-1 text-red-500 text-sm font-medium">
                        <CircleAlert size={16} />
                        {formik.errors.mobile}
                      </div>
                    ) : null}
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
