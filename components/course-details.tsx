"use client";

import { SectionType } from "@/types/course";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const courseTargets = [
  "Those who aim to go abroad for work or higher education",
  "Those who want to apply for permanent residency abroad",
  "Those who have appeared for the IELTS exam but are not satisfied with their band score",
  "Those who want to improve their reading, writing, listening, and speaking skills through IELTS for work, business, or personal interest",
];

type CourseDetailsProps = { courseDetails: SectionType };

export default function CourseDetails({ courseDetails }: CourseDetailsProps) {
  const courseDetailsData = courseDetails.values;

  const [expandedSection, setExpandedSection] = useState<string | null>(
    "target"
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="my-5 mx-5 md:mx-24">
      <h2 className="text-2xl mt-4 font-semibold text-black mb-2 md:mb-8">
        {courseDetails.name}
      </h2>

      <div className="space-y-4 md:border border-gray-300 rounded-lg md:px-6 md:py-3">
        {courseDetailsData.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index !== courseDetailsData.length - 1
                ? "border-b border-dashed border-gray-300"
                : ""
            }`}
          >
            {" "}
            <button
              onClick={() => toggleSection(item.id)}
              className="w-full flex items-center justify-between p-2 text-left"
            >
              <span
                className="text-gray-800"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></span>
              {expandedSection === item.id ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {expandedSection === item.id && (
              <div className="px-4 pb-4">
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
