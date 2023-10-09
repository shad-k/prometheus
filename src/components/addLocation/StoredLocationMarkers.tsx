import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Marker, Popup } from "react-leaflet";
import iconMarker from "../../assets/marker-green.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

import { RootState } from "../../store";
import { removeLocation } from "../../store/features/locations/locationsSlice";

const icon = L.icon({
  iconRetinaUrl: iconMarker,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

const StoredLocationMarkers: React.FC = () => {
  const { locations } = useSelector((state: RootState) => state.locations);
  const dispatch = useDispatch();

  return (
    <div>
      {locations.map((location) => (
        <Marker
          key={`${location.lat}-${location.lon}`}
          position={[location.lat, location.lon]}
          icon={icon}
        >
          <Popup>
            <div className="flex flex-col mb-8">
              <span>Lat: {location.lat}</span>
              <span>Lon: {location.lon}</span>
            </div>
            <button
              className="w-full h-full top-1 left-0 bg-deleteBtn text-white rounded-md px-2 py-1 z-[500]"
              onClick={() =>
                dispatch(
                  removeLocation({
                    lat: location.lat,
                    lon: location.lon,
                  }),
                )
              }
              id="remove-btn"
            >
              Remove Location
            </button>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default StoredLocationMarkers;
