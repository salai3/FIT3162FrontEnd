import { Button, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";
import ModalWrapper from "../../UI/ModalWrapper";

const NewSupplierModal = (props) => {
  const nameRef = useRef("");
  const authCtx = useContext(AuthContext);

  async function addSupplierHandler(supplier) {
    const response = await fetch(
      `${process.env.REACT_APP_CHACE_BACKEND}/api/add_supplier/`,
      {
        method: "POST",
        body: JSON.stringify(supplier),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token}`
        },
      }
    );

    const data = await response.json();
    console.log(data);
    window.location.reload(true);
  }

  function submitHandler(event) {
    event.preventDefault();

    const supplier = {
      supplierName: nameRef.current.value,
      phone: "",
      address: ""
    };

    addSupplierHandler(supplier);
    
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
