import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import { Container, List, ListItem, Button, Typography } from "@mui/material";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>Checkout</h2>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <Typography>
              x{item.quantity} {item.name} - ${item.price}
            </Typography>
            <Button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Checkout;
