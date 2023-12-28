import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BlogCard = ({ title, imgUrl, content,blogUrl }) => {
  return (
    <Card sx={{width:"300px"}}>
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
        <Button
          variant="text"
          href={blogUrl}
          sx={{ color: "#008080", fontWeight: "500", py: 2 }}
        >
          Read More
        </Button>
      </Box>
    </Card>
  );
};

export default BlogCard;
