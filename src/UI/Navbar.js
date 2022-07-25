import { AppBar, Container, Toolbar, Typography } from "@mui/material";

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
        <Container maxWidth="md" sx={{display: "flex"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Purchase History
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Order Tracking
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inventory
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Supplier
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
