import { Container, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 5,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Welcome to RandoStore
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" mb={3}>
        Your one-stop shop for all things random. Browse our collection or add
        your own items!
      </Typography>

      <Box display="flex" gap={2} mt={2}>
        <Button
          component={Link}
          to="/all-items"
          variant="contained"
          color="primary"
          sx={{ px: 4, py: 1 }}
        >
          View Items
        </Button>

        <Button
          component={Link}
          to="/add-item"
          variant="outlined"
          color="primary"
          sx={{ px: 4, py: 1 }}
        >
          Add Item
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
