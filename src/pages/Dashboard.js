import { Box, Grid } from "@mui/material";
import LowStockWarnings from "../Components/LowStockWarnings";
import ShipmentTrackingMap from "../Components/ShipmentTrackingMap";
import StockBreakdown from "../Components/StockBreakdown";

function createData(id, name, current_stock, supplier_stock) {
  return { id, name, current_stock, supplier_stock };
}

const rows = [
  createData("P1281", "Product A", 4, 104),
  createData("P5511", "Product B", 9, 0),
  createData("P9182", "Product C", 13, 21),
  createData("P0012", "Product D", 21, 67),
  createData("P8814", "Product E", 22, 49),
];

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

const Dashboard = () => {
  return (
    <div sx={{width: "100%"}}>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "50px",
        gap:"50px"
      }}>
        <Item sx={{width: "50%"}}>
          <StockBreakdown
            data={rows.map((row) => ({
              name: row.name,
              value: row.current_stock,
            }))}
          />
        </Item>
        <Item sx={{width: "50%"}}>
          <ShipmentTrackingMap title="Incoming Deliveries" />
        </Item>
      </Box>

      <Item>
        <LowStockWarnings rows={rows} />
      </Item>
    </div>
  );
};

export default Dashboard;
