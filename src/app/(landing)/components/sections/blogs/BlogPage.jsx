"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ComingSoonView from "@/common/ComingSoonView";

const BlogPage = () => {

  return (
    <Container sx={{  py: 5 }}>
      <Typography
        variant="h3"
        sx={{
          color: "primary.main",
          fontSize: { xs: "2.5rem", md: "2.8rem" },
          textAlign: "center",
          fontWeight: 500,
          py:5
        }}
      >
        Read Latest Blogs
      </Typography>
      {/* <Box
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
      </Box> */}
      <ComingSoonView/>
    </Container>
  );
};

export default BlogPage;
