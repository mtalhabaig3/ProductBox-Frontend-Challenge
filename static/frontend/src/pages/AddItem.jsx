import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddItemMutation } from "../api/itemsApi";
import { TextField, Button, Container } from "@mui/material";

const AddItem = () => {
  const [addItem, { isLoading, isError }] = useAddItemMutation();

  const formik = useFormik({
    initialValues: { name: "", price: "", img: "" },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      img: Yup.string().url().required(),
    }),
    onSubmit: (values) => addItem(values),
  });

  return (
    <Container>
      <h2>Add New Item</h2>
      <form onSubmit={formik.handleSubmit}>
        <TextField label="Name" {...formik.getFieldProps("name")} fullWidth />
        <TextField
          margin="normal"
          label="Price"
          type="number"
          {...formik.getFieldProps("price")}
          fullWidth
        />
        <TextField
          margin="normal"
          label="Image URL"
          {...formik.getFieldProps("img")}
          fullWidth
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add Item
        </Button>
      </form>
    </Container>
  );
};

export default AddItem;
