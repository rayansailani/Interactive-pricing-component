import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {
  grayishBlue,
  headerContainer,
  headerHeading,
} from "../classes/classes";

const HeaderContent = () => {
  return (
    <Container
      sx={{
        ...headerContainer,
        height: "30vh",
      }}
    >
      <Typography
        sx={{
          ...headerHeading,
        }}
      >
        Simple, traffic-based pricing
      </Typography>
      <Typography
        variant="body1"
        sx={{ ...grayishBlue, padding: "0.6rem 1.6rem" }}
      >
        Sign-up for our 30-day trial. No credit card required.
      </Typography>
    </Container>
  );
};
export default HeaderContent;
