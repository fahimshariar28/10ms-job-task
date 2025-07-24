import CourseChecklist from "@/components/course-checklist";
import HeroSection from "@/components/hero-section";
import MobilePriceCTA from "@/components/mobile-price-cta";
import { getCourseData } from "@/lib/api";

export default async function Home() {
  const courseData = await getCourseData();

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
    </main>
  );
}
