import { Grid, MenuItem, TextField } from "@mui/material";

const FilterQueryComponent = (props) => {

  return (
    <Grid container paddingBottom={2} spacing={2}>
      <Grid item>
        <TextField id="supplierName" label="Supplier Name" value={props.queryState.supplier} type="search" onChange={(e) => {props.dispatchQuery({type: 'name', value: e.target.value})}} />
      </Grid>
      <Grid item>
        <TextField
          id="status"
          select
          label="Status"
          value={props.queryState.status}
          onChange={(e) => {props.dispatchQuery({type: 'status', value: e.target.value})}}
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
          onChange={(e) => {props.dispatchQuery({type: 'dateCreated', value: e.target.value})}} 
          defaultValue={props.queryState.dateCreated}
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
          onChange={(e) => {props.dispatchQuery({type: 'dateUpdated', value: e.target.value})}} 
          defaultValue={props.queryState.dateUpdated}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default FilterQueryComponent;
