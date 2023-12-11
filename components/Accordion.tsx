"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";
const Accordion = () => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span>Our refund policy</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              We have a customer friendly 3 days return and 10 days exchange
              policy. -If you have received the product in a bad condition or if
              the packaging is damaged, customer are requested to take picture
              and make video while opening a parcel. Also please email us at
              ethernalpehnawa@gmail.com mentioning your order ID. -We will
              personally ensure that a brand new replacement is issued to you
              with no additional cost. -If you don’t like the product, you need
              to place a return request from your account. We will arrange a
              pickup from your doorstep. -Incase due to certain circumstances
              after raising the return request within 3 days you are unable to
              return the shipment, no refund would be made. Only credit note
              would be issued. -Refund would be processed within 4 to 7 days
              after the product is received.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span>Our shipping policy</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              Free shipping on all products in India. -Once the order is placed,
              it takes 5 to 7 business days to dispatch after placing the order.
              Then 4 to 5 business days for it to get delivered. -So, the
              estimated time would be 10 to 15 working days. You will receive
              the tracking details once your order has been shipped.
              -International shipping charges would be 2500 (0.6 kg to 2 Kg). It
              takes around 10-12 business days for the delivery.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span>Our cancellation policy</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              If you have to cancel an order, kindly do so before your order is
              shipped through your account. If you cancel your order before it
              is shipped, we will refund you the entire amount.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Accordion;
