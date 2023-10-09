import React, { useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

function LocationMarker() {
  const [position, setPosition] = useState<L.LatLngLiteral>();

  const map = useMapEvents({
    click(e) {
      console.log(e);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <div>
      {!position ? null : (
        <Marker position={position as L.LatLngExpression} icon={icon}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      <button
        onClick={() => map.locate()}
        className="absolute top-0 right-0 bg-primaryBlue px-2 py-1 text-xl text-white hover:bg-white hover:text-primaryBlue backdrop-blur-xl z-[500]"
      >
        Locate Me
      </button>
    </div>
  );
}

const MapComponent = () => {
  return (
    <div className="map-container h-full">
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="h-full"
        />
        <LocationMarker />
      </MapContainer>
      {/* {selectedLocation && (
        <div className="location-details">
          <h2>Location Details</h2>
          <p>Latitude: {selectedLocation.lat}</p>
          <p>Longitude: {selectedLocation.lng}</p>
          <button onClick={handleAddLocation}>Add Location</button>
        </div>
      )} */}
    </div>
  );
};

export default MapComponent;
