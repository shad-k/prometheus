import React from "react";
import { useDispatch } from "react-redux";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";

import { removeLocation } from "../../store/features/locations/locationsSlice";
import { Location } from "../../types";

type LocationListItemErrorProps = {
  location: Location;
};

const LocationListItemError: React.FC<LocationListItemErrorProps> = ({
  location,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="flex items-center gap-4 py-4">
          <div className="bg-primaryBlue/15 h-20 w-20 rounded-[10px] text-primaryBlue text-xl font-medium flex items-center justify-center"></div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="h-5 text-deleteBtn rounded-sm font-bold">
              There was an error loading data for {location.lat} -{" "}
              {location.lon}
            </div>
            <div className="h-3 text-gray-500 text-sm font-medium rounded-sm capitalize"></div>
          </div>
          <div className="rounded h-10 w-[162px] flex items-center text-sm text-white overflow-hidden">
            <button
              className="h-full bg-deleteBtn hover:bg-deleteBtn/80 flex-1 flex items-center justify-center text-sm"
              onClick={() =>
                dispatch(
                  removeLocation({
                    lat: location.lat,
                    lon: location.lon,
                  }),
                )
              }
            >
              Delete
            </button>
            <button className="bg-deleteBtn hover:bg-deleteBtn/80 w-10 border-l-2 border-white h-full flex items-center justify-center text-2xl">
              <BiChevronDown />
            </button>
          </div>
        </div>
        <div className="bg-miscBg h-9 rounded-md flex items-center text-gray-500 gap-6 px-3 py-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center">
              Wind Speed
              <span className="text-gray-[#828282] ml-1.5">
                <BsArrowUpRight strokeWidth="0.5" />
              </span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationListItemError;
