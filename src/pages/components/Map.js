import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`;

const Map = () => {
  useEffect(() => {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);
  return <Wrapper id='map'></Wrapper>;
};

const Wrapper = tw.div`
    flex-1 bg-red-500
`;

export default Map;
