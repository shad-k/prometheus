import React from "react";
import { BiChevronDown } from "react-icons/bi";

const LocationListItemSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-4 py-4">
        <div className="bg-primaryBlue/15 h-20 w-20 rounded-[10px]"></div>
        <div className="flex flex-col flex-1 gap-3">
          <div className="h-5 bg-gray-500/30 rounded-sm"></div>
          <div className="h-3 bg-gray-500/30 rounded-sm"></div>
        </div>
        <button
          disabled
          className="rounded h-10 w-[162px] flex items-center text-sm text-white overflow-hidden"
        >
          <div className="h-full bg-deleteBtn hover:bg-deleteBtn/80 flex-1 flex items-center justify-center text-sm">
            Delete
          </div>
          <div className="bg-deleteBtn hover:bg-deleteBtn/80 w-10 border-l-2 border-white h-full flex items-center justify-center text-2xl">
            <BiChevronDown />
          </div>
        </button>
      </div>
      <div className="bg-miscBg h-9 rounded-md"></div>
    </div>
  );
};

export default LocationListItemSkeleton;
