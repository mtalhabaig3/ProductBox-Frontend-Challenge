import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../features/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
    toast.success(`${item.name} removed from cart`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 120 },
          height: 120,
          objectFit: "cover",
          borderRadius: 1,
        }}
        image={`http://localhost:3000/img/${item.img.split("/").pop()}`}
        alt={item.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/600x400";
        }}
      />
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
          Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        </Typography>
      </CardContent>
      <Box display="flex" alignItems="center" gap={1} mr={{ xs: 0, sm: 2 }}>
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
      <Button
        onClick={handleRemove}
        variant="contained"
        color="error"
        sx={{ fontWeight: "bold", px: 2, mt: { xs: 2, sm: 0 } }}
      >
        Remove
      </Button>
    </Card>
  );
};

export default CartItem;
