import { Button, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useRef, useState } from "react";
import ModalWrapper from "../../UI/ModalWrapper";
import AuthContext from "../../store/auth-context";

const NewProductModal = (props) => {
  const nameRef = useRef("");
  const stockRef = useRef("");

  const [nameError, setNameError] = useState(null);
  const [quantityError, setQuantityError] = useState(null);
  const authCtx = useContext(AuthContext);

  async function addProductHandler(product) {
    await fetch(
      "http://ec2-3-95-178-55.compute-1.amazonaws.com/api/add_products/",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token}`
        },
      }
    );

    //const data = await response.json();
    //console.log(data);
    window.location.reload(true);
  }

  function submitHandler(event) {
    event.preventDefault();

    setNameError(nameRef.current.value.trim().length < 1);
    setQuantityError(stockRef.current.value.trim().length < 1 || parseInt(stockRef.current.value) < 0);

    console.log(nameError)
    console.log(quantityError)

    if (nameError || nameError == null || quantityError || quantityError == null) {
      return;
    } else {
      const product = {
        name: nameRef.current.value,
        stockAmount: stockRef.current.value,
        pendingStock: 0
      };
  
      addProductHandler(product);
    }
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
          <InputLabel htmlFor="product_name">Product Name</InputLabel>
          <OutlinedInput
            error={nameError}
            id="product_name"
            inputRef={nameRef}
            sx={{ width: "90%", marginBottom: "30px" }}
          />
          <InputLabel htmlFor="product_name">Stock Count</InputLabel>
          <OutlinedInput
            error={nameError}
            id="product_count"
            type="number"
            inputRef={stockRef}
            sx={{ width: "90%", marginBottom: "30px" }}
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
