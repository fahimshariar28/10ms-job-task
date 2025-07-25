"use client";
import { useState, useEffect, useRef } from "react";
import PriceSection from "./price-section";
import CtaButton from "./cta-button";

type MobilePriceCTAProps = {
  ctaText: {
    name: string;
    value: string;
  };
};

export default function MobilePriceCTA({ ctaText }: MobilePriceCTAProps) {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isScrolledPast = rect.top <= 0;
        setIsSticky(isScrolledPast);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className={`md:hidden bg-white border-t border-gray-200 transition-opacity duration-300 ${
          isSticky ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="px-4 py-4">
          {/* Price Section */}
          <PriceSection />

          {/* CTA Button */}
          <CtaButton ctaText={ctaText} />
        </div>
      </div>

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 transition-transform duration-300 z-50 ${
          isSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="px-4 py-2 shadow-t-lg">
          <div>
            {/* Price Section */}
            <PriceSection />

            {/* CTA Button */}
            <CtaButton ctaText={ctaText} />
          </div>
        </div>
      </div>
    </>
  );
}
