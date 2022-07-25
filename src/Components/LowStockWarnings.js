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

function createData(id, name, current_stock, supplier_stock, action) {
    return {id, name, current_stock, supplier_stock, action};
}

const rows = [
  createData("P1281", "Product A", 4, 104, "ACTION_BTN"),
  createData("P5511", "Product B", 9, 0, "ACTION_BTN"),
  createData("P9182", "Product C", 13, 21, "ACTION_BTN"),
  createData("P0012", "Product D", 21, 67, "ACTION_BTN"),
  createData("P8814", "Product E", 22, 49, "ACTION_BTN"),
];

const LowStockWarnings = () => {
  const CardTitle = <Typography variant="p">Low Stock Availibility</Typography>;
  return(
  <Card sx={{ height: 400 }}>
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
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.current_stock}</TableCell>
                <TableCell align="right">{row.supplier_stock}</TableCell>
                <TableCell align="right">{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>);
};

export default LowStockWarnings;
