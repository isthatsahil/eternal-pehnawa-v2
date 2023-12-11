import commerce from "@/lib/commerce";
import { ProductCollection } from "@chec/commerce.js/features/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const getRecentProducts = async (): Promise<ProductCollection> => {
  const products = await commerce.products.list({
    limit: 4,
    sortBy: "created",
    sortDirection: "desc",
  });
  return products;
};
export default async function RecentProducts(): Promise<React.JSX.Element> {
  const recentproducts: ProductCollection = await getRecentProducts();
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
            Our Newest Products
          </h2>
          <Link
            className="text-primary flex items-center gap-x-2"
            href="/all-products"
          >
            See all
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {recentproducts?.data?.map((product) => {
            return (
              <div className="group relative" key={product?.id}>
                <div className="cursor-pointer aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Link href={`/all-products/product/${product?.id}`}>
                    <Image
                      className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                      src={product?.image?.url ? product?.image?.url : ""}
                      alt={product?.name}
                      width={300}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between cursor-pointer">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/all-products/product/${product?.id}`}>
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
      </div>
    </section>
  );
}
