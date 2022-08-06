import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useReducer, useEffect, useState } from "react";
import InventoryTable from "../../Components/InventoryTable";
import useHTTP from "../../hooks/use-http";

const CardTitle = <Typography variant="h5">Product Inventory</Typography>;

/*Table Data */
function createData(
  productId,
  productName,
  productQuantity,
  productQuantityOnOrder
) {
  return {
    productId,
    productName,
    productQuantity,
    productQuantityOnOrder,
  };
}

const rows = [
  createData("P1234", "Product A", 23, 5),
  createData("P5523", "Product B", 122, 0),
  createData("P9911", "Product C", 56, 15),
  createData("P9233", "Product D", 24, 12),
  createData("P1100", "Product E", 14, 0),
  createData("P9162", "Product F", 23, 12),
  createData("P5542", "Product G", 50, 25),
  createData("P0122", "Product H", 10, 0),
  createData("P8927", "Product I", 11, 0),
  createData("P0128", "Product J", 12, 12),
];

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
  const {isLoading, error, sendRequest: fetchProducts} = useHTTP();

  useEffect(() => {
    const transformProducts = productsObj => {
      const loadedProducts = [];
  
      for (const productKey in productsObj) {
        console.log(productsObj[productKey]);
        loadedProducts.push(productsObj[productKey]);
      }
  
      setProducts(loadedProducts);
    };

    fetchProducts({url: 'https://chace-test-default-rtdb.firebaseio.com/products.json'}, transformProducts);
  }, [fetchProducts]);

  useEffect(() => {
    setFilteredRows(products);
  }, [products]);

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
    const updatedRows = products.filter((row) => {
      return (
        (queryState.id.trim().length === 0 ||
          row.productId.includes(queryState.id)) &&
        (queryState.name.trim().length === 0 ||
          row.productName.toLowerCase().includes(queryState.name.toLowerCase()))
      );
    });
    setFilteredRows(updatedRows);
  }, [queryState]);

  return (
    <Container fluid="true" sx={{ padding: "50px" }}>
      <Card>
        <CardHeader title={CardTitle} />
        <CardContent>
          <FilterQueryComponent
            queryState={queryState}
            dispatchQuery={dispatchQuery}
          />
          <InventoryTable rows={filteredRows}/>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InventoryPage;
