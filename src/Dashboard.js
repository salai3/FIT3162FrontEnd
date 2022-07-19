import { Grid } from "@mui/material";
import ShipmentTrackingMap from "./Components/ShipmentTrackingMap";
import StockBreakdown from "./Components/StockBreakdown";


const Dashboard = () => {
    return(
        <Grid container spacing={2} sx={{justifyContent: "center", paddingTop: "50px"}}>
            <Grid item>
            <StockBreakdown/>
            </Grid>
            <Grid item>
            <ShipmentTrackingMap/>
            </Grid>
        </Grid>
    );
}

export default Dashboard;