"use client";
import React, { useState } from "react";
// @mui
import {
  Box,
  Card,
  Link,
  Stack,
  Avatar,
  MenuItem,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
// @types
// components
// import Iconify from "../../../../components/iconify";
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
// import MenuPopover from "../../../../components/menu-popover";
import { CustomTextField } from "../../../../components/custom-input";
// import { useGetFriendsQuery } from "@/redux/services/friendApi";
import SearchNotFound from "./SearchNotFound";
import MenuPopover from "../../components/menu-popover/MenuPopover";
// ----------------------------------------------------------------------
export default function ProfileFriends() {
  // const { data: friends, error, isLoading } = useGetFriendsQuery("bulbasaur");
  const dummyFriends = [
    {
      id: 1,
      name: "John Doe",
      role: "Developer",
      avatarUrl: "https://example.com/avatar1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      avatarUrl: "https://example.com/avatar2.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Manager",
      avatarUrl: "https://example.com/avatar3.jpg",
    },
    // Add more dummy friends as needed
  ];
  const friends = dummyFriends;
  if (!friends || friends.length === 0)
    return (
      <>
        <Typography variant="h5" fontWeight={500}>No friends yet</Typography>
      </>
    );
  const [searchFriends, setSearchFriends] = useState("");
  const dataFiltered = applyFilter(friends, searchFriends);
  const isNotFound = !dataFiltered.length && !!searchFriends;
  const onSearchFriends = (e) => {
    setSearchFriends(e.target?.value?.trim());
  };
  return (
    <>
      <Stack
        spacing={3}
        justifyContent="space-between"
        direction={{ xs: "column", sm: "row" }}
        sx={{ my: 5 }}
      >
        <Typography variant="h4" fontWeight={500}>Friends</Typography>

        <CustomTextField
          width={220}
          size="small"
          value={searchFriends}
          onChange={onSearchFriends}
          placeholder="Search friends..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               
                <Box fontWeight={500}>
                  <IoSearch/>
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {isNotFound ? (
        <SearchNotFound query={searchFriends} sx={{ mt: 10 }} />
      ) : (
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
        >
          {dataFiltered.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </Box>
      )}
    </>
  );
}
function FriendCard({ friend }) {
  const { name, role, avatarUrl } = friend;
  const [openPopover, setOpenPopover] = useState(null);
  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };
  const handleClosePopover = () => {
    setOpenPopover(null);
  };
  const handleDelete = () => {
    handleClosePopover();
    console.log("DELETE", name);
  };
  const handleEdit = () => {
    handleClosePopover();
    console.log("EDIT", name);
  };
  return (
    <>
      <Card
        sx={{
          py: 5,
          display: "flex",
          position: "relative",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ width: 64, height: 64, mb: 3 }}
        />

        <Link variant="subtitle1" color="text.primary">
          {name}
        </Link>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 1, mt: 0.5 }}
        >
          {role}
        </Typography>

        <IconButton
          color={openPopover ? "inherit" : "default"}
          onClick={handleOpenPopover}
          sx={{ top: 8, right: 8, position: "absolute" }}
          size="small"
        >
          {/* <Iconify icon="eva:more-vertical-fill" /> */}
          < BsThreeDotsVertical/>
        </IconButton>
      </Card>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="right-top"
      >
        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
          {/* <Iconify icon="eva:trash-2-outline" /> */}
          <MdDelete/>
          Delete
        </MenuItem>

        <MenuItem onClick={handleEdit}>
          {/* <Iconify icon="eva:edit-fill" /> */}
          <RiEditFill/>
          Edit
        </MenuItem>
      </MenuPopover>
    </>
  );
}
// ----------------------------------------------------------------------
function applyFilter(inputData, query) {
  if (query) {
    return inputData.filter(
      (friend) => friend.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return inputData;
}
