import { Box, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import {
  cardContainer,
  cardPricingDetails,
  pageViews,
  priceComponentDesktop,
  priceComponentMobile,
} from "../classes/classes";
import Benefits from "./Benefits";
import PricingText from "./PricingText";
import MiuiSlider from "./Slider";
import MuiSwitch from "./Swtich";

const Card = () => {
  const priceViewMapping = {
    8: "10K",
    12: "50k",
    16: "100k",
    20: "150k",
    24: "200k",
    28: "250k",
    30: "500k",
    32: "1M",
  };

  const [price, setPrice] = useState(16);
  const [yearly, setYearly] = useState(false);
  const [views, setViews] = useState(priceViewMapping[16] + " pageviews");

  const onSlide = (price) => {
    setPrice(
      !yearly ? price : parseInt(parseFloat(price) - parseFloat(price * 0.25))
    );
    displayViews();
  };

  const displayViews = () => {
    setViews(priceViewMapping[price] + " pageviews");
  };

  const onSwtich = (value) => {
    setYearly(value);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        ...cardContainer,
        Box: {
          marginBottom: "1rem",
        },
      }}
    >
      <div>
        <Box style={{ ...cardPricingDetails }}>
          <Typography
            variant="body1"
            sx={{
              ...pageViews,
            }}
          >
            {views}
          </Typography>
          <PricingText stylingClass={priceComponentDesktop} price={price} />
        </Box>
        <MiuiSlider onSlide={onSlide} />
        <PricingText stylingClass={priceComponentMobile} price={price} />
      </div>
      <MuiSwitch onSwtich={onSwtich} />
      <Divider sx={{ height: "1.2rem" }} />
      <Benefits />
    </Container>
  );
};
export default Card;
