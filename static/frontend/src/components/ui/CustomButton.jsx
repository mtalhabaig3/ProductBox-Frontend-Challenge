import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton = ({
  onClick,
  to,
  children,
  variant = "contained",
  color = "primary",
  size = "large",
  sx = {},
}) => {
  return (
    <Button
      component={to ? Link : "button"} // Use Link if 'to' prop is provided
      to={to}
      variant={variant}
      color={color}
      size={size}
      sx={{ mt: 2, px: 4, py: 1, fontWeight: "bold", ...sx }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
