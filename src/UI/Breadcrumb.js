import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const breadcrumbVals = location.pathname.split("/").slice(1, 10);
  console.log(breadcrumbVals);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#f9f9f9", padding: 2 }}>
      
      <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Typography color="h1">Home</Typography>
        {breadcrumbVals.map((path) => {
          return (
            <Typography color="h1">
                {path.charAt(0).toUpperCase() + path.slice(1)}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
