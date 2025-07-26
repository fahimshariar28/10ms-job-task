"use client";
import { useEffect, useRef, useState } from "react";
import MediaSection from "./media-section";
import PriceSection from "./price-section";
import CtaButton from "./cta-button";
import CourseChecklist from "./course-checklist";
import Information from "./information";
import { ChecklistType, Medium } from "@/types/course";

type RightSidebarProps = {
  media: Medium[];
  cta_text: {
    name: string;
    value: string;
  };
  checklist: ChecklistType[];
};

export default function RightSidebar({
  media,
  cta_text,
  checklist,
}: RightSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // When sidebar is NOT visible -> show sticky
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 } // Trigger when the element leaves viewport
    );

    if (sidebarRef.current) {
      observer.observe(sidebarRef.current);
    }

    return () => {
      if (sidebarRef.current) observer.unobserve(sidebarRef.current);
    };
  }, []);

  return (
    <>
      {/* Absolute Sidebar */}
      <div
        ref={sidebarRef}
        className="hidden md:block absolute md:top-0 lg:top-8 md:right-2 lg:right-16"
      >
        <div className="bg-white border border-gray-300 border-b-0">
          <MediaSection media={media} />
        </div>

        <div className="bg-white border border-gray-300 border-t-0">
          <PriceSection />
          <CtaButton ctaText={cta_text} />
          <CourseChecklist checklist={checklist} />
        </div>
        <div className="mt-4">
          <Information />
        </div>
      </div>

      {/* Sticky CTA (Appears after scroll) */}
      <div
        className={`hidden md:block fixed md:top-2 lg:top-8 md:right-2 lg:right-16 transition-transform duration-300 z-50 ${
          isStickyVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-32 opacity-0"
        }`}
      >
        <div className="bg-white border border-gray-300">
          <PriceSection />
          <CtaButton ctaText={cta_text} />
          <CourseChecklist checklist={checklist} />
        </div>
        <div className="mt-4">
          <Information />
        </div>
      </div>
    </>
  );
}
