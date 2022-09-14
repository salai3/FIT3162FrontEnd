import { Button, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import useHTTP from "../../hooks/use-http";
import ModalWrapper from "../../UI/ModalWrapper";

const NewProductModal = (props) => {
  const { isLoading, error, sendRequest: fetchProducts } = useHTTP();
  const idRef = useRef("");
  const nameRef = useRef("");
  const stockRef = useRef("");
  const stockOrderRef = useRef("");

  async function addProductHandler(product) {
    console.log("addProductHandler")
    console.log(product)
    const response = await fetch(
      "https://chace-test-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    window.location.reload(true);
  }

  function submitHandler(event) {
    event.preventDefault();

    const product = {
      productId: idRef.current.value,
      productName: nameRef.current.value,
      productQuantity: stockRef.current.value,
      productQuantityOnOrder: stockOrderRef.current.value,
    };

    addProductHandler(product);
    
  }

  return (
    <ModalWrapper handleClose={props.handleClose} open={props.open}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "30px" }}>
          Add Product
        </Typography>
        <InputLabel htmlFor="product_id">Product ID</InputLabel>
          <OutlinedInput
            required
            id="product_id"
            inputRef={idRef}
            sx={{ width: "75%", marginBottom: "30px" }}
          />
          <InputLabel htmlFor="product_name">Product Name</InputLabel>
          <OutlinedInput
            required
            id="product_name"
            inputRef={nameRef}
            sx={{ width: "75%", marginBottom: "30px" }}
          />
          <InputLabel htmlFor="product_name">Stock Count</InputLabel>
          <OutlinedInput
            required
            id="product_count"
            type="number"
            inputRef={stockRef}
            sx={{ width: "75%", marginBottom: "30px" }}
          />
          <InputLabel htmlFor="product_quantity_on_order">Stock On Order</InputLabel>
          <OutlinedInput
            required
            id="product_quantity_on_order"
            type="number"
            inputRef={stockOrderRef}
            sx={{ width: "75%", marginBottom: "30px" }}
          />
          <Box sx={{ display: "flex", alignContent: "space-between" }}>
            <Button onClick={submitHandler}>Submit</Button>
            <Button onClick={props.handleClose}>Cancel</Button>
          </Box>
      </Box>
    </ModalWrapper>
  );
};

export default NewProductModal;
