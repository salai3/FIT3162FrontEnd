import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import { useReducer, useEffect, useState, useContext } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InventoryTable from "../../Components/InventoryTable";
import LoadingSpinner from "../../UI/LoadingSpinner";
import useHTTP from "../../hooks/use-http";
import NewProductModal from "./NewProductModal";
import AuthContext from "../../store/auth-context";

const CardTitle = <Typography variant="h5">Product Inventory</Typography>;

const FilterQueryComponent = (props) => {
  return (
    <Grid container paddingBottom={2} spacing={2}>
      <Grid item>
        <TextField
          id="productId"
          label="Product ID"
          value={props.queryState.id}
          type="search"
          onChange={(e) => {
            props.dispatchQuery({ type: "id", value: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="productName"
          label="Product Name"
          value={props.queryState.name}
          type="search"
          onChange={(e) => {
            props.dispatchQuery({ type: "name", value: e.target.value });
          }}
        />
      </Grid>
    </Grid>
  );
};

const InventoryPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const { isLoading, sendRequest: fetchProducts } = useHTTP();
  const authCtx = useContext(AuthContext);

  //Modal Button State
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        url: "http://ec2-3-95-178-55.compute-1.amazonaws.com/api/products/",
        headers: { Authorization: `Bearer ${authCtx.token}` },
      },
      transformProducts
    );
  }, [fetchProducts, authCtx.token]);

  useEffect(() => {
    setFilteredRows(products);
  }, [products, setFilteredRows]);

  const initialQueryState = {
    id: "",
    name: "",
  };
  const queryReducer = (state, action) => {
    switch (action.type) {
      case "id":
        return { ...state, id: action.value };
      case "name":
        return { ...state, name: action.value };
      default:
        return state;
    }
  };
  const [queryState, dispatchQuery] = useReducer(
    queryReducer,
    initialQueryState
  );

  useEffect(() => {
    const updatedRows = products.filter((product) => {
      return (
        (queryState.id.trim().length === 0 ||
          product.productID.includes(queryState.id)) &&
        (queryState.name.trim().length === 0 ||
          product.name.toLowerCase().includes(queryState.name.toLowerCase()))
      );
    });
    setFilteredRows(updatedRows);
  }, [products, queryState]);

  return (
    <Container fluid="true" sx={{ padding: "50px" }}>
      {isLoading && <LoadingSpinner />}
      <Card>
        <CardHeader title={CardTitle} />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FilterQueryComponent
              queryState={queryState}
              dispatchQuery={dispatchQuery}
            />
            <Button onClick={handleOpen}>
              <AddCircleIcon />
            </Button>
            <NewProductModal handleClose={handleClose} open={open} />
          </Box>

          <InventoryTable rows={filteredRows} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default InventoryPage;
