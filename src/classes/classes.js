export const grayishBlue = {
  color: "hsl(225, 20%, 60%)",
};

export const displayInline = {
  display: "inline !important",
};

export const mainClass = {
  background:
    "url(/interactive-pricing-component-main/interactive-pricing-component-main/images/bg-pattern.svg)",
  backgroundColor: "hsl(230, 100%, 99%)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "100vw 50vh",
  height: {
    xs: "110vh",
    md: "100vh",
  },
};

export const headerContainer = {
  color: "hsl(227, 35%, 25%)",
  textAlign: "center",
  backgroundImage:
    "url(./interactive-pricing-component-main/interactive-pricing-component-main/images/pattern-circles.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const headerHeading = {
  fontWeight: "800",
  padding: "0 0.1rem",
  fontSize: {
    xs: "1.3rem !important",
    md: "2.2rem !important",
  },
};

export const cardContainer = {
  borderRadius: "0.4rem",
  padding: {
    xs: "1.6rem 1.6rem",
    md: "1.6rem 2.4rem",
  },
  background: "white",
  boxShadow: "0px 0px 1rem 5px hsl (0, 0%, 100%)",
  "*": {
    marginBottom: "0.8rem",
  },
};

export const pricingSliderContainer = {
  display: "flex",
  flexDirection: "column",
};

export const cardPricingDetails = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const pageViews = {
  textTransform: "uppercase",
  color: " hsl(225, 20%, 60%)",
  fontWeight: "800",
  textAlign: {
    xs: "center",
    md: "left",
  },
  width: {
    xs: "100%;",
  },
};

export const priceComponentDesktop = {
  display: {
    xs: "none",
    md: "block",
  },
};

export const priceComponentMobile = {
  display: {
    md: "none",
    xs: "block",
  },
  textAlign: "center",
};

export const slider = {
  ".MuiSlider-rail": {
    backgroundColor: "  hsl(224, 65%, 95%) !important",
    height: "0.5rem",
  },
  "	.MuiSlider-track": {
    background: "hsl(174, 86%, 45%) !important",
    height: "0.5rem",
    border: "none !important",
  },
  ".MuiSlider-thumb": {
    background:
      "url(interactive-pricing-component-main/interactive-pricing-component-main/images/icon-slider.svg)",
    backgroundColor: "#11D8C4 !important",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 42,
    width: 42,
    boxShadow: "0 0 1.2rem hsl(174, 86%, 45%)",
  },
};

export const muiSwitch = {
  marginRight: "0.4rem",
  padding: 8,
  marginBottom: "0",
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    background: "hsl(223, 50%, 87%)",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "70%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    background: "hsl (0, 0%, 100%)",
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
};

export const switchLabel = {
  fontSize: {
    xs: "0.6rem",
    md: "1rem",
  },
  display: "inline",
  marginRight: "0.6rem",
};

export const discountText = {
  background: "hsl(14, 92%, 95%)",
  padding: "0.1rem 0.3rem",
  color: "hsl(15, 100%, 70%)",
  borderRadius: "0.4rem",

  fontSize: {
    xs: "0.6rem",
    md: "0.7rem",
  },
};

export const benefitsContainer = {
  padding: "1.6rem 0 0 0rem",
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  justifyContent: {
    xs: "center",
    md: "space-between",
  },
  alignItems: "center",
};

export const benefitsText = {
  "*": {
    marginBottom: "0.5rem",
  },
};
