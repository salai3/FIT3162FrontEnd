import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          align="left"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Welcome Back, (Username)
        </Typography>
        <Container maxWidth="md" sx={{ display: "flex" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/">Dashboard</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/orders">Purchase History</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/">Order Tracking</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/products">Inventory</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/">Supplier</NavLink>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
