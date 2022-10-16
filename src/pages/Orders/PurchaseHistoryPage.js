import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  MenuItem,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PurchaseHistoryTable from "../../Components/PurchaseHistoryTable";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useReducer, useEffect, useState, useContext } from "react";
import useHTTP from "../../hooks/use-http";
import NewOrderModal from "./NewOrderModal";
import AuthContext from "../../store/auth-context";

const CardTitle = <Typography variant="h5">Purchase Order History</Typography>;

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
  const [orders, setOrders] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const { isLoading, sendRequest: fetchOrders } = useHTTP();
  const authCtx = useContext(AuthContext);

  //Modal Button State
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const transformOrders = (ordersObj) => {
      const loadedOrders = [];

      for (const orderKey in ordersObj) {
        loadedOrders.push(ordersObj[orderKey]);
      }

      setOrders(loadedOrders);
    };

    fetchOrders(
      { url: `${process.env.REACT_APP_CHACE_BACKEND}/api/all_order/`,
        headers: {Authorization: `Bearer ${authCtx.token}`} },
      transformOrders
    );
  }, [fetchOrders, authCtx.token]);

  useEffect(() => {
    setFilteredRows(orders);
  }, [orders, setFilteredRows]);

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
    const updatedRows = orders.filter((row) => {
      return (
        (queryState.name.trim().length === 0 ||
          row.supplierName
            ?.toLowerCase()
            ?.includes(queryState.name.toLowerCase())) &&
        (queryState.status === "All" || row.status === queryState.status) &&
        (queryState.dateCreated === "" ||
          new Date(row.dateCreated) >= dateCreatedQuery) &&
        (queryState.dateUpdated === "" ||
          new Date(row.dateUpdated) >= dateUpdatedQuery)
      );
    });
    setFilteredRows(updatedRows);
  }, [orders, queryState]);

  return (
    <Container fluid="true" sx={{ padding: "50px", width: "100%" }}>
      {isLoading && <LoadingSpinner />}
      <Card>
        <CardHeader title={CardTitle} />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FilterQueryComponent
              queryState={queryState}
              dispatchQuery={dispatchQuery}
            />
            <Button onClick={handleOpen}>
              <AddCircleIcon />
            </Button>
            <NewOrderModal handleClose={handleClose} open={open} />
          </Box>
          <PurchaseHistoryTable rows={filteredRows} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default PurchaseHistoryPage;
