import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cartItems", cartItems);
  const totalItems = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <AppBar position="static" color="info">
      <Toolbar>
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, cursor: "pointer", fontFamily: "cursive" }}
          onClick={() => navigate("/")}
        >
          RandoStore
        </Typography>

        <IconButton color="inherit" onClick={() => navigate("/checkout")}>
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
