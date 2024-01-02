// @mui
import React from "react";
import { Link, Card, CardHeader, Stack, IconButton, Typography } from "@mui/material";

import {FaFacebook, FaInstagram, FaLinkedin, FaTwitterSquare} from "react-icons/fa";


const socialMediaIcons = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitterSquare />,
};
const socialMediaColors = {
  facebook: "#1877F2",
  instagram: "#E02D69",
  linkedin: "#0A66C2",
  twitter: "#00AAEC",
};
export default function ProfileSocialInfo({ socialLinks }) {
  const filteredSocialLinks = Object.entries(socialLinks).filter((value) => value != undefined);

  return (
    <Card>
      <CardHeader title="Social" />

      <Stack spacing={2} sx={{ p: 3 }}>
        {filteredSocialLinks.length!==0 ?
         
         (filteredSocialLinks?.map(([key, value]) => (
              <Stack
                key={key}
                direction="row"
                sx={{ wordBreak: "break-all", alignItems: "center" }}
              >
               
                <IconButton
                  
                  style={{
                    marginRight: 2,
                    flexShrink: 0,
                    color: socialMediaColors[key],
                  }}
                >
                  {socialMediaIcons[key]}
                </IconButton>
                <Link component="span" variant="body2" color="text.primary">
                  {value}
                </Link>
              </Stack>
            ))):
          (
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
            <Typography variant="h6" sx={{
              color: 'grey.700'
            }}>
              No Information Provided
            </Typography>
            </Stack>
          )
          }
      </Stack>
    </Card>
  );
}
