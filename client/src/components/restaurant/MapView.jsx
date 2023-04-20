import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import {MdOutlineDirections} from "react-icons/md";
import {IoMdCopy} from "react-icons/io";

const Mapview = (props) => {
  return (
    <>
        <div>
            <h4 className="text-xl font-medium">Call</h4>
            <h5 className='text-zomato-500 text-xl'>+{props.phno}</h5>
        </div>
        <div>
            <h4 className="text-xl font-medium mt-4">Direction</h4>
            <div className='w-full h-56'>
                <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={props.mapLocation}>
                        <Popup>
                            {props.title}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <p className='text-xl mt-4'>
                {props.address}
            </p>
            <div className='flex items-center gap-4 mt-4'>
                <button className='flex items-center gap-1 text-lg rounded-lg border border-gray-400 px-3 py-1'>
                    <IoMdCopy /> Copy
                </button>
                <button className='flex items-center gap-1 text-lg rounded-lg border border-gray-400 px-3 py-1'>
                    <span className='text-zomato-400'><MdOutlineDirections /></span> Direction
                </button>
            </div>
        </div>
    </>
  )
}

export default Mapview;