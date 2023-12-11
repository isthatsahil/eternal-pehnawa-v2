import Image from "next/image";
import Link from "next/link";
import React from "react";

type RelatedProductsProps = {
  relatedProducts: any[];
};

const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
  return (
    <div className="my-8">
      <h2 className="text-lg font-semibold tracking-tight text-gray-900 ">
        Related Products
      </h2>
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {relatedProducts?.map((product) => {
          return (
            <div className="group relative" key={product?.id}>
              <div className="cursor-pointer aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`/all-products/product/${product?.id}`}>
                  <Image
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    src={product?.image?.url ? product?.image?.url : ""}
                    alt={product?.name}
                    width={200}
                    height={200}
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
  );
};

export default RelatedProducts;
