// @mui
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  Stack,
  Rating,
} from "@mui/material";

// ----------------------------------------------------------------------

const RATINGS = ["4", "3", "2"];

export default function FilterByRating({
  filterRating,
  onChangeRating,
  ...other
}) {
  return (
    <Stack {...other}>
      <RadioGroup value={filterRating} onChange={onChangeRating}>
        <Stack spacing={2} alignItems="flex-start">
          {RATINGS.map((rating) => (
            <FormControlLabel
              key={rating}
              value={rating}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    ...(filterRating === rating && {
                      fontWeight: "fontWeightSemiBold",
                    }),
                  }}
                >
                  <Rating
                    size="small"
                    value={Number(rating)}
                    readOnly
                    sx={{
                      mr: 1,
                      ...(filterRating === rating && {
                        opacity: 0.48,
                      }),
                    }}
                  />
                  & Up
                </Stack>
              }
              sx={{
                m: 0,
                "&:hover": { opacity: 0.48 },
              }}
            />
          ))}
        </Stack>
      </RadioGroup>
    </Stack>
  );
}
