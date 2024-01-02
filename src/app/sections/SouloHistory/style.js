import { styled } from "@mui/material";

export const StyledRoot = styled("div")(({ backgroundImage }) => ({
  backgroundImage: `url('${backgroundImage}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  overflow: "hidden",
}));