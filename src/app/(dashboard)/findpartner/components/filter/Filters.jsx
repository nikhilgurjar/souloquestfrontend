"use client";
import React from "react";
import TravelFilterLocation from "./TravelFilterLocation";
import { Button, Divider, Stack } from "@mui/material";
import TravelFilterTime from "./TravelFilterTime";
import { FiSearch } from "react-icons/fi";
import { fetchPartnerRequests } from "@/actions/partnerFinder";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { usePartnerFinder } from "../PartnerContext";

const Filters = () => {
  const { departureDate, location, setRequests } = usePartnerFinder();

  const handleSubmission = async () => {
    try {
      console.log(location);
      const response = await fetchPartnerRequests({
        departureDate: dayjs(departureDate).format("YYYY-MM-DD"),
        location: location,
      });
      setRequests(response.requests);
      if ((response?.requests || []).length === 0) {
        toast.info("No requests Found");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Stack
      spacing={2.5}
      alignItems={{ md: "center" }}
      direction={{ xs: "column", md: "row" }}
      sx={{
        p: 4,
        borderRadius: 2,
        bgcolor: "background.neutral",
        mt: 5,
        mb: { xs: 5, md: 10 },
        maxWidth: "750px",
        mx: "auto",
      }}
    >
      <TravelFilterLocation />
      <Divider flexItem orientation="vertical" />
      <TravelFilterTime />
      <Divider flexItem orientation="vertical" />

      <Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{
          px: 0,
          flexShrink: 0,
          minWidth: { xs: 1, md: 48 },
        }}
        onClick={handleSubmission}
      >
        <FiSearch />
      </Button>
    </Stack>
  );
};

export default Filters;
