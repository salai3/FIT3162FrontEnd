import {
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
  } from "@mui/material";
  import Paper from "@mui/material/Paper";
  import { styled } from "@mui/material/styles";
  import { tableCellClasses } from "@mui/material/TableCell";
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.action.active,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  
  function createData(id, name, date_created, date_updated, status, cost) {
    return { id, name, date_created, date_updated, status, cost: `$${cost.toFixed(2)}`};
  }
  
  const rows = [
    createData("S1281", "Company A", "16/07/2022", "20/03/2022", "In Progress", 142.00),
    createData("S5511", "Company B", "13/07/2022", "20/03/2022", "In Progress", 28.50),
    createData("S9182", "Company C", "12/07/2022", "15/03/2022", "In Progress", 47.11),
    createData("S0012", "Company D", "29/06/2022", "13/03/2022", "Completed", 119.30),
    createData("S8814", "Company E", "28/06/2022", "16/03/2022", "Completed", 110.00),
  ];
  
  const PurchaseHistoryTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width={70}>Supplier ID</StyledTableCell>
              <StyledTableCell align="right">Supplier Name</StyledTableCell>
              <StyledTableCell align="right">Date Created</StyledTableCell>
              <StyledTableCell align="right">Last Updated</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Cost</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.date_created}</StyledTableCell>
                <StyledTableCell align="right">{row.date_updated}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.cost}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default PurchaseHistoryTable;
  