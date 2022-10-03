import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import useHTTP from "../../hooks/use-http";
import ModalWrapper from "../../UI/ModalWrapper";
import ProductsList from "./ProductsList";

const NewOrderModal = (props) => {
  const productRef = useRef("");
  const stockRef = useRef("");
  const [products, setProducts] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHTTP();

  useEffect(() => {
    const transformProducts = (productsObj) => {
      const loadedProducts = [];

      for (const productKey in productsObj) {
        loadedProducts.push({id: productsObj[productKey].productId, label: productsObj[productKey].productName});
      }

      setProductOptions(loadedProducts);
    };

    fetchProducts(
      { url: "https://chace-test-default-rtdb.firebaseio.com/products.json" },
      transformProducts
    );
  }, [fetchProducts]);

  async function addOrderHandler(order) {
    await fetch("https://chace-test-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //const data = await response.json();
    window.location.reload(true);
  }

  const addProductHandler = () => {
    const selProduct = productRef.current.value;
    let product = products.findIndex((product) => (product.label === selProduct));
    if (product !== -1) {
      setProducts((prevProducts) => {
        prevProducts[product]  = {...prevProducts[product], quantity: stockRef.current.value};
        return prevProducts;
      });
    } else {
      product = productOptions.find((product) => (product.label === selProduct));
      product = {...product, quantity: stockRef.current.value};
      setProducts((prevProducts) => {
        return [product, ...prevProducts];
      });
    }
    console.log(products[product])
  };

  const removeProductHandler = (productId) => {
    setProducts(products.filter((product) => productId !== product.id));
  };

  function submitHandler(event) {
    event.preventDefault();

    const order = {
      products: products,
    };

    addOrderHandler(order);
  }

  return (
    <ModalWrapper handleClose={props.handleClose} open={props.open}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "30px" }}>
          Add Order
        </Typography>
        <ProductsList products={products} delete={removeProductHandler} />
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}>
        <Autocomplete
          disablePortal
          id="selected-product"
          options={productOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField inputRef={productRef} {...params} />}
        />
        <TextField
          label="Quantity"
          id="product-quantity"
          inputRef={stockRef}
          sx={{ m: 1, width: "25ch" }}
        />
        <Button onClick={addProductHandler}>Add Product</Button>
        </Box>
        <Box sx={{ paddingTop: "75px", display: "flex", alignContent: "space-between" }}>
          <Button onClick={submitHandler}>Submit</Button>
          <Button onClick={props.handleClose}>Cancel</Button>
        </Box>
      </Box>
    </ModalWrapper>
  );
};

export default NewOrderModal;
