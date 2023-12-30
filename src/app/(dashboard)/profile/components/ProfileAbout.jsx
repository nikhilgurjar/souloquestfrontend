import React from "react";
import { Card, CardHeader, IconButton, Stack, Typography } from "@mui/material";
import FaLocationPin from "@@react-icons/all-files/all-files/fa6/FaLocationPin";
import MdEmail from "@react-icons/all-files/md/MdEmail"
import IoSchool from "@react-icons/all-files/io5/IoSchool";
import FaBuildingUser from "@react-icons/all-files/fa6/FaBuildingUser";
const ProfileAbout = ({
  about,
  country,
  email,
  city,
  state,
  company,
  education,
}) => {
  const icons = {
    About: "",
    Country: <FaLocationPin />,
    Email: <MdEmail />,
    Company: <FaBuildingUser/>,
    Education: <IoSchool/>,
  };

  let data = [
    { key: "About", value: about },
    { key: "Country", value: "Live at ", dynamic: city!==undefined ? city+", "+state: undefined },
    { key: "Email", value: email },
    { key: "Company", value: "Working at ", dynamic: company },
    { key: "Education", value: education },
  ];

  data = data.filter(({ value, dynamic }) => (value !== undefined && dynamic!== undefined));

  return (
    <section className="relative w-full">
      <Card>
        <CardHeader title="About" />
        <Stack spacing={2} sx={{ p: 3 }}>
          
          {data.length!==0 ?
            (data
              ?.map(({ key, value, dynamic }) => (
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                  <IconButton
                    style={{
                      marginRight: 2,
                      flexShrink: 0,
                      color: "#000",
                      fontSize: "16px",
                    }}
                  >
                    {icons[key]}
                  </IconButton>
                  <Typography variant="body1" color="initial" key={key}>
                    {value}
                    {dynamic && (
                      <span style={{ fontWeight: "500" }}>{dynamic}</span>
                    )}
                  </Typography>
                </Stack>
              ))
            )
            :
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Typography variant="h6" sx={{
                color: 'grey.700'
              }}>
                No Information Provided
              </Typography>
              </Stack>
            }
        </Stack>
      </Card>
    </section>
  );
};

export default ProfileAbout;
