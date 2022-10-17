import { Box, Grid } from "@mui/material";
import { useState, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import useHTTP from "../../hooks/use-http";
import ProductDetailsOrders from "../../Components/ProductDetailsOrders";
import ProductDetailSummary from "../../Components/ProductDetailSummary";
import ProductHistoryLineChart from "../../Components/ProductHistoryLineChart";
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

const ProductDetails = () => {
  const productOrders = [
    {
      orderId: "O20132",
      supplierName: "Company X",
      orderCreated: "2022-07-21",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-07-23",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20114",
      supplierName: "Company X",
      orderCreated: "2022-07-25",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-07-27",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O77261",
      supplierName: "Company X",
      orderCreated: "2022-07-29",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-07-31",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20133",
      supplierName: "Company X",
      orderCreated: "2022-08-02",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-04",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20115",
      supplierName: "Company X",
      orderCreated: "2022-08-06",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-08",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O77262",
      supplierName: "Company X",
      orderCreated: "2022-08-10",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-12",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20134",
      supplierName: "Company X",
      orderCreated: "2022-08-14",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-16",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20116",
      supplierName: "Company X",
      orderCreated: "2022-08-18",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-20",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O77263",
      supplierName: "Company X",
      orderCreated: "2022-08-22",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-24",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
  ];

  const [productDetails, setProductDetails] = useState(null);
  const { isLoading, sendRequest: fetchProducts } = useHTTP();
  const params = useParams();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const transformProducts = (productsObj) => {
      for (const productKey in productsObj) {
        if (productsObj[productKey].productID === params.productId) {
          setProductDetails(productsObj[productKey]);
          break;
        }
      }
    };

    fetchProducts(
      {
        url: `${process.env.REACT_APP_CHACE_BACKEND}/api/products/`,
        headers: { Authorization: `Bearer ${authCtx.token}` },
      },
      transformProducts
    );
  }, [params.productId, fetchProducts]);

  const productHistory = productOrders.map((product) => ({
    orderCreated: product.orderCreated,
    orderArrival: product.orderArrivalDate,
    orderAmount: product.orderAmount,
  }));

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
        <Item sx={{ width: "50%" }}>
          <ProductDetailSummary {...productDetails} />
        </Item>
        <Item sx={{ width: "50%" }}>
          <ProductDetailsOrders productOrders={productOrders} />
        </Item>
      </Box>
      <Item sx={{ width: "100%" }}>
        <ProductHistoryLineChart productHistory={productHistory} />
      </Item>
    </Fragment>
  );
};

export default ProductDetails;
