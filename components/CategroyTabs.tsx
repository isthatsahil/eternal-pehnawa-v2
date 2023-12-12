"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { Input } from "./ui/input";
import { Slider } from "@nextui-org/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { CategoryCollection } from "@chec/commerce.js/features/categories";
import commerce from "@/lib/commerce";
import { Product } from "@chec/commerce.js/types/product";
import Link from "next/link";
import Image from "next/image";
import SkeletonLoader from "./SkeletonLoader";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const skeletonArray = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12];
type CategoriesWrapperType = {
  categories: CategoryCollection;
};
type SelectedTab = {
  slug: string;
  id: number;
};

export default function Example({ categories }: CategoriesWrapperType) {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);
  const [customSelectedIndex, setCustomSelectedIndex] = useState<SelectedTab[]>(
    []
  );
  const [slug, setSlug] = useState<string>(
    pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length + 1)
  );
  const [priceRange, setPriceRange] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const categoryArray: SelectedTab[] = [];
    categories?.data?.map((category, idx) => {
      return categoryArray.push({
        slug: category?.slug,
        id: idx,
      });
    });
    setCustomSelectedIndex(categoryArray);
  }, []);

  async function getProductBasedOnCategory(slug: string) {
    setLoading(true);
    const products = await commerce.products.list({
      category_slug: [slug],
    });
    setFilteredProducts(products?.data);
    setLoading(false);
  }
  useEffect(() => {
    if (slug) getProductBasedOnCategory(slug);
  }, [slug]);

  const handleSelectedIndex = (): number => {
    const selectedArray = customSelectedIndex?.filter(
      (selected) => selected?.slug === slug
    );
    return selectedArray[0]?.id;
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value) {
      const newFilteredArray = filteredProducts.filter((prod) =>
        prod?.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      newFilteredArray?.length > 0 && setFilteredProducts(newFilteredArray);
    } else {
      getProductBasedOnCategory(slug);
    }
  };

  const applyFilter = (): void => {
    let sortedArray: Product[] = [];
    if (sortBy) {
      if (sortBy == "low") {
        sortedArray = filteredProducts.sort((a, b) => {
          return a?.price?.raw - b?.price?.raw;
        });
      } else if (sortBy == "high") {
        sortedArray = filteredProducts.sort((a, b) => {
          return b?.price?.raw - a?.price?.raw;
        });
      } else if (sortBy == "asc") {
        sortedArray = filteredProducts.sort((a, b) => {
          return a?.name.localeCompare(b?.name, undefined, {
            numeric: true,
            sensitivity: "base",
          });
        });
      } else if (sortBy == "desc") {
        sortedArray = filteredProducts.sort((a, b) => {
          return b?.name.localeCompare(a?.name, undefined, {
            numeric: true,
            sensitivity: "base",
          });
        });
      }
    }
    if (sortBy && !priceRange && sortedArray) {
      setFilteredProducts(sortedArray);
    }
    let priceFilteredArray: Product[] = [];
    if (typeof priceRange == "number" && priceRange) {
      if (sortedArray.length > 0) {
        priceFilteredArray = sortedArray.filter(
          (arr) => 0 < arr.price.raw && arr.price.raw < priceRange
        );
      } else {
        priceFilteredArray = filteredProducts.filter(
          (arr) => 0 < arr.price.raw && arr.price.raw < priceRange
        );
      }
      setFilteredProducts(priceFilteredArray);
    }
  };
  const clearFilter = (): void => {
    setPriceRange(100000);
    getProductBasedOnCategory(slug);
  };
  return (
    <div className="w-full px-2  sm:px-0">
      <Tab.Group selectedIndex={handleSelectedIndex()}>
        <Tab.List className="flex space-x-1 rounded-xl bg-secondary p-1 max-w-md mx-auto">
          {categories?.data?.map((category, idx) => (
            <Tab
              onClick={() => {
                setFilteredProducts([]);
                setSlug(category?.slug);
              }}
              key={category?.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "   focus:outline-none ",
                  selected
                    ? "bg-white text-primary shadow"
                    : " hover:bg-white/[0.12] hover:text-blue-700"
                )
              }
            >
              {category?.name}
            </Tab>
          ))}
        </Tab.List>
        <div className="my-6 py-4 md:py-8 flex flex-col md:flex-row gap-8 relative">
          <div className="flex flex-row md:flex-col gap-4 md:gap-8 flex-wrap sticky z-5">
            <div>
              <Input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
            <div className="mt-2 md:mt-6 flex flex-col gap-4 md:gap-6">
              <p className="text-sm font-semibold">Filters</p>
              <div>
                <Slider
                  label="Price range"
                  step={100}
                  value={priceRange}
                  onChange={(e) => {
                    if (typeof e == "number") {
                      setPriceRange(e);
                    }
                  }}
                  maxValue={10000}
                  minValue={0}
                  defaultValue={10000}
                  showTooltip={true}
                  formatOptions={{ style: "currency", currency: "INR" }}
                  tooltipValueFormatOptions={{
                    style: "currency",
                    currency: "INR",
                  }}
                />
              </div>
              <div>
                <Select
                  onValueChange={(e) => {
                    setSortBy(e);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Order</SelectLabel>
                      <SelectItem value="low">Price (low-high)</SelectItem>
                      <SelectItem value="high">Price (high-low)</SelectItem>
                      <SelectItem value="asc">Name (A-Z)</SelectItem>
                      <SelectItem value="desc">Name (Z-A)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button variant="default" onClick={applyFilter}>
                  Apply
                </Button>
                <Button variant="ghost" onClick={clearFilter}>
                  Clear
                </Button>
              </div>
            </div>
          </div>
          <div className="max-h-screen overflow-y-auto w-full">
            <Tab.Panels className=" bg-secondary rounded-lg p-4 ">
              {categories?.data?.map((category) => (
                <Tab.Panel
                  key={category?.id}
                  className={classNames(
                    "rounded-xl",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {loading
                      ? skeletonArray?.map((skeleton) => (
                          <SkeletonLoader key={skeleton} />
                        ))
                      : filteredProducts?.map((product) => {
                          return (
                            <div className="group relative" key={product?.id}>
                              <div className="cursor-pointer aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <Link
                                  href={`/all-products/product/${product?.id}`}
                                >
                                  <Image
                                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                                    src={
                                      product?.image?.url
                                        ? product?.image?.url
                                        : ""
                                    }
                                    alt={product?.name}
                                    width={300}
                                    height={300}
                                  />
                                </Link>
                              </div>
                              <div className="mt-4 flex justify-between cursor-pointer">
                                <div>
                                  <h3 className="text-sm text-gray-700">
                                    <Link
                                      href={`/all-products/product/${product?.id}`}
                                    >
                                      {product?.name}
                                    </Link>
                                  </h3>
                                  {product?.categories?.map((category) => (
                                    <p
                                      className="mt-1 text-sm text-gray-500"
                                      key={category?.id}
                                    >
                                      {category?.name}
                                    </p>
                                  ))}
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                  {product?.price.formatted_with_symbol}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}
