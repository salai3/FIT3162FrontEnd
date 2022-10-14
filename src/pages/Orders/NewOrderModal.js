import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useRef, useState } from "react";
import useHTTP from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";
import ModalWrapper from "../../UI/ModalWrapper";
import ProductsList from "./ProductsList";

const NewOrderModal = (props) => {
  const productRef = useRef("");
  const stockRef = useRef("");
  //const [currentProduct, setCurrentProduct ] = useState('');
  const [currentStock, setCurrentStock] = useState(-1);
  const [products, setProducts] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const { sendRequest: fetchProducts } = useHTTP();
  const authCtx = useContext(AuthContext)

  //const [nameError, setNameError] = useState(null);
  const [quantityError, setQuantityError] = useState(null);

  useEffect(() => {
    const transformProducts = (productsObj) => {
      const loadedProducts = [];

      for (const productKey in productsObj) {
        loadedProducts.push({id: productsObj[productKey].productID, label: productsObj[productKey].name});
      }

      setProductOptions(loadedProducts);
    };

    fetchProducts(
      { url: "http://ec2-3-95-178-55.compute-1.amazonaws.com/api/products/",
    headers: {Authorization: `Bearer ${authCtx.token}`} },
      transformProducts
    );
  }, [fetchProducts, authCtx.token]);

  async function addOrderHandler(order) {
    console.log(order)
    await fetch("http://ec2-3-95-178-55.compute-1.amazonaws.com/api/orders/", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`
      },
    });

    //const data = await response.json();
    window.location.reload(true);
  }

  const addProductHandler = () => {
    const selProduct = productRef.current.value;

    //setNameError(currentProduct.trim().length < 1);
    setQuantityError(currentStock.trim().length < 1 || parseInt(currentStock) < 0);

    if (quantityError || quantityError == null) {
      return;
    }

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
          renderInput={(params) => <TextField label="Product" inputRef={productRef} {...params} />}
        />
        <TextField
          error={quantityError}
          label="Quantity"
          id="product-quantity"
          inputRef={stockRef}
          onChange={(e) => {setCurrentStock(e.target.value)}}
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
