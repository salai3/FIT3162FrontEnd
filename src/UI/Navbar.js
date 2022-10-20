import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import LogoutIcon from '@mui/icons-material/Logout';

const ThemedNavLink = (props) => {
  return (
    <Typography variant="h5" sx={{ flexGrow: 1 }}>
      <NavLink
        to={props.to}
        style={({ isActive }) => {
          return { textDecoration: isActive ? "underline" : "none", color: "white" };
        }}
      >
        {props.children}
      </NavLink>
    </Typography>
  );
};

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/landing")
  }
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
        <Container maxWidth="md" sx={{ display: "flex", color: "white" }}>
          <ThemedNavLink to="/">Dashboard</ThemedNavLink>
          <ThemedNavLink to="/orders">Orders</ThemedNavLink>
          <ThemedNavLink to="/products">Products</ThemedNavLink>
          <ThemedNavLink to="/suppliers">Suppliers</ThemedNavLink>
          <Button variant="contained" size="large" onClick={logoutHandler} startIcon={<LogoutIcon />} >LOGOUT</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
