import React from "react";
import { Skeleton } from "@nextui-org/react";

export default function SkeletonDemo() {
  return (
    <div className="max-w-full w-full flex items-center justify-between gap-4 sm:gap-6 sm:px-4">
      <div className="flex gap-2 items-center w-full sm:w-[250px]">
        <Skeleton className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12" />
        <Skeleton className="h-6 sm:h-7 w-2/3 sm:w-3/5 rounded-lg" />
      </div>

      <div className="flex gap-6 sm:gap-10 w-full sm:w-auto">
        <Skeleton className="h-6 sm:h-7 w-[200px] sm:w-[300px] rounded-lg" />
      </div>

      <div className="w-full sm:w-auto">
        <Skeleton className="h-6 sm:h-7 w-2 sm:w-3 rounded-lg" />
      </div>
    </div>
  );
}
