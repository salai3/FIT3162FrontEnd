import { Grid } from "@mui/material";
import LowStockWarnings from "./Components/LowStockWarnings";
import ShipmentTrackingMap from "./Components/ShipmentTrackingMap";
import StockBreakdown from "./Components/StockBreakdown";

const Dashboard = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={10}
      alignItems="center"
      sx={{ padding: "50px" }}
    >
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <StockBreakdown />
      </Grid>
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <ShipmentTrackingMap />
      </Grid>
      <Grid item align="center" xs={12} sm={12} md={12} lg={12} xl={12}>
        <LowStockWarnings />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
