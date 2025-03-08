import { Box, Typography, Button } from "@mui/material";
import CustomButton from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ subtotal }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h6" fontWeight="bold">
        Subtotal: ${subtotal.toFixed(2)}
      </Typography>
      <CustomButton onClick={() => navigate("/checkout")}>
        Proceed to Checkout
      </CustomButton>
    </Box>
  );
};

export default CartSummary;
