'use client';
import React from "react";
import { Card, CardHeader, IconButton, Stack, Typography } from "@mui/material";
import {FaLocationPin} from "react-icons/fa6";
import {MdEmail} from "react-icons/md"
import {IoSchool} from "react-icons/io5";
import {FaBuildingUser} from "react-icons/fa6";
import { useSelector } from "@/redux/store";

const ProfileAbout = () => {

  const user = useSelector((state) => state.user.user);
  const icons = {
    About: "",
    Country: <FaLocationPin />,
    Email: <MdEmail />,
    Company: <FaBuildingUser/>,
    Education: <IoSchool/>,
  };
  

  const [data, setData]  = React.useState([]);

  React.useEffect(() => {
     let {email, about, city, state, company, education} = user;
     console.log(user, user.email, "email value")
    let newdata = [
      { key: "About", value: user?.about, dynamic: '' },
      { key: "Country", value: "Live at ", dynamic: user?.city!==undefined ? user?.city+", "+user?.state: undefined },
      { key: "Email", value: user?.email, dynamic: '' },
      { key: "Company", value: "Working at ", dynamic: user?.company },
      { key: "Education", value: user?.education, dynamic: '' },
    ];
    newdata = newdata.filter(({ value, dynamic }) => (value !== undefined && dynamic!== undefined));
    console.log(newdata, 'new data')
    setData(newdata);
  }, [user]);
  
  

  return (
    <section className="relative w-full">
      <Card>
        <CardHeader title="About" />
        <Stack spacing={2} sx={{ p: 3 }}>
          
          {data.length!==0 ?
            (data
              ?.map(({ key, value, dynamic }) => (
                <Stack spacing={1} direction={"row"} key={key} alignItems={"center"}>
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
