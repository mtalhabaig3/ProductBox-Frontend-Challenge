import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../features/cartSlice";
import {
  Container,
  List,
  ListItem,
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id, name) => {
    try {
      dispatch(removeItem(id));
      toast.success(`${name} removed from cart`);
    } catch (error) {
      toast.error("Error removing item. Please try again.");
    }
  };

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
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Column on small, row on larger screens
                  alignItems: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 2,
                }}
              >
                {/* Item Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", sm: 120 }, // Full width on small screens, fixed width on larger screens
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                  image={`http://localhost:3000/img/${item.img
                    .split("/")
                    .pop()}`}
                  alt={item.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400"; // Fallback image
                  }}
                />

                {/* Item Details */}
                <CardContent
                  sx={{
                    flex: 1,
                    ml: { xs: 0, sm: 2 },
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Price: <strong>${item.price}</strong>
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Total:{" "}
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </Typography>
                </CardContent>

                {/* Quantity Controls */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  mr={{ xs: 0, sm: 2 }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    disabled={item.quantity === 1}
                    sx={{ minWidth: "36px", fontWeight: "bold" }}
                  >
                    -
                  </Button>
                  <Typography variant="body1" fontWeight="bold">
                    {item.quantity}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    sx={{ minWidth: "36px", fontWeight: "bold" }}
                  >
                    +
                  </Button>
                </Box>

                {/* Remove Item Button */}
                <Button
                  onClick={() => handleRemove(item.id, item.name)}
                  variant="contained"
                  color="error"
                  sx={{
                    fontWeight: "bold",
                    px: 2,
                    mt: { xs: 2, sm: 0 },
                  }}
                >
                  Remove
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box textAlign="center" mt={5}>
          <Typography variant="h6" color="textSecondary">
            Your cart is empty.
          </Typography>
        </Box>
      )}

      {/* Subtotal Section */}
      {cartItems.length > 0 && (
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Subtotal: ${subtotal.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, px: 4, py: 1, fontWeight: "bold" }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2, px: 4, py: 1, fontWeight: "bold" }}
          onClick={() => navigate("/all-items")}
        >
          Back to store
        </Button>
      </Box>
    </Container>
  );
};

export default Checkout;
