import { SectionType } from "@/types/course";
import Image from "next/image";

type CourseFeaturesProps = { courseFeatures: SectionType };

export default function CourseFeatures({
  courseFeatures,
}: CourseFeaturesProps) {
  return (
    <section className="my-5 mx-5 md:mx-2 lg:mx-24">
      <h2 className="text-xl font-semibold mt-4 text-gray-900 mb-8">
        {courseFeatures.name}
      </h2>

      <div className="bg-slate-800 rounded-lg py-6 px-2">
        <div className="grid md:grid-cols-2 gap-6">
          {courseFeatures.values.map(({ id, icon, subtitle, title }) => (
            <div key={id} className="flex items-start gap-4">
              <div className=" w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src={icon}
                  alt={title}
                  width={48}
                  height={48}
                  className="w-9 h-9"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
