import { useGetItemsQuery } from "../api/itemsApi";
import { Container, CircularProgress } from "@mui/material";
import toast from "react-hot-toast";
import { useState } from "react";
import ItemFilters from "../components/ItemFilters";
import ItemList from "../components/ItemList";

const Items = () => {
  const { data: items = [], isLoading, isError } = useGetItemsQuery();
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

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <ItemFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <ItemList filteredItems={filteredItems} />
    </Container>
  );
};

export default Items;
