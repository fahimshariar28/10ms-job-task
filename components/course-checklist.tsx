import { ChecklistType } from "@/types/course";
import Image from "next/image";
import React from "react";

const CourseChecklist = ({ checklist }: { checklist: ChecklistType[] }) => {
  return (
    <div className="my-5 px-5">
      <h2 className="text-black text-lg font-semibold">এই কোর্সে যা থাকছে</h2>
      <ul className="mt-2">
        {checklist.map((item) => (
          <li key={item.id} className="text-gray-800 mb-2">
            <div className="flex items-center gap-1">
              <Image
                src={item.icon}
                alt={item.text}
                width={24}
                height={24}
                className="inline-block mr-2"
              />
              <span className="text-black">{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseChecklist;
