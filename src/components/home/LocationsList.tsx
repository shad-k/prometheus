import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LocationListItem from "./LocationListItem";

const LocationsList: React.FC = () => {
  const { locations } = useSelector((state: RootState) => state.locations);

  return (
    <div className="w-full grid grid-flow-row gap-[60px]">
      {locations.map((location, index) => {
        return <LocationListItem key={index} location={location} />;
      })}
    </div>
  );
};

export default LocationsList;
