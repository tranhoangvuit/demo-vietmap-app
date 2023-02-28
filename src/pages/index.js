import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
  const mapRef = useRef(null);

  const loadMap = () => {
    const map = new vietmapgl.Map({
      container: mapRef,
      style: "https://maps.vietmap.vn/mt/tm/style.json?apikey=demo_key",
      center: [106.69799977311857, 10.772520403841128],
      zoom: 15,
      pitch: 90,
    });
    return map;
  };

  const addMarker = (map) => {
    new vietmapgl.Marker()
      .setLngLat([106.69799977311857, 10.772520403841128])
      .addTo(map);
  };

  useEffect(() => {
    const map = loadMap();
    addMarker(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <Head>
        <script src="https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.js"></script>
        <link
          href="https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div id="root">
        <div id="map"></div>
      </div>
    </>
  );
}
