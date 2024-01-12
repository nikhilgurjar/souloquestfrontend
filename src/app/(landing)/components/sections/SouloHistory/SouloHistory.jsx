"use client";
import HistoryCard from "./HistoryCard";
import HistoryWrapper from "./HistoryWrapper.client";
import calenderimg from "@images/images/clanderImg.png";
import gridicons_history from "@images/images/gridicons_history.png";
import carbon_map from "@images/images/carbon_map.png";
import { Box, Stack } from "@mui/material";
const SouloHistory = () => {
  const data = [
    { number: "15", title: "Year of Experience", imgUrl: calenderimg },
    { number: "650", title: "Places Visited", imgUrl: carbon_map },
    { number: "2k", title: "Travel History", imgUrl: gridicons_history },
  ];
  return (
    <HistoryWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: 4,
          alignItems: "center",
          flexWrap: "wrap",
          width:"100%",
          px:10
        }}
      >
        {data.map((item, i) => (
          <HistoryCard
            key={i}
            title={item.title}
            imgUrl={item.imgUrl}
            number={item.number}
          />
        ))}
      </Box>
    </HistoryWrapper>
  );
};

export default SouloHistory;
