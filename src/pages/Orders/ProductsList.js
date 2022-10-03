import { List } from "@mui/material";
import ProductItem from "./ProductsItem";

const ProductsList = (props) => {
  console.log(props.products)
  return (
    <List>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.label}
          quantity={product.quantity}
          delete={props.delete}
        />
      ))}
    </List>
  );
};

export default ProductsList;