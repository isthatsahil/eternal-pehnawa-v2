"use-client";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

export default function Mission() {
  return (
    <section className="relative mx-auto mt-20 sm:mt-6 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-1">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Our mission
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Our mission is to create an online apparel store that can offer
            traditional wear of different states with superior quality and value
            to the consumer. We will accomplish this by being committed to
            offering great service and real value to our consumers. We
            revolutionize fashion among all age group women at addictive prices
            and unbeatable quality.
          </p>
        </div>
        <div className="mb-12 w-full md:mb-16 lg:w-2/3">
          <div className="flex items-center relative sm:left-12 top-12 z-10 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            {/* <Video
              className="p-4"
              src="https://res.cloudinary.com/cryptomonthly/video/upload/v1656249155/eternal_pehnawa/VIDEO-2022-06-26-18-41-54_lwtlcv.mp4"
            /> */}
            <VideoPlayer />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl md:max-w-4xl">
        <div className="flex flex-col sm:flex-row mb-4 md:mb-0 gap-2">
          <div className="flex w-full flex-col justify-center">
            <h1 className="mb-1 text-2xl font-bold text-black sm:text-3xl md:mb-8 md:text-4xl">
              Meet the Artisans
            </h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-sm">
              Take a look at our all new handcrafted and handpicked pieces of
              art by our artisans/weavers from the rarest of corners of India in
              vibrant hues for the conscious you.
            </p>
          </div>
          <div className="w-full">
            <div className="flex relative items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image
                priority
                className="h-full w-full object-cover object-center"
                height={500}
                width={500}
                src="https://res.cloudinary.com/cryptomonthly/image/upload/v1643465020/eternal_pehnawa/image01_imkwzs.jpg"
                alt="Artisian"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-2 md:gap-7">
          <div className="flex w-full flex-col justify-center">
            <h1 className="mb-1 text-2xl font-bold text-black sm:text-3xl md:mb-8 md:text-4xl">
              What&apos;s new?
            </h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-sm">
              Take a dive into our latest collection by the Tangaliya weavers
              from Surendernagar and Bhuj, experimenting with kala cotton and
              organic dyes in collaboration with Tangaliya weavers.
            </p>
          </div>
          <div className="w-full">
            <div className="flex relative items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image
                priority
                className="h-full w-full object-cover object-center"
                height={500}
                width={500}
                src="https://res.cloudinary.com/cryptomonthly/image/upload/v1656232814/eternal_pehnawa/PHOTO-2022-06-15-13-45-14_2_cjlhzv.jpg"
                alt="Artisian"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute  right-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[188px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#7B39ED]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#7B39ED]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#7B39ED]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
