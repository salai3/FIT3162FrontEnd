import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useReducer, useEffect, useState } from "react";
import SupplierTable from "../../Components/SupplierTable";

const CardTitle = <Typography variant="h5">Suppliers</Typography>;

/*Table Data */
function createData(
  supplierId,
  supplierName
) {
  return {
    supplierId,
    supplierName
  };
}

const rows = [
  createData("S1234", "Company A"),
  createData("S5523", "Company B"),
  createData("S9911", "Company C"),
  createData("S9233", "Company D"),
  createData("S1100", "Company E"),
  createData("S9162", "Company F"),
  createData("S5542", "Company G"),
  createData("S0122", "Company H"),
  createData("S8927", "Company I"),
  createData("S0128", "Company J"),
];

const FilterQueryComponent = (props) => {
  return (
    <Grid container paddingBottom={2} spacing={2}>
      <Grid item>
        <TextField
          id="supplierId"
          label="Supplier ID"
          value={props.queryState.id}
          type="search"
          onChange={(e) => {
            props.dispatchQuery({ type: "id", value: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="supplierName"
          label="Supplier Name"
          value={props.queryState.name}
          type="search"
          onChange={(e) => {
            props.dispatchQuery({ type: "name", value: e.target.value });
          }}
        />
      </Grid>
    </Grid>
  );
};

const SuppliersPage = () => {
  const [filteredRows, setFilteredRows] = useState(rows);

  const initialQueryState = {
    id: "",
    name: "",
  };
  const queryReducer = (state, action) => {
    switch (action.type) {
      case "id":
        return { ...state, id: action.value };
      case "name":
        return { ...state, name: action.value };
      default:
        return state;
    }
  };
  const [queryState, dispatchQuery] = useReducer(
    queryReducer,
    initialQueryState
  );

  useEffect(() => {
    const updatedRows = rows.filter((row) => {
      return (
        (queryState.id.trim().length === 0 ||
          row.supplierId.includes(queryState.id)) &&
        (queryState.name.trim().length === 0 ||
          row.supplierName.toLowerCase().includes(queryState.name.toLowerCase()))
      );
    });
    setFilteredRows(updatedRows);
  }, [queryState]);

  return (
    <Container fluid="true" sx={{ padding: "50px" }}>
      <Card>
        <CardHeader title={CardTitle} />
        <CardContent>
          <FilterQueryComponent
            queryState={queryState}
            dispatchQuery={dispatchQuery}
          />
          <SupplierTable rows={filteredRows}/>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SuppliersPage;
