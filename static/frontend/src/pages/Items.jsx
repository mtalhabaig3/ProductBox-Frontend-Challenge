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
} from "@mui/material";

const Items = () => {
  const { data: items = [], isLoading } = useGetItemsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <h2>Items</h2>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`http://localhost:3000/img/${item.img.split("/").pop()}`}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">${item.price}</Typography>
                <Button
                  onClick={() => dispatch(addToCart(item))}
                  variant="contained"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Items;
