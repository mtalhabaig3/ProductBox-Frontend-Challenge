import { Container, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <h1>Welcome to RandoStore</h1>

      <Button component={Link} to="/all-items" variant="contained">
        View Items
      </Button>

      <Button component={Link} to="/add-item" variant="contained">
        Add Item
      </Button>
    </Container>
  );
};

export default Home;
