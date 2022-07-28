import { Grid } from "@mui/material";
import OrderDetailProducts from "../Components/OrderDetailProducts";
import OrderDetailSummary from "../Components/OrderDetailSummary";
import OrderDetailUpdates from "../Components/OrderDetailsUpdates";
import ShipmentTrackingMap from "../Components/ShipmentTrackingMap";

const orderDetails = {
  orderId: "O20114",
  supplierName: "Company X",
  orderCreated: "2022-07-18",
  orderStatus: "In Progress",
  orderArrivalDate: "2022-07-23",
};

const OrderDetails = () => {
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
