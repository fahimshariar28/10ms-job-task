"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
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
    <div className="w-screen px-5 md:p-2 md:w-sm mt-2 md:mt-0">
      <div>
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
                  className="w-fit h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Media gallery grid */}
      <div className="grid grid-cols-6 gap-4 mt-6 mx-4">
        {previewGalleryItems.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer hover:shadow-md transition-all duration-200 overflow-hidden group text-card-foreground shadow-sm ${
              selectedMedia.resource_value === item.resource_value
                ? "ring-2 ring-blue-500 shadow-lg"
                : ""
            }`}
            onClick={() => handleMediaClick(item)}
          >
            <div className="p-0 relative">
              <div className="relative h-6 w-full">
                <Image
                  src={getImageSrc(item)}
                  alt={`${item.name} ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {item.resource_type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-2">
                      <Play className="w-1 h-1 fill-green-600 text-green-600" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
