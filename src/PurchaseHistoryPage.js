import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import FilterQueryComponent from "./Components/FilterQueryComponent";
import PurchaseHistoryTable from "./Components/PurchaseHistoryTable";
import { useReducer, useEffect, useState } from "react";

const CardTitle = <Typography variant="h5">Purchase Order History</Typography>;

/*Table Data */
function createData(id, name, date_created, date_updated, status, cost) {
  return {
    id,
    name,
    date_created,
    date_updated,
    status,
    cost: `$${cost.toFixed(2)}`,
  };
}

const rows = [
  createData(
    "S1281",
    "Company A",
    "16/07/2022",
    "20/03/2022",
    "In Progress",
    142.0
  ),
  createData(
    "S5511",
    "Company B",
    "13/07/2022",
    "20/03/2022",
    "In Progress",
    28.5
  ),
  createData(
    "S9182",
    "Company C",
    "12/07/2022",
    "15/03/2022",
    "In Progress",
    47.11
  ),
  createData(
    "S0012",
    "Company D",
    "29/06/2022",
    "13/03/2022",
    "Completed",
    119.3
  ),
  createData(
    "S8814",
    "Company E",
    "28/06/2022",
    "16/03/2022",
    "Completed",
    110.0
  ),
];

const PurchaseHistoryPage = () => {
  const [filteredRows, setFilteredRows] = useState(rows);

  /**Query Filter Component Data */
  const currentDate = new Date().toJSON().slice(0, 10);
  const initialQueryState = {
    name: "",
    status: "All",
    dateCreated: currentDate,
    dateUpdated: currentDate,
  };
  const queryReducer = (state, action) => {
    if (action.type === "name") {
      return { ...state, name: action.value };
    }

    if (action.type === "status") {
      return { ...state, status: action.value };
    }

    if (action.type === "dateCreated") {
      return { ...state, dateCreated: action.value };
    }

    if (action.type === "dateUpdated") {
      return { ...state, dateUpdated: action.value };
    }

    return state;
  };
  const [queryState, dispatchQuery] = useReducer(
    queryReducer,
    initialQueryState
  );

  useEffect(() => {
    const updatedRows = rows.filter((row) => {
      return (
        (row.name.includes(queryState.name) ||
          queryState.name.trim().length === 0) &&
        (row.status === queryState.status || queryState.status === "All")
      );
    });
    setFilteredRows(updatedRows);
  }, [queryState]);

  return (
    <Container fluid sx={{ padding: "50px" }}>
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
