import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.4268261,
    lng: -99.1718796,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDFGi4NLju7CYEXssqppRKI1aePKo8MAMk">
      <GoogleMap MapContainerStyle={mapStyle} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
