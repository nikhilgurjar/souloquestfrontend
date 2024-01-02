"use client";
import Container from "@mui/material/Container";
import React from "react";
import historyImg from "../../../../public/images/historyImg.png";
import { StyledRoot } from "./style";

const HistoryWrapper = ({ children }) => {
  return (
    <StyledRoot backgroundImage={historyImg}>
      <Container
        sx={{
          // position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${historyImg})`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          gap: 10,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {children}
      </Container>
    </StyledRoot>
  );
};

export default HistoryWrapper;
