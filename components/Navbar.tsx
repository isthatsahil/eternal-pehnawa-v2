"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CategoryCollection } from "@chec/commerce.js/features/categories";
import Category from "./Category";
import { ShoppingBag } from "lucide-react";

type NavbarPropsType = {
  categories: CategoryCollection;
};
const Navbar = ({ categories }: NavbarPropsType): React.JSX.Element => {
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 py-1 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <Image
            priority
            src="https://res.cloudinary.com/cryptomonthly/image/upload/v1669137714/eternal_pehnawa/logo_meoecm.png"
            alt="Eternal Pehnawa"
            width={80}
            height={80}
          />
        </Link>
        <nav className="lg:flex 2xl:ml-16 gap-12">
          <Category categories={categories} />
        </nav>
        <div className="flex items-center gap-2">
          <Link
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
            href="/login"
          >
            Login
          </Link>
          <div className="flex divide-x border-r sm:border-l">
            <Button
              variant="ghost"
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
              <ShoppingBag />
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
