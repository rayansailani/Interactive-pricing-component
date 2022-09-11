import { Box, Typography } from "@mui/material";
import React from "react";
import { displayInline } from "../classes/classes";

const PricingText = ({ stylingClass, price }) => {
  return (
    <Box sx={{ ...stylingClass }}>
      <Typography variant="h4" sx={{ ...displayInline, fontWeight: "800" }}>
        ${price}.00
      </Typography>
      <Typography
        variant="body2"
        sx={{ ...displayInline, color: " hsl(225, 20%, 60%)" }}
      >
        /month
      </Typography>
    </Box>
  );
};
export default PricingText;
