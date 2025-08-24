import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapComponent = ({onClose, google, locations }) => {
  const mapStyles = {
    height: '80%',
    width: '95%',
    marginTop: '8px'
  };

  const defaultCenter = {
    lat: locations[0].lat,
    lng: locations[0].lng,
  };

  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black rounded h-[80%] w-[90%] p-10">
        <button onClick={onClose} className='border border-gray-500 text-gray-500 px-3 py-1 rounded-lg'> X </button>
            <Map
        google={google}
        zoom={13}
        style={mapStyles}
        initialCenter={defaultCenter}
        >
        {locations.map((location, index) => (
            <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
        ))}
        </Map>            
        </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBv_iPnq5AaNhYzacndg_C9NgObIx-jiNU',
})(MapComponent);
