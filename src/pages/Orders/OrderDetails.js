import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from'react-router-dom';
import useHTTP from "../../hooks/use-http";
import OrderDetailProducts from "../../Components/OrderDetailProducts";
import OrderDetailSummary from "../../Components/OrderDetailSummary";
import OrderDetailUpdates from "../../Components/OrderDetailsUpdates";
import ShipmentTrackingMap from "../../Components/ShipmentTrackingMap";

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const {isLoading, error, sendRequest: fetchOrders} = useHTTP();
  const params = useParams();

  useEffect(() => {
    const transformOrders = ordersObj => {
      for (const orderKey in ordersObj) {
        if (ordersObj[orderKey].orderId === params.orderId){
          setOrderDetails(ordersObj[orderKey]);
          break;
        }
      }
    };

    fetchOrders({url: 'https://chace-test-default-rtdb.firebaseio.com/orders.json'}, transformOrders);
  }, [fetchOrders]);
  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}
      alignItems="center"
      sx={{ padding: "50px" }}
    >
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <OrderDetailSummary {...orderDetails} />
      </Grid>
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
          <ShipmentTrackingMap title="Delivery Location" />
      </Grid>
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
          <OrderDetailProducts />
      </Grid>
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
          <OrderDetailUpdates />
      </Grid>
    </Grid>
  );
};

export default OrderDetails;
