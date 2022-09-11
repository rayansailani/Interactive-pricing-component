import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { benefitsContainer, benefitsText } from "../classes/classes";
import BenefitsText from "./BenefitsText";

const Benefits = () => {
  const contents = [
    "Unlimited websites",
    "100% data ownership",
    "Email Reports",
  ];
  return (
    <Box sx={{ ...benefitsContainer }}>
      <Box sx={{ ...benefitsText }}>
        {contents.map((content, index) => (
          <BenefitsText content={content} />
        ))}
      </Box>
      <Button
        disableRipple
        sx={{
          borderRadius: "1rem",
          background: "hsl(227, 35%, 25%)",
          color: "hsl(225, 20%, 60%)",
          textTransform: "none",
          padding: "0.4rem 2.4rem",
          "&:hover": {
            background: "hsl(227, 35%, 25%)",
          },
        }}
        variant="contained"
      >
        Start my trial
      </Button>
    </Box>
  );
};

export default Benefits;
