import { useSelector } from "react-redux";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCartMessage from "../components/cart/EmptyCartMessage";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/ui/CustomButton";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Checkout
      </Typography>
      {cartItems.length ? (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyCartMessage />
      )}
      {cartItems.length > 0 && <CartSummary subtotal={subtotal} />}
      <Box sx={{ textAlign: "center" }}>
        <CustomButton onClick={() => navigate("/all-items")}>
          Back to store
        </CustomButton>
      </Box>
    </Container>
  );
};

export default Checkout;
