import { Button, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import ModalWrapper from "../../UI/ModalWrapper";

const NewOrderModal = (props) => {
  const idRef = useRef("");
  // const nameRef = useRef("");
  // const stockRef = useRef("");
  // const stockOrderRef = useRef("");

  async function addOrderHandler(order) {
    const response = await fetch(
      "https://chace-test-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    window.location.reload(true);
  }

  function submitHandler(event) {
    event.preventDefault();

    const order = {
      orderId: idRef.current.value
    };

    addOrderHandler(order);
    
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
          Add Order
        </Typography>
        <InputLabel htmlFor="order_id">Order ID</InputLabel>
          <OutlinedInput
            required
            id="order_id"
            inputRef={idRef}
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

export default NewOrderModal;
