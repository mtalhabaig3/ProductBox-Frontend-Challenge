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
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import toast from "react-hot-toast";
import { useState } from "react";

const Items = () => {
  const { data: items = [], isLoading, isError } = useGetItemsQuery();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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

  let filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOrder === "lowToHigh") {
    filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
  }
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Items
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
        >
          <FormControl size="small" variant="outlined" sx={{ minWidth: 150 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              label="Sort by"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="highToLow">Price: High to Low</MenuItem>
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            placeholder="Search items..."
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: 1 }}
          />
        </Stack>
      </Box>

      {filteredItems.length > 0 ? (
        <Grid container spacing={3}>
          {filteredItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={`http://localhost:3000/img/${item.img
                    .split("/")
                    .pop()}`}
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
                    onClick={() => handleAddToCart(item)}
                    variant="contained"
                    color="primary"
                    sx={{ px: 4, py: 1, fontWeight: "bold" }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box textAlign="center" mt={5}>
          <Typography variant="h6" color="textSecondary">
            No items available.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Items;
