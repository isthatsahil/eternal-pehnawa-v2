import Accordion from "@/components/Accordion";
import Gallery from "@/components/Gallery";
import RelatedProducts from "@/components/RelatedProducts";
import Variants from "@/components/Variants";
import { Button } from "@/components/ui/button";
import commerce from "@/lib/commerce";
import { Product } from "@chec/commerce.js/types/product";
import { Truck } from "lucide-react";

async function getProductDetails(id: string): Promise<Product> {
  const productDetails = await commerce.products.retrieve(id);
  return productDetails;
}

export default async function Product({ params }: { params: { id: string } }) {
  const productDetails: Product = await getProductDetails(params?.id);
  return (
    <div>
      <div className="mx-auto  max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Gallery images={productDetails?.assets} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-8">
              {productDetails?.categories?.map((category) => (
                <span
                  key={category?.id}
                  className="mb-0.5 inline-block text-gray-500"
                >
                  {category?.name}
                </span>
              ))}
              <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                {productDetails?.name}
              </h2>
            </div>
            <span
              className="text-base text-gray-500 tracking-wide"
              dangerouslySetInnerHTML={{
                __html: productDetails?.description,
              }}
            />
            <div className="mb-6 mt-6">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  {productDetails?.price?.formatted_with_symbol}
                </span>
              </div>
              <span className="text-sm text-gray-500">Exclusive of tax</span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm">7-15 Day Shipping</span>
            </div>
            <div className="mb-6">
              <div className="flex items-end gap-2">
                {productDetails?.inventory?.available > 0 ? (
                  <span className="text-lg font-semibold text-primary md:text-xl  border-2 p-2 rounded-lg border-solid border-primary">
                    In stock
                  </span>
                ) : (
                  <span className="text-lg font-semibold text-red-800 md:text-xl border-2 p-2 rounded-lg border-solid border-red-200">
                    SOLD OUT!
                  </span>
                )}
              </div>
            </div>
            <Variants variants={productDetails?.variant_groups} />
            <div className="flex gap-2.5 mt-6">
              <Button
                disabled={
                  productDetails?.inventory?.available > 0 ? false : true
                }
              >
                Add to Cart
              </Button>
              <Button variant="secondary">Checkout Now</Button>
            </div>
          </div>
          <div className="w-full md:py-8">
            <div className="rounded-2xl bg-secondary p-2">
              <Accordion />
            </div>
          </div>
        </div>
        <RelatedProducts relatedProducts={productDetails?.related_products} />
      </div>
    </div>
  );
}
