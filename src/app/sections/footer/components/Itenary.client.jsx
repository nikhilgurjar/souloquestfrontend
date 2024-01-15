import React from "react";
import { Link } from "@mui/material";
import NextLink from "next/link";

const ItenaryMap = () => {
  const BookItenary = [
    { path: "/", name: "Book Itenary" },
    { path: "/", name: "Travel Genie" },
    { path: "/", name: "Provide" },
    { path: "/", name: "Companion" },
  ];

  return (
    <>
      {BookItenary.map((item) => (
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

export default ItenaryMap;
