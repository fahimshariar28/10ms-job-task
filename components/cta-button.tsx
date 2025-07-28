import React from "react";

type CtaButtonProps = {
  ctaText: {
    name: string;
    value: string;
  };
};

const CtaButton = (ctaText: CtaButtonProps) => {
  return (
    <div className="flex justify-center my-1 md:my-4 px-3 md:px-5 w-full">
      <button className="cursor-pointer w-full bg-green-600 text-white px-4 py-1 rounded-lg transition hover:bg-green-700 border-b-4 border-green-700">
        {ctaText.ctaText.name}
      </button>
    </div>
  );
};

export default CtaButton;
