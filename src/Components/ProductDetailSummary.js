import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";

const CardTitle = <Typography variant="p">Product Details</Typography>;

const ProductDetailSummary = (props) => {
  return (
    <Card sx={{height:"100%"}}>
      <CardHeader title={CardTitle} />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary={`Product ID: ${props.productID}`}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Product Name: ${props.name}`}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Current Stock: ${props.stockAmount}`}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Stock On Order: ${props.pendingStock}`}
            ></ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ProductDetailSummary;
