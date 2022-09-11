import React from "react";
import { Typography } from "@mui/material";

const BenefitsText = ({ content }) => {
  return (
    <>
      <Typography
        variant="body2"
        sx={{
          textAlign: {
            xs: "center",
            md: "left",
            color: "hsl(225, 20%, 60%)",
          },
        }}
      >
        <img
          src="./interactive-pricing-component-main/interactive-pricing-component-main/images/icon-check.svg"
          alt=""
          style={{ marginRight: ".4rem", marginBottom: ".1rem" }}
        />
        {content}
      </Typography>
    </>
  );
};

export default BenefitsText;
