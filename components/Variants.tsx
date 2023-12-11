"use client";
import React, { useState } from "react";
import {
  ProductVariantGroup,
  ProductVariantOption,
} from "@chec/commerce.js/types/product-variant-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

type VariantsPropType = {
  variants: ProductVariantGroup[];
};
const Variants = ({ variants }: VariantsPropType) => {
  const [selectedVariant, setSelectedVariants] = useState<string[]>([]);

  const handleDropDownValue = (value: string) => {
    setSelectedVariants((prevState) => {
      return [...prevState, value];
    });
  };

  return (
    <div className="mb-4">
      <div className="flex items-start gap-2">
        {variants?.map((variant) => {
          return (
            <>
              <div
                key={variant?.id}
                className="text-md font-bold text-gray-800 md:text-lg"
              >
                <Select onValueChange={handleDropDownValue}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      placeholder={`Select ${variant?.name.toLowerCase()}`}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{variant?.name}</SelectLabel>
                      {variant?.options?.map((option) => (
                        <SelectItem key={option?.id} value={option?.id}>
                          {option?.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Variants;
