"use client";
import { Button } from "@/components/ui/button";
import React from "react";

type ErrorPropType = {
  error: Error;
  reset: () => void;
};
const error = ({ error, reset }: ErrorPropType) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold MJtext-emerald-700 Ml dark:text-emerald-500">
          There was a problem
        </p>
        <h1>{error?.message}</h1>
        <Button onClick={reset}>Try again</Button>
      </div>
    </main>
  );
};

export default error;
