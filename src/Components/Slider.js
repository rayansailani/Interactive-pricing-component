import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { slider } from "../classes/classes";

const MiuiSlider = ({ onSlide }) => {
  function valuetext(value) {
    // console.log(onSlide);
    onSlide(parseInt(value));
    return `${value}°C`;
  }
  return (
    <Box sx={{ padding: "0.6rem" }}>
      <Slider
        size="medium"
        defaultValue={20}
        getAriaValueText={valuetext}
        valueLabelDisplay="off"
        step={4}
        marks={false}
        min={8}
        max={32}
        // value={[8, 12, 16, 24, 36]}
        sx={{
          ...slider,
        }}
      />
    </Box>
  );
};

export default MiuiSlider;
