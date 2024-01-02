import { Box, Button, Card, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";

const BlogCard = ({ title, imgUrl, content, blogUrl }) => {
  return (
    <Card sx={{ width: "300px"}}>
      <Image width={300} height={250} src={imgUrl} alt={title}></Image>
      <Box px={2}>
        <Typography variant="h5" component={"h5"} py={1}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          component={"p"}
          sx={{ color: "#6C6C6C", pt: 2 }}
        >
          {content}
        </Typography>
        <Link
          variant="text"
          href={blogUrl}
          component={NextLink}
          underline="none"
          sx={{
            color: "#008080",
            fontWeight: "600",
            textAlign: "left",
            textDecoration: "none",
            display:"block",
            py:2,
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
