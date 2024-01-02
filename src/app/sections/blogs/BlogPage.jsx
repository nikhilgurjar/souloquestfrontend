"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./components/BlogCard";

const BlogPage = () => {
  const dummyData = [
    {
      title: "Blog 1",
      imgUrl: "/",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      blogUrl: "/",
    },

    {
      title: "blog 2",
      imgUrl: "/",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      blogUrl: "/",
    },
    {
      title: "Blog 3",
      imgUrl: "/",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      blogUrl: "/",
    },
  ];

  // Add text ellipsis for content
  const getTruncatedContent = (content, maxLength) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };
  const maxLength = 100;

  return (
    <Container sx={{ height: { md: "100vh" }, py: 10}}>
      <Typography
        variant="h3"
        sx={{
          color: "#008080",
          fontSize: { xs: "2.5rem", md: "2.8rem" },
          textAlign: "center",
        }}
      >
        Read Latest Blogs
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mt: 10,
          flexWrap: "wrap",
          width:"100%"
        }}
      >
        {dummyData.map((item) => (
          <BlogCard
            title={item.title}
            imgUrl={item.imgUrl}
            content={getTruncatedContent(item.content, maxLength)}
            blogUrl={item.blogUrl}
          />
        ))}
      </Box>
    </Container>
  );
};

export default BlogPage;
