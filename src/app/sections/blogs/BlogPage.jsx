"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./components/BlogCard";
import image1 from "../../../../public/images/blogimg/image1.png";
import image2 from "../../../../public/images/blogimg/image2.png";
import image3 from "../../../../public/images/blogimg/image3.png";

const BlogPage = () => {
  const dummyData = [
    {
      title: "Blog 1",
      imgUrl: image1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      blogUrl: "/",
    },

    {
      title: "blog 2",
      imgUrl: image2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      blogUrl: "/",
    },
    {
      title: "Blog 3",
      imgUrl: image3,
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
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h3"
        sx={{
          color: "primary.main",
          fontSize: { xs: "2.5rem", md: "2.8rem" },
          textAlign: "center",
          fontWeight: 500,
          py: 5,
        }}
      >
        Read Latest Blogs
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          py: 10,
          flexWrap: "wrap",
          width: "100%",
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
