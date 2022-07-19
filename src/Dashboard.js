import { Grid } from "@mui/material";
import StockBreakdown from "./Components/StockBreakdown";


const Dashboard = () => {
    return(
        <Grid container spacing={2} sx={{justifyContent: "center", paddingTop: "50px"}}>
            <Grid item>
            <StockBreakdown/>
            </Grid>
        </Grid>
    );
}

export default Dashboard;