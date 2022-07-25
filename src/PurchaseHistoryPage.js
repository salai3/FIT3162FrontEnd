import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import FilterQueryComponent from "./Components/FilterQueryComponent";
import PurchaseHistoryTable from "./Components/PurchaseHistoryTable";
import { useReducer, useEffect, useState } from "react";

const CardTitle = <Typography variant="h5">Purchase Order History</Typography>;

/*Table Data */
function createData(supplierId, supplierName, dateCreated, dateUpdated, status, cost) {
  return {
    supplierId,
    supplierName,
    dateCreated,
    dateUpdated,
    status,
    cost
  };
}

const rows = [
  createData(
    "S1281",
    "Company A",
    "2022-07-16",
    "2022-07-20",
    "In Progress",
    142.0
  ),
  createData(
    "S5511",
    "Company B",
    "2022-07-13",
    "2022-07-20",
    "In Progress",
    28.5
  ),
  createData(
    "S9182",
    "Company C",
    "2022-07-12",
    "2022-03-15",
    "In Progress",
    47.11
  ),
  createData(
    "S0012",
    "Company D",
    "2022-06-29",
    "2022-07-13",
    "Completed",
    119.3
  ),
  createData(
    "S8814",
    "Company E",
    "2022-06-28",
    "2022-06-16",
    "Completed",
    110.0
  ),
  createData(
    "S1282",
    "Company F",
    "2022-07-16",
    "2022-07-20",
    "In Progress",
    142.0
  ),
  createData(
    "S5512",
    "Company G",
    "2022-07-13",
    "2022-07-20",
    "In Progress",
    28.5
  ),
  createData(
    "S9183",
    "Company H",
    "2022-07-12",
    "2022-03-15",
    "In Progress",
    47.11
  ),
  createData(
    "S0013",
    "Company I",
    "2022-06-29",
    "2022-07-13",
    "Completed",
    119.3
  ),
  createData(
    "S8815",
    "Company J",
    "2022-06-28",
    "2022-06-16",
    "Completed",
    110.0
  ),
];

const PurchaseHistoryPage = () => {
  const [filteredRows, setFilteredRows] = useState(rows);

  const initialQueryState = {
    name: "",
    status: "All",
    dateCreated: '',
    dateUpdated: '',
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
        (row.supplierName.includes(queryState.name) ||
          queryState.name.trim().length === 0) &&
        (row.status === queryState.status || queryState.status === "All") &&
        (queryState.dateCreated === '' || new Date(row.dateCreated) >= dateCreatedQuery) &&
        (queryState.dateUpdated === '' || new Date(row.dateUpdated) >= dateUpdatedQuery)
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
