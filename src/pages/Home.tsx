import React from "react";
import LocationsList from "../components/home/LocationsList";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full mx-auto py-6 px-[60px] flex flex-col">
      <LocationsList />
      <Link
        to="/addLocation"
        className="px-4 py-2 text-sm font-semibold text-primaryBlue border border-primaryBlue rounded-md mt-[60px] mx-auto w-[400px] text-center hover:bg-primaryBlue hover:text-white"
      >
        Add new location
      </Link>
    </div>
  );
};

export default Home;
