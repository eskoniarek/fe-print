"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map () {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly',
                libraries: ["places"]
            });


            const {Map} = await loader.importLibrary('maps'); // Access the google object after the library is loaded

            const position = {
                lat: 51.5145,
                lng: 0.1118 
            };

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 14,
                mapId: "DEMO_MAP_ID"
            };

            const map = new Map(mapRef.current!, mapOptions);

            new google.maps.Marker({
                map: map,
                position: position
            });
        };

        initMap();
    }, []);

    return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

