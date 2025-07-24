import React from "react";
import { Medium } from "@/types/course";
import MediaSection from "./media-section";

type HeroSectionProps = {
  title: string;
  description: string;
  media: Medium[];
};

const HeroSection = ({ title, description, media }: HeroSectionProps) => {
  return (
    <div className="relative">
      <div className="container flex flex-col-reverse gap-4 md:flex-row md:gap-12 pb-6 md:py-10">
        <div className="flex flex-col justify-center md:basis-[50%] lg:basis-[60%] flex-1 mx-6 md:mx-4 lg:mx-8 lg:ml-24 mt-4">
          <h1 className="text-white mb-2 text-xl font-bold md:text-4xl">
            {title}
          </h1>
          <div
            className="text-gray-400 md:mb-8 overflow-hidden h-auto mask-none md:w-11/12"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="flex items-center justify-center md:basis-[50%] lg:basis-[40%] flex-1">
          {/* Media Section for Mobile */}
          <div className="md:hidden">
            <MediaSection media={media} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
