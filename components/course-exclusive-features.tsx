import { Check } from "lucide-react";
import { SectionType } from "@/types/course";
import Image from "next/image";

type CourseExclusiveFeaturesProps = {
  courseExclusiveFeatures: SectionType;
};

export default function CourseExclusiveFeatures({
  courseExclusiveFeatures,
}: CourseExclusiveFeaturesProps) {
  return (
    <section className="my-5 mx-5 md:mx-2 lg:mx-24">
      <h2 className="text-xl mt-4 font-semibold text-gray-900 mb-2 md:mb-8">
        {courseExclusiveFeatures.name}
      </h2>

      <div className="bg-white overflow-hidden border border-gray-300 rounded-lg px-3 py-3">
        {courseExclusiveFeatures.values.map((feature, index) => (
          <div key={feature.id}>
            <div className="py-4 grid md:grid-cols-2 items-center gap-6 md:gap-2 lg:gap-8">
              <div className="space-y-4">
                <p>{feature.title}</p>
                <ul className="space-y-2">
                  {/* @ts-ignore */}
                  {feature.checklist.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-gray-500"
                    >
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src={feature.file_url}
                  alt={feature.title}
                  width={220}
                  height={220}
                  className="object-cover aspect-square w-56"
                />
              </div>
            </div>
            {index < courseExclusiveFeatures.values.length - 1 && (
              <div className="mx-6 md:mx-8 border-b border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
