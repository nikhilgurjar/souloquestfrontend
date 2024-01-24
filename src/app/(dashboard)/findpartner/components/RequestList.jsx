"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import RequestItem from "./RequestItem";
import { usePartnerFinder } from "./PartnerContext";

const RequestList = () => {
  const {requests, setRequests } = usePartnerFinder()

  return (
    <>
      {requests?.length > 0 ? (
        <Box
          sx={{
            columnGap: 3,
            display: "grid",
            rowGap: { xs: 4, md: 5 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {requests.map((item) => (
            <RequestItem key={item._id} request={item} />
          ))}
        </Box>
      ) : (
        <Typography
          variant="body1"
          sx={{ color: "text.secondary" }}
          textAlign={"center"}
        >
          Not able to find any requests!! <br />
          Please try with different filters or post your request
        </Typography>
      )}
    </>
  );
};

export default RequestList;
