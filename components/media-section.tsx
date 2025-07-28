"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { Medium } from "@/types/course";

export default function MediaSection({ media }: { media: Medium[] }) {
  const previewGalleryItems = media.filter(
    (item) => item.name === "preview_gallery"
  );

  const [selectedMedia, setSelectedMedia] = useState<Medium>(
    previewGalleryItems[0] || media[0]
  );
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleMediaClick = (item: Medium) => {
    setSelectedMedia(item);
    setIsVideoPlaying(false);
  };

  const handleLeftArrowClick = () => {
    const currentIndex = previewGalleryItems.findIndex(
      (item) => item.resource_value === selectedMedia.resource_value
    );
    if (currentIndex > 0) {
      setSelectedMedia(previewGalleryItems[currentIndex - 1]);
      setIsVideoPlaying(false);
    }
  };

  const handleRightArrowClick = () => {
    const currentIndex = previewGalleryItems.findIndex(
      (item) => item.resource_value === selectedMedia.resource_value
    );
    if (currentIndex < previewGalleryItems.length - 1) {
      setSelectedMedia(previewGalleryItems[currentIndex + 1]);
      setIsVideoPlaying(false);
    }
  };

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const getImageSrc = (item: Medium) => {
    if (item.resource_type === "image") {
      return item.resource_value;
    }
    return (
      item.thumbnail_url ||
      `/placeholder.svg?height=200&width=300&text=${item.name}`
    );
  };

  const mainThumbnail =
    selectedMedia.thumbnail_url ||
    `https://img.youtube.com/vi/${selectedMedia.resource_value}/hqdefault.jpg`;

  return (
    <div className="px-5 md:p-2 w-screen md:w-xs lg:w-sm mt-2 md:mt-0">
      <div className="relative">
        {/* Main Preview Section */}
        <div className="overflow-hidden text-card-foreground shadow-sm">
          <div className="p-0">
            <div className="relative w-full h-52">
              {selectedMedia.resource_type === "video" ? (
                !isVideoPlaying ? (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <Image
                      src={mainThumbnail}
                      alt={`${selectedMedia.name} thumbnail`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition">
                      <div className="bg-white p-4 rounded-full border-2 border-white/80">
                        <Play className="w-4 h-4 fill-green-600 text-green-600" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={getYouTubeEmbedUrl(selectedMedia.resource_value)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )
              ) : (
                <Image
                  src={selectedMedia.resource_value}
                  alt={`${selectedMedia.name} thumbnail`}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={handleLeftArrowClick}
          disabled={
            previewGalleryItems.findIndex(
              (item) => item.resource_value === selectedMedia.resource_value
            ) === 0
          }
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white disabled:opacity-60"
        >
          <ArrowLeft className="w-3 h-3 text-gray-700" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleRightArrowClick}
          disabled={
            previewGalleryItems.findIndex(
              (item) => item.resource_value === selectedMedia.resource_value
            ) ===
            previewGalleryItems.length - 1
          }
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white disabled:opacity-60"
        >
          <ArrowRight className="w-3 h-3 text-gray-700" />
        </button>
      </div>

      {/* Media gallery */}
      <div className="flex gap-4 mt-6 overflow-x-auto scrollbar-hide scroll-smooth">
        {previewGalleryItems.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-14 h-8 relative cursor-pointer hover:shadow-md transition-all duration-200 group text-card-foreground ${
              selectedMedia.resource_value === item.resource_value
                ? "border-1 border-green-600"
                : ""
            }`}
            onClick={() => handleMediaClick(item)}
          >
            <Image
              src={getImageSrc(item)}
              alt={`${item.name} ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
            {item.resource_type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-1">
                  <Play className="w-2 h-2 fill-green-600 text-green-600" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
