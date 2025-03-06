import { Container, List, ListItem, Button, Typography } from "@mui/material";

const Checkout = () => {
  const cartItems = [];

  return (
    <Container>
      <h2>Checkout</h2>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <Typography>
              {item.name} - ${item.price}
            </Typography>
            <Button>Remove</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Checkout;
