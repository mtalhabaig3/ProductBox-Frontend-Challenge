import { TextField, InputAdornment } from "@mui/material";

const FormInput = ({ label, type = "text", adornment, formikKey, formik }) => (
  <TextField
    label={label}
    type={type}
    {...formik.getFieldProps(formikKey)}
    fullWidth
    margin="normal"
    error={formik.touched[formikKey] && Boolean(formik.errors[formikKey])}
    helperText={formik.touched[formikKey] && formik.errors[formikKey]}
    InputProps={
      adornment
        ? {
            startAdornment: (
              <InputAdornment position="start">{adornment}</InputAdornment>
            ),
          }
        : undefined
    }
  />
);

export default FormInput;
