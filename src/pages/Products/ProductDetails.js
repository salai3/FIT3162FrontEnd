import { Grid } from "@mui/material";
import ProductDetailsOrders from "../../Components/ProductDetailsOrders";
import ProductDetailSummary from "../../Components/ProductDetailSummary";

const productDetails = {
  productId: "P20114",
  productName: "Product X",
  productStock: 12,
  productStockOnOrder: 24,
};

const productOrders = [
  {
    orderId: "O20132",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
  {
    orderId: "O20114",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
  {
    orderId: "O77261",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
  {
    orderId: "O20133",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
  {
    orderId: "O20115",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
  {
    orderId: "O77262",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
  {
    orderId: "O20134",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
  {
    orderId: "O20116",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
  {
    orderId: "O77263",
    supplierName: "Company X",
    orderCreated: "2022-07-18",
    orderStatus: "In Progress",
    orderArrivalDate: "2022-07-23",
    orderAmount: 12,
  },
];

const ProductDetails = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}
      alignItems="center"
      sx={{ padding: "50px" }}
    >
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <ProductDetailSummary {...productDetails} />
      </Grid>
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <ProductDetailsOrders productOrders={productOrders} />
      </Grid>
      <Grid item align="center" xs={12} sm={12} md={12} lg={12} xl={12}>
        {/**Implement Product Stock Level Graph */}
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
