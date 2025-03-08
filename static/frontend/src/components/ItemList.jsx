import { Grid, Box, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

const ItemList = ({ filteredItems }) => {
  return filteredItems.length > 0 ? (
    <Grid container spacing={3}>
      {filteredItems.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Box textAlign="center" mt={5}>
      <Typography variant="h6" color="textSecondary">
        No items available.
      </Typography>
    </Box>
  );
};

export default ItemList;
