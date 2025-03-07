import { useGetItemsQuery } from "../api/itemsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid,
  CircularProgress,
} from "@mui/material";
import toast from "react-hot-toast";

const Items = () => {
  const { data: items = [], isLoading, isError } = useGetItemsQuery();
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (isError) {
    toast.error("Failed to load items. Please try again later.");
    return (
      <Container>
        <Typography variant="h6" color="error">
          Error loading items. Please refresh the page.
        </Typography>
      </Container>
    );
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Container>
      <h2>Items</h2>
      <Grid container spacing={2}>
        {items.length > 0 ? (
          items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`http://localhost:3000/img/${item.img
                    .split("/")
                    .pop()}`}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">${item.price}</Typography>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    variant="contained"
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 2 }}>
            No items available.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Items;
