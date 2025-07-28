import CourseChecklist from "@/components/course-checklist";
import CourseDetails from "@/components/course-details";
import CourseExclusiveFeatures from "@/components/course-exclusive-features";
import CourseFeatures from "@/components/course-features";
import CourseInstructor from "@/components/course-instructor";
import CoursePointer from "@/components/course-pointer";
import HeroSection from "@/components/hero-section";
import MobilePriceCTA from "@/components/mobile-price-cta";
import RightSidebar from "@/components/right-sidebar";
import { getCourseData } from "@/lib/api";

export default async function Home() {
  const courseData = await getCourseData();

  const instructor = courseData.sections.find(
    (section) => section.type === "instructors"
  );

  const courseFeatures = courseData.sections.find(
    (section) => section.type === "features"
  );

  const pointers = courseData.sections.find(
    (section) => section.type === "pointers"
  );

  const exclusiveFeatures = courseData.sections.find(
    (section) => section.type === "feature_explanations"
  );

  const courseDetails = courseData.sections.find(
    (section) => section.type === "about"
  );

  return (
    <main className="mb-28 md:mb-0">
      {/* Main Content Section */}
      <div
        style={{
          backgroundImage:
            'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-10"
      >
        <HeroSection
          title={courseData.title}
          description={courseData.description}
          media={courseData.media}
        />
      </div>

      {/* Mobile Price & CTA & Checklist */}
      <MobilePriceCTA ctaText={courseData.cta_text} />
      <div className="md:hidden">
        <CourseChecklist checklist={courseData.checklist} />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-[55%] lg:w-[70%]">
        {/* Instructor Details */}
        {/* @ts-ignore */}
        <CourseInstructor courseInstructor={instructor} />

        {/* Course Features */}
        {/* @ts-ignore */}
        <CourseFeatures courseFeatures={courseFeatures} />

        {/* Course Pointer */}
        {/* @ts-ignore */}
        <CoursePointer coursePointer={pointers} />

        {/* Exclusive Features */}
        {/* @ts-ignore */}
        <CourseExclusiveFeatures courseExclusiveFeatures={exclusiveFeatures} />

        {/* Course Details */}
        {/* @ts-ignore */}
        <CourseDetails courseDetails={courseDetails} />
      </div>

      {/* Right Sidebar */}
      <RightSidebar
        media={courseData.media}
        checklist={courseData.checklist}
        cta_text={courseData.cta_text}
      />
    </main>
  );
}
