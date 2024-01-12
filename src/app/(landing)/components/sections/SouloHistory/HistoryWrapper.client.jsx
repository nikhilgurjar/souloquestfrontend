"use client";
import Container from "@mui/material/Container";
import React from "react";
import historyImg from "@images/images/historybg.png";

const HistoryWrapper = ({ children }) => {
  return (
 
      <Container
        sx={{
          // position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${historyImg.src})`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
          px:3,
          py:10
        }}
      >
        {children}
      </Container>
  );
};

export default HistoryWrapper;
