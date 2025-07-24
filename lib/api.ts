import { CourseDataType } from "../types/course";

export async function getCourseData(lang = "en"): Promise<CourseDataType> {
  const response = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: { revalidate: 3600 }, // Revalidate every 3600 seconds (1 hour)
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch course data");
  }

  const result = await response.json();
  return result.data;
}
