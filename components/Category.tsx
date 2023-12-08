"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, Shirt } from "lucide-react";
import React, { Fragment } from "react";
import { CategoryCollection } from "@chec/commerce.js/features/categories";
import Link from "next/link";

type NavbarCategoryProps = {
  categories: CategoryCollection;
};
const Category = ({ categories }: NavbarCategoryProps): React.JSX.Element => {
  return (
    <Popover.Group className="lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button className="flex outline-none items-center gap-x-1 text-lg font-semibold leading 6 text-primary">
          Category
          <ChevronDownIcon
            aria-hidden="true"
            className="h-5 w-5 flex-none text-primary"
          />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-20 bg-white -left-8 top-full z-10 mt-3 w-[15rem] md:w-screen md:max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 cursor-pointer">
              {categories?.data?.map((category) => {
                return (
                  <div
                    key={category?.id}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg leading-6 text-primary hover:bg-primary transition duration-100 hover:text-white"
                  >
                    <Link
                      className="text-lg font-semibold flex-auto"
                      href={category?.slug}
                    >
                      {category?.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  );
};

export default Category;
