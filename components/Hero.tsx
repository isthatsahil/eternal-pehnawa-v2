import commerce from "@/lib/commerce";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const categories = await commerce.categories.list();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion to complete your style!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Home to collection of exclusively curated and meticulously
            handcrafted items.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12  -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              priority
              width={500}
              height={300}
              className="h-full w-full object-cover object-center"
              alt="saree-1"
              src="https://res.cloudinary.com/cryptomonthly/image/upload/v1656232812/eternal_pehnawa/PHOTO-2022-06-15-13-51-02_oizftu.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              priority
              width={500}
              height={300}
              className="h-full w-full object-cover object-center"
              alt="saree-2"
              src="https://res.cloudinary.com/cryptomonthly/image/upload/v1656232813/eternal_pehnawa/PHOTO-2022-06-15-13-45-49_xjfbqu.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-full divide-x overflow-hidden rounded-lg border">
          {categories?.data?.map((category) => {
            return (
              <Link
                key={category?.id}
                href={`/all-products/categories/${category?.slug}`}
                className="flex p-2 w-1/3 items-center text-sm justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                {category?.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
