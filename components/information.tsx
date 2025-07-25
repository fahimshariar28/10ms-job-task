import { Phone } from "lucide-react";
import React from "react";

const Information = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full text-sm my-4">
      <p className="text-gray-400">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
      <a
        href="tel:16910"
        className="flex items-center text-green-600 font-medium hover:underline"
      >
        <Phone className="w-4 h-4 mr-1" />
        ফোন করুন (16910)
      </a>
    </div>
  );
};

export default Information;
