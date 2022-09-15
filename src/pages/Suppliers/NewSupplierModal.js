import { Button, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import ModalWrapper from "../../UI/ModalWrapper";

const NewSupplierModal = (props) => {
  const nameRef = useRef("");

  async function addProductHandler(product) {
    console.log("addProductHandler")
    console.log(product)
    const response = await fetch(
      "https://chace-test-default-rtdb.firebaseio.com/suppliers.json",
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
      productName: nameRef.current.value
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
          Add Supplier
        </Typography>
        <InputLabel htmlFor="supplier_name">Supplier Name</InputLabel>
          <OutlinedInput
            required
            id="supplier_name"
            inputRef={nameRef}
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

export default NewSupplierModal;
