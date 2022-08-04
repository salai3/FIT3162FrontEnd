import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import PurchaseHistoryTable from "../../Components/PurchaseHistoryTable";
import { useReducer, useEffect, useState } from "react";

const CardTitle = <Typography variant="h5">Purchase Order History</Typography>;

/*Table Data */
function createData(
  orderId,
  supplierId,
  supplierName,
  dateCreated,
  dateUpdated,
  status,
  cost
) {
  return {
    orderId,
    supplierId,
    supplierName,
    dateCreated,
    dateUpdated,
    status,
    cost,
  };
}

const rows = [
  createData(
    "O1234",
    "S1281",
    "Company A",
    "2022-07-16",
    "2022-07-20",
    "In Progress",
    142.0
  ),
  createData(
    "O5523",
    "S5511",
    "Company B",
    "2022-07-13",
    "2022-07-20",
    "In Progress",
    28.5
  ),
  createData(
    "O9911",
    "S9182",
    "Company C",
    "2022-07-12",
    "2022-03-15",
    "In Progress",
    47.11
  ),
  createData(
    "O9233",
    "S0012",
    "Company D",
    "2022-06-29",
    "2022-07-13",
    "Completed",
    119.3
  ),
  createData(
    "O1100",
    "S8814",
    "Company E",
    "2022-06-28",
    "2022-06-16",
    "Completed",
    110.0
  ),
  createData(
    "O9162",
    "S1282",
    "Company F",
    "2022-07-16",
    "2022-07-20",
    "In Progress",
    142.0
  ),
  createData(
    "O5542",
    "S5512",
    "Company G",
    "2022-07-13",
    "2022-07-20",
    "In Progress",
    28.5
  ),
  createData(
    "O0122",
    "S9183",
    "Company H",
    "2022-07-12",
    "2022-03-15",
    "In Progress",
    47.11
  ),
  createData(
    "O8927",
    "S0013",
    "Company I",
    "2022-06-29",
    "2022-07-13",
    "Completed",
    119.3
  ),
  createData(
    "O0128",
    "S8815",
    "Company J",
    "2022-06-28",
    "2022-06-16",
    "Completed",
    110.0
  ),
];

const FilterQueryComponent = (props) => {
  return (
    <Grid container paddingBottom={2} spacing={2}>
      <Grid item>
        <TextField
          id="supplierName"
          label="Supplier Name"
          value={props.queryState.supplier}
          type="search"
          onChange={(e) => {
            props.dispatchQuery({ type: "name", value: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="status"
          select
          label="Status"
          value={props.queryState.status}
          onChange={(e) => {
            props.dispatchQuery({ type: "status", value: e.target.value });
          }}
        >
          {["All", "In Progress", "Completed"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          id="dateCreated"
          label="Date Created"
          type="date"
          onChange={(e) => {
            props.dispatchQuery({ type: "dateCreated", value: e.target.value });
          }}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="dateUpdated"
          label="Date Updated"
          type="date"
          onChange={(e) => {
            props.dispatchQuery({ type: "dateUpdated", value: e.target.value });
          }}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

const PurchaseHistoryPage = () => {
  const [filteredRows, setFilteredRows] = useState(rows);

  const initialQueryState = {
    name: "",
    status: "All",
    dateCreated: "",
    dateUpdated: "",
  };
  const queryReducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.value };
      case "status":
        return { ...state, status: action.value };
      case "dateCreated":
        return { ...state, dateCreated: action.value };
      case "dateUpdated":
        return { ...state, dateUpdated: action.value };
      default:
        return state;
    }
  };
  const [queryState, dispatchQuery] = useReducer(
    queryReducer,
    initialQueryState
  );

  useEffect(() => {
    const dateCreatedQuery = new Date(queryState.dateCreated);
    const dateUpdatedQuery = new Date(queryState.dateUpdated);
    const updatedRows = rows.filter((row) => {
      return (
        (queryState.name.trim().length === 0 ||
          row.supplierName
            .toLowerCase()
            .includes(queryState.name.toLowerCase())) &&
        (queryState.status === "All" || row.status === queryState.status) &&
        (queryState.dateCreated === "" ||
          new Date(row.dateCreated) >= dateCreatedQuery) &&
        (queryState.dateUpdated === "" ||
          new Date(row.dateUpdated) >= dateUpdatedQuery)
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
          <PurchaseHistoryTable rows={filteredRows} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default PurchaseHistoryPage;
