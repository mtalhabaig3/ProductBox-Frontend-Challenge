import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import { Container, List, ListItem, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id, name) => {
    try {
      dispatch(removeFromCart(id));
      toast.success(`${name} removed from cart`);
    } catch (error) {
      toast.error("Error removing item. Please try again.");
    }
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <List>
        {cartItems.length ? (
          cartItems.map((item) => (
            <ListItem key={item.id}>
              <Typography>
                x{item.quantity} {item.name} - ${item.price}
              </Typography>
              <Button
                onClick={() => handleRemove(item.id, item.name)}
                variant="contained"
                color="error"
              >
                Remove
              </Button>
            </ListItem>
          ))
        ) : (
          <Typography>Your cart is empty</Typography>
        )}
      </List>
    </Container>
  );
};

export default Checkout;
