import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddItemMutation } from "../api/itemsApi";
import { TextField, Button, Container } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [addItem, { isLoading, isError }] = useAddItemMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", price: "", img: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      price: Yup.number()
        .typeError("Price must be a number")
        .positive("Price must be positive")
        .required("Price is required"),
      img: Yup.string()
        .url("Enter a valid URL")
        .required("Image URL is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
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
    },
  });

  return (
    <Container>
      <h2>Add New Item</h2>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          {...formik.getFieldProps("name")}
          fullWidth
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin="normal"
          label="Price"
          type="number"
          {...formik.getFieldProps("price")}
          fullWidth
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          margin="normal"
          label="Image URL"
          {...formik.getFieldProps("img")}
          fullWidth
          error={formik.touched.img && Boolean(formik.errors.img)}
          helperText={formik.touched.img && formik.errors.img}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add Item"}
        </Button>
      </form>
    </Container>
  );
};

export default AddItem;
