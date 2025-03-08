import { Button, Box } from "@mui/material";

const SubmitButton = ({ isLoading }) => (
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
);

export default SubmitButton;
