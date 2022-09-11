import { mainClass } from "../classes/classes";
import React from "react";
import { Container } from "@mui/system";
import HeaderContent from "./HeaderContent";
import Card from "./Card";

const Content = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        ...mainClass,
      }}
    >
      <HeaderContent />
      <Card />
    </Container>
  );
};
export default Content;
