import { Tag } from "lucide-react";

export default function PriceSection() {
  return (
    <div className="px-2 md:px-4 mt-1 md:mt-0 md:pt-2">
      <div className="flex items-center gap-4 mb-4">
        {/* Current Price */}
        <div className="text-2xl md:text:3xl font-semibold text-gray-900">
          ৳1000
        </div>

        {/* Original Price (crossed out) */}
        <div className="text-2xl text-black line-through">৳1500</div>

        {/* Discount Badge */}
        <div className="flex items-center bg-orange-300 text-white px-2 py-1 relative rounded-br-lg rounded-tr-lg">
          <Tag className="w-2 h-2 mr-2" />
          <span className="font-semibold">500 ৳ ছাড়</span>
          {/* Arrow pointing left */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[8px] border-t-transparent border-b-transparent border-r-orange-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
