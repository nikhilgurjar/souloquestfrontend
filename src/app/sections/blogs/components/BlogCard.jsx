import { Box, Button, Card, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";

const BlogCard = ({ title, imgUrl, content, blogUrl }) => {
  return (
    <Card sx={{ width: "300px" }}>
      <Image
        width={300}
        height={200}
        src={imgUrl}
        alt={title}
        layout="responsive"
        objectFit="cover"
      ></Image>
      <Box px={2}>
        <Typography variant="h5" component={"h5"} py={1}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          component={"p"}
          sx={{ color: "#6C6C6C", pt: 1 }}
        >
          {content}
        </Typography>
        <Link
          variant="text"
          href={blogUrl}
          component={NextLink}
          underline="none"
          sx={{
            color: "primary.main",
            fontWeight: "600",
            textAlign: "left",
            textDecoration: "none",
            display: "inline-block",
            py: 2,
            "&:hover": {
              opacity: 0.8, // Change opacity on hover
            },
          }}
        >
          Read More
        </Link>
      </Box>
    </Card>
  );
};

export default BlogCard;
