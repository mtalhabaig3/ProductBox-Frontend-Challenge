import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddItemMutation } from "../api/itemsApi";
import {
  TextField,
  Button,
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
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
    <Container maxWidth="sm" sx={{ mt: 5 }}>
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

          <form onSubmit={formik.handleSubmit}>
            {/* Name Field */}
            <TextField
              label="Name"
              {...formik.getFieldProps("name")}
              fullWidth
              margin="normal"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            {/* Price Field */}
            <TextField
              label="Price"
              type="number"
              {...formik.getFieldProps("price")}
              fullWidth
              margin="normal"
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />

            {/* Image URL Field */}
            <TextField
              label="Image URL"
              {...formik.getFieldProps("img")}
              fullWidth
              margin="normal"
              error={formik.touched.img && Boolean(formik.errors.img)}
              helperText={formik.touched.img && formik.errors.img}
            />

            {/* Submit Button */}
            <Box textAlign="center" mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ px: 4, fontWeight: "bold" }}
                disabled={isLoading}
              >
                {isLoading ? "Adding..." : "Add Item"}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddItem;
