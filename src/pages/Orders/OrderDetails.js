import { Box, Grid } from "@mui/material";
import { useState, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import useHTTP from "../../hooks/use-http";
import OrderDetailProducts from "../../Components/OrderDetailProducts";
import OrderDetailSummary from "../../Components/OrderDetailSummary";
import OrderDetailUpdates from "../../Components/OrderDetailsUpdates";
import ShipmentTrackingMap from "../../Components/ShipmentTrackingMap";
import LoadingSpinner from "../../UI/LoadingSpinner";
import AuthContext from "../../store/auth-context";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        ...sx,
      }}
      {...other}
    >
      {props.children}
    </Box>
  );
}

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
  return (
    <Fragment>
    {isLoading && <LoadingSpinner />}
    <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "50px",
          gap: "50px",
        }}
      >
      
      <Item sx={{ width: "50%"}}>
        <OrderDetailSummary {...orderDetails} />
      </Item>
      <Item sx={{ width: "50%" }}>
        <ShipmentTrackingMap title="Delivery Location" />
      </Item>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "50px",
          gap: "50px",
        }}
      >
      <Item sx={{ width: "50%" }}>
        <OrderDetailProducts />
      </Item>
      <Item sx={{ width: "50%" }}>
        <OrderDetailUpdates />
      </Item>
      </Box>
    </Fragment>
  );
};

export default OrderDetails;
