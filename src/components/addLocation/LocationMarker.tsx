import React, { useState } from "react";
import L from "leaflet";
import { useDispatch } from "react-redux";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { addLocation } from "../../store/features/locations/locationsSlice";

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

const LocationMarker: React.FC = () => {
  const [position, setPosition] = useState<L.LatLngLiteral>();
  const dispatch = useDispatch();

  useMapEvents({
    click(event) {
      if (
        ["locate-me-btn", "remove-btn", "add-btn"].includes(
          (event.originalEvent.target as HTMLElement)?.id,
        )
      )
        return;

      setPosition(event.latlng);
    },
  });

  const add = (position: L.LatLngLiteral) => {
    dispatch(
      addLocation({
        location: {
          lat: position.lat,
          lon: position.lng,
        },
      }),
    );
    setPosition(undefined);
  };

  return (
    <div>
      {!position ? null : (
        <Marker
          position={position as L.LatLngExpression}
          icon={icon}
          ref={(elem) => elem?.openPopup()}
        >
          <Popup>
            <div className="flex flex-col mb-8">
              <span>Lat: {position.lat}</span>
              <span>Lon: {position.lng}</span>
            </div>
            <button
              className="w-full h-full top-1 left-0 bg-primaryBlue text-white rounded-md px-2 py-1 z-[500]"
              onClick={() => add(position)}
              id="add-btn"
            >
              + Add Location
            </button>
          </Popup>
        </Marker>
      )}
    </div>
  );
};

export default LocationMarker;
