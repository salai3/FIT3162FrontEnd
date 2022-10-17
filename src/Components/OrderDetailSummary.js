import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";

const CardTitle = <Typography variant="p">Order Details</Typography>;

const OrderDetailSummary = (props) => {
  return (
    <Card sx={{height: "100%"}} >
      <CardHeader title={CardTitle} />
      <CardContent>
        <List dense={true}>
          <ListItem>
            <ListItemText primary={`Order ID: ${props.customerOrderID}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Order Created: ${props.dateCreated}`}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Status: ${props.orderStatus} (Arrival Date: ${props.orderArrivalDate})`}
            ></ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default OrderDetailSummary;
