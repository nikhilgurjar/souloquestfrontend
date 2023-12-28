// @mui
import React from "react";
import { Link, Card, CardHeader, Stack, IconButton } from "@mui/material";
// _mock
// @types
// components
// import Iconify from "../../../../../../components/iconify";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
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
  return (
    <Card>
      <CardHeader title="Social" />

      <Stack spacing={2} sx={{ p: 3 }}>
        {socialLinks &&
          Object.entries(socialLinks)
            .filter((value) => value != undefined)
            .map(([key, value]) => (
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
            ))}
      </Stack>
    </Card>
  );
}
