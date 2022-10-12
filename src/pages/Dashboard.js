import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import LowStockWarnings from "../Components/LowStockWarnings";
import ShipmentTrackingMap from "../Components/ShipmentTrackingMap";
import StockBreakdown from "../Components/StockBreakdown";
import useHTTP from "../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";

function createData(id, name, current_stock, supplier_stock) {
  return { id, name, current_stock, supplier_stock };
}

// const rows = [
//   createData("P1281", "Product A", 4, 104),
//   createData("P5511", "Product B", 9, 0),
//   createData("P9182", "Product C", 13, 21),
//   createData("P0012", "Product D", 21, 67),
//   createData("P8814", "Product E", 22, 49),
// ];

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
  const [products, setProducts] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHTTP();

  useEffect(() => {
    const transformProducts = (productsObj) => {
      const loadedProducts = [];

      for (const productKey in productsObj) {
        console.log(productsObj[productKey]);
        loadedProducts.push(productsObj[productKey]);
      }

      setProducts(loadedProducts);
    };

    fetchProducts(
      { url: "https://chace-test-default-rtdb.firebaseio.com/products.json" },
      transformProducts
    );
  }, [fetchProducts]);

  return (
    <div sx={{width: "100%"}}>
      {isLoading && <LoadingSpinner />}
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "50px",
        gap:"50px"
      }}>
        <Item sx={{width: "50%"}}>
          <StockBreakdown
            data={products.map((product) => ({
              name: product.name,
              value: product['current_stock'],
            }))}
          />
        </Item>
        <Item sx={{width: "50%"}}>
          <ShipmentTrackingMap title="Incoming Deliveries" />
        </Item>
      </Box>

      <Item>
        <LowStockWarnings products={products} />
      </Item>
    </div>
  );
};

export default Dashboard;
