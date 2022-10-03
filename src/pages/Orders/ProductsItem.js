import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductItem = (props) => {
  const removeProductHandler = () => {
    props.delete(props.id);
  }

  console.log("new Quantity", props.quantity);

  return (
    <ListItem
      sx={{width:'500px'}}
      secondaryAction={
        <IconButton onClick={removeProductHandler}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={props.name} secondary={`Order Quantity: ${props.quantity}`} />
    </ListItem>
  );
};

export default ProductItem;
