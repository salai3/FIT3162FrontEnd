import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";

const LowStockWarnings = (props) => {
  const CardTitle = <Typography variant="p">Low Stock Availibility</Typography>;
  return(
  <Card>
    <CardHeader title={CardTitle} />
    <CardContent>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Low Stock Table">
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Remaining Stock</TableCell>
              <TableCell align="right">Supplier Stock Available</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.products.map((product) => (
              <TableRow
                key={product.productID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.productID}
                </TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.stockAmount}</TableCell>
                <TableCell align="right">{product.pendingStock}</TableCell>
                <TableCell align="right"><Link to={`/products/${product.productID}`}><MoreHorizIcon /></Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>);
};

export default LowStockWarnings;
