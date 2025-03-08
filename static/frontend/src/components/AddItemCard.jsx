import { Card, CardContent, Typography } from "@mui/material";
import ItemForm from "./ItemForm";

const AddItemCard = ({ onSubmit, isLoading }) => (
  <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
    <CardContent>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Add New Item
      </Typography>
      <ItemForm onSubmit={onSubmit} isLoading={isLoading} />
    </CardContent>
  </Card>
);

export default AddItemCard;
