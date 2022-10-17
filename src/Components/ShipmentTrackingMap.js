import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { memo } from "react";

const mapStyles = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -37.915,
  lng: 145.136,
};

const ShipmentTrackingMap = (props) => {
  const CardTitle = <Typography variant="p">{props.title}</Typography>;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyByItgBNRTmnQOrfvnnUKguMuoVEt8U5tI",
  });

  if (!isLoaded) return <div>Loading...</div>;
  console.log("test");

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader title={CardTitle} />
      <CardContent>
        <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={15}>
          <MarkerF position={center} />
        </GoogleMap>
      </CardContent>
    </Card>
  );
};

export default memo(ShipmentTrackingMap);
