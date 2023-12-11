"use client";
import React, { useState } from "react";
import { Asset } from "@chec/commerce.js/types/asset";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";

type GalleryPropType = {
  images: Asset[];
};
const Gallery = ({ images }: GalleryPropType) => {
  const [centerImage, setCenterImage] = useState<Asset>(images[0]);
  const updateCenterImage = (image: Asset): void => {
    setCenterImage(image);
  };
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6  w-full max-w-3xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images?.map((img) => (
            <Tab
              key={img?.id}
              className="relative flex aspect-square cursor-pointer items-center justify-center rounded-lg"
            >
              {({ selected }) => (
                <div>
                  <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-lg">
                    <Image
                      fill
                      alt={img?.filename}
                      src={img?.url}
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    className={cn(
                      "absolute inset-0 rounded-lg ring-offset-2",
                      selected ? "ring-gray-800" : "ring-transparent"
                    )}
                  />
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square">
        {images.map((img) => (
          <Tab.Panel key={img.id}>
            <div className="aspect-square relative w-full sm:rounded-lg overflow-hidden">
              <Image
                src={img?.url}
                fill
                alt={img?.filename}
                className="h-full w-full object-cover object-center cursor-pointer"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>

      {/* <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images?.map((img) => {
          return (
            <div
              key={img?.id}
              className="overflow-hidden rounded-lg bg-gray-100"
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
                className="relative"
              >
                <Image
                  src={img?.url}
                  alt={img?.filename}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-center cursor-pointer"
                  onClick={() => updateCenterImage(img)}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          width={500}
          height={500}
          src={centerImage?.url}
          alt={centerImage?.filename}
          className="h-full w-full object-cover object-center"
        />
      </div> */}
    </Tab.Group>
  );
};

export default Gallery;
