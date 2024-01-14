// @mui
import Image from "@/components/image";
import { Box, Card, Typography } from "@mui/material";

// @types
// import Image from "../../../../../components/image";
export default function ReviewCard({ review }) {
  return (
    <Card>
      <Box sx={{ p: 1 }}>
        <Image
          // width={20}
          // height={20}
          alt="post media"
          src={review.placeinfo.image||''}
          // src=""
          ratio="16/9"
          sx={{ borderRadius: 1 }}
        />
      </Box>

      <Typography
        sx={{
          p: (theme) => theme.spacing(3, 3, 2, 3),
        }}
      >
        {review.review}
      </Typography>
    </Card>
  );
}
