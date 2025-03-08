import { useFormik } from "formik";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import * as Yup from "yup";

const ItemForm = ({ onSubmit, isLoading }) => {
  const formik = useFormik({
    initialValues: { name: "", price: "", img: "" },
    onSubmit,
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
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput label="Name" formikKey="name" formik={formik} />
      <FormInput
        label="Price"
        type="number"
        adornment="$"
        formikKey="price"
        formik={formik}
      />
      <FormInput label="Image URL" formikKey="img" formik={formik} />
      <SubmitButton isLoading={isLoading} />
    </form>
  );
};

export default ItemForm;
