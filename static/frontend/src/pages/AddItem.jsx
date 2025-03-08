import { Container } from "@mui/material";
import AddItemCard from "../components/AddItemCard";
import { useAddItemMutation } from "../api/itemsApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddItemPage = () => {
  const [addItem, { isLoading }] = useAddItemMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addItem(values).unwrap();
      toast.success("Item added successfully!");
      resetForm(); // Clear form after success
      setTimeout(() => {
        navigate("/all-items");
      }, 1000);
    } catch (error) {
      toast.error("Failed to add item. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <AddItemCard onSubmit={handleSubmit} isLoading={isLoading} />
    </Container>
  );
};

export default AddItemPage;
