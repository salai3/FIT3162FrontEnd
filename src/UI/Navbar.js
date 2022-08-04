import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  
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
        <Container maxWidth="md" sx={{ display: "flex", color: 'white' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } >Dashboard</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/orders">Orders</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/products">Inventory</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/suppliers">Suppliers</NavLink>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
