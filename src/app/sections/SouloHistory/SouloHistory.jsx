import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import historyImg from '../../../../public/images/historyImg.png'
import HistoryCard from './HistoryCard';
const SouloHistory = () => {

  return (
    <Container
      sx={{
        // position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${historyImg})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          gap: 10,
          alignItems: "center",
          flexWrap: "wrap",
      }}
      // style={{
      //   // backgroundImage: `url(${historyImg})`,
      //   backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   height: "100vh",
      //   display: "flex",
      //   justifyContent: "space-around",
      //   gap: 10,
      //   alignItems: "center",
      //   flexWrap: "wrap",
      // }}
    >
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </Container>
  );
}

export default SouloHistory