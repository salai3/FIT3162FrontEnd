import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import LowStockWarnings from "../Components/LowStockWarnings";
import ShipmentTrackingMap from "../Components/ShipmentTrackingMap";
import StockBreakdown from "../Components/StockBreakdown";
import useHTTP from "../hooks/use-http";
import AuthContext from "../store/auth-context";
import LoadingSpinner from "../UI/LoadingSpinner";

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
  const { isLoading, sendRequest: fetchProducts } = useHTTP();
  const authCtx = useContext(AuthContext);
  console.log(authCtx.token)

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
      {
        url: "http://ec2-3-95-178-55.compute-1.amazonaws.com/api/low_stock/",
        headers: { Authorization: `Bearer ${authCtx.token}` },
      },
      transformProducts
    );
  }, [fetchProducts, authCtx.token]);

  return (
    <div sx={{ width: "100%" }}>
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
        <Item sx={{ width: "50%" }}>
          <StockBreakdown
            data={products.map((product) => ({
              name: product.name,
              value: product.stockAmount,
            }))}
          />
        </Item>
        <Item sx={{ width: "50%" }}>
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
