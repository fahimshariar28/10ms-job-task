import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getCourseData } from "@/lib/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const courseData = await getCourseData();
  return {
    title: courseData.seo.title,
    description: courseData.seo.description,
    keywords: courseData.seo.keywords,
    openGraph: {
      title: courseData.seo.defaultMeta.find(
        (meta) => meta.value === "og:title"
      )?.content,
      description: courseData.seo.defaultMeta.find(
        (meta) => meta.value === "og:description"
      )?.content,
      images: [
        {
          url:
            courseData.seo.defaultMeta.find((meta) => meta.value === "og:image")
              ?.content ?? "",
          alt: courseData.seo.defaultMeta.find(
            (meta) => meta.value === "og:image:alt"
          )?.content,
          type: courseData.seo.defaultMeta.find(
            (meta) => meta.value === "og:image:type"
          )?.content,
        },
      ],
      locale: courseData.seo.defaultMeta.find(
        (meta) => meta.value === "og:locale"
      )?.content,
      url: courseData.seo.defaultMeta.find((meta) => meta.value === "og:url")
        ?.content,
    },
    twitter: {
      title: courseData.seo.defaultMeta.find(
        (meta) => meta.value === "og:title"
      )?.content,
      description: courseData.seo.defaultMeta.find(
        (meta) => meta.value === "og:description"
      )?.content,
      images: [
        {
          url:
            courseData.seo.defaultMeta.find((meta) => meta.value === "og:image")
              ?.content ?? "",
          alt: courseData.seo.defaultMeta.find(
            (meta) => meta.value === "og:image:alt"
          )?.content,
        },
      ],
      card: "summary_large_image",
    },
    alternates: {
      canonical:
        courseData.seo.defaultMeta.find((meta) => meta.value === "og:url")
          ?.content ?? "",
    },
    metadataBase: new URL("https://10minuteschool.com"),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
