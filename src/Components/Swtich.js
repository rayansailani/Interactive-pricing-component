import * as React from "react";
import Switch from "@mui/material/Switch";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { discountText, muiSwitch, switchLabel } from "../classes/classes";

const Android12Switch = styled(Switch)(({ theme }) => ({
  ...muiSwitch,
}));

const MuiSwitch = ({ onSwtich }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    // console.log(event.target.checked);
    onSwtich(event.target.checked);
    setChecked(event.target.checked);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="body2" sx={{ ...switchLabel }}>
        Monthly Billing
      </Typography>
      <Android12Switch checked={checked} onChange={handleChange} />
      <Typography variant="body2" sx={{ ...switchLabel }}>
        Yearly Billing
      </Typography>
      <Typography variant="body2" sx={{ ...discountText }}>
        25% discount
      </Typography>
    </Box>
  );
};
export default MuiSwitch;
