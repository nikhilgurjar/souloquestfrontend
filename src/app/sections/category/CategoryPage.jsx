"use client";
import React from "react";
import { useState } from "react";
import Beach from "./components/Beach";
import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
const CategoryPage = () => {
  const [currentTab, setCurrentTab] = useState("beach");
  const TABS = [
    {
      value: "beach",
      label: "Beach",
      component: <Beach />,
    },
    {
      value: "desert",
      label: "Desert",
      //   component: <AccountSocialLinks socialLinks={user?.socialMedia} />,
    },
    {
      value: "mountain",
      label: "Mountain",
      //   component: <AccountChangePassword />,
    },
    {
      value: "temple",
      label: "Temple",
      //   component: <AccountChangePassword />,
    },
    {
      value: "adventure",
      label: "Adventure",
      //   component: <AccountChangePassword />,
    },
  ];
  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "#008080", pt: 15, textAlign: "center" }}
      >
        Top Categories
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#5B5F62", pt: 1, textAlign: "center" }}
      >
        Find your filter get landed in your dream destination
      </Typography>
      <Container
        maxWidth={"lg"}
        sx={{
          py: 5,
          display: "flex",
          justifyContent: "center",
        //   flexDirection: "column",
        //   alignItems: "center",
        }}
      >
        <Tabs
          value={currentTab}
          onChange={(event, newValue) => setCurrentTab(newValue)}
        >
          {TABS.map((tab) => (
            <Button
              key={tab.value}
              variant={currentTab === tab.value ? "contained" : "outlined"}
              style={{
                bgcolor: currentTab === tab.value ? "#008080" : "transparent",
              }}
              sx={{ mx: 1 }}
              onClick={() => setCurrentTab(tab.value)}
            >
              {tab.label}
            </Button>
          ))}
        </Tabs>
      </Container>
      {TABS.map(
        (tab) =>
          tab.value === currentTab && (
            <Box key={tab.value} sx={{ mt: 5 }}>
              {tab.component}
            </Box>
          )
      )}
    </>
  );
};

export default CategoryPage;
