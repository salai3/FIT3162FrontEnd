import { Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import useHTTP from "../../hooks/use-http";
import OrderDetailProducts from "../../Components/OrderDetailProducts";
import OrderDetailSummary from "../../Components/OrderDetailSummary";
import OrderDetailUpdates from "../../Components/OrderDetailsUpdates";
import ShipmentTrackingMap from "../../Components/ShipmentTrackingMap";
import LoadingSpinner from "../../UI/LoadingSpinner";
import AuthContext from "../../store/auth-context";

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const { isLoading, sendRequest: fetchOrders } = useHTTP();
  const params = useParams();
  const authCtx = useContext(AuthContext)

  useEffect(() => {
    const transformOrders = (ordersObj) => {
      for (const orderKey in ordersObj) {
        if (ordersObj[orderKey].customerOrderID === params.orderId) {
          setOrderDetails(ordersObj[orderKey]);
          break;
        }
      }
    };

    fetchOrders(
      {
        url: `${process.env.REACT_APP_CHACE_BACKEND}/api/all_order/`,
        headers: { Authorization: `Bearer ${authCtx.token}` },
      },
      transformOrders
    );
  }, [fetchOrders, params.orderId]);

  console.log(orderDetails);
  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}
      alignItems="center"
      sx={{ padding: "50px" }}
    >
      {isLoading && <LoadingSpinner />}
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
