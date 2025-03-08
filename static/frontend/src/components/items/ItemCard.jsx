import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={`http://localhost:3000/img/${item.img.split("/").pop()}`}
        alt={item.name}
        sx={{ objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/600x400"; // Fallback image
        }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          ${item.price}
        </Typography>
        <Button
          onClick={handleAddToCart}
          variant="contained"
          color="primary"
          sx={{ px: 4, py: 1, fontWeight: "bold" }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
