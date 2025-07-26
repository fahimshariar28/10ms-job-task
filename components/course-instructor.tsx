import { SectionType } from "@/types/course";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type CourseInstructorProps = {
  courseInstructor: SectionType;
};

export default function CourseInstructor({
  courseInstructor,
}: CourseInstructorProps) {
  const instructor = courseInstructor.values[0];

  return (
    <section className="my-5 mx-5 md:mx-2 lg:mx-24 border-t-8 border-gray-200 md:border-0">
      <h1 className="text-2xl mt-4 font-semibold text-gray-900 mb-8">
        {courseInstructor.name}
      </h1>
      <div className="bg-white md:border border-gray-300 rounded-lg px-2 py-3">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link
                href={`/instructors/${instructor.slug}`}
                className="text-lg font-semibold text-gray-900"
              >
                {instructor.name}
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </div>

            <div
              className="text-gray-800 overflow-hidden h-auto mask-none"
              dangerouslySetInnerHTML={{
                __html: instructor.description,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
