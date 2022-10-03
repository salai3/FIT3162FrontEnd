import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { memo, useCallback, useState } from "react";

const mapStyles = {
  width: '90%',
  height: '400px'
};

const center = {
  lat: -37.91506132699068,
  lng: 145.1368336289172,
};

const ShipmentTrackingMap = (props) => {
  const CardTitle = <Typography variant="p">{props.title}</Typography>;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyByItgBNRTmnQOrfvnnUKguMuoVEt8U5tI"
  });

  if (!isLoaded) return <div>Loading...</div>
  console.log("test")

  return (
    <Card sx={{height: "100%"}}>
      <CardHeader title={CardTitle} />
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={center}
        zoom={15}
      >
        <Marker {...center} />
      </GoogleMap>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          Current Status: In Transit
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: -37.815018, 144.946014
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estimated Arrival: 20/07/2022
        </Typography>
      </CardContent>
    </Card>
  );
};


export default memo(ShipmentTrackingMap);