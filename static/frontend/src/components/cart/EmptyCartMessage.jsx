import { Box, Typography } from "@mui/material";

const EmptyCartMessage = () => (
  <Box textAlign="center" mt={5}>
    <Typography variant="h6" color="textSecondary">
      Your cart is empty.
    </Typography>
  </Box>
);

export default EmptyCartMessage;
