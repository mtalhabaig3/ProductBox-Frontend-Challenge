import { Container, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../components/ui/CustomButton";

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
        <CustomButton to="/all-items">View Items</CustomButton>

        <CustomButton to="/add-item" variant="outlined">
          Add Item
        </CustomButton>
      </Box>
    </Container>
  );
};

export default Home;
