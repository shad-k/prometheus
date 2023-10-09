import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import LocateMeButton from "./LocateMeButton";
import LocationMarker from "./LocationMarker";
import StoredLocationMarkers from "./StoredLocationMarkers";

const MapComponent: React.FC = () => {
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

        <LocateMeButton />

        <StoredLocationMarkers />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
