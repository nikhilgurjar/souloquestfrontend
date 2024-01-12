"use client";
import React from "react";
import { Link } from "@mui/material";
import NextLink from "next/link";

const PagesMap = () => {
  const pages = [
    { path: "/", name: "Home it work" },
    { path: "/", name: "Pricing" },
    { path: "/", name: "Blog" },
    { path: "/", name: "Demo" },
  ];

  return (
    <>
      {pages.map((item) => (
        <Link
          variant="body1"
          component={NextLink}
          color={"#fff"}
          underline="none"
          href={item.path}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default PagesMap;
