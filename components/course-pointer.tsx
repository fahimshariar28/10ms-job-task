import { SectionType } from "@/types/course";
import { Check } from "lucide-react";

type CoursePointerProps = {
  coursePointer: SectionType;
};

export default function CoursePointer({ coursePointer }: CoursePointerProps) {
  return (
    <section className="my-5 mx-5 md:mx-2 lg:mx-24 border-t-8 border-gray-200 md:border-0">
      <h2 className="text-2xl mt-4 font-semibold text-gray-900 mb-2 md:mb-8">
        {coursePointer.name}
      </h2>
      <div className="grid md:grid-cols-2 gap-6 md:border border-gray-300 rounded-lg md:py-3 md:px-2 lg:py-8">
        {coursePointer.values.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-5 h-5 text-teal-500" />
            </div>
            <p className="leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
