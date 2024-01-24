import { db } from "@/utils/firebaseConfig";
import { IconButton, InputAdornment, InputBase, Stack } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { BsSendFill } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineAttachFile,
} from "react-icons/md";
import { useChat } from "./ChatContext";
import { useSelector } from "@/redux/store";

const ChatFooter = () => {
  const { selectedConversation } = useChat();
  const user_id = useSelector((state) => state.user.user_id);
  const fileInputRef = React.useRef(null);
  const [message, setMessage] = React.useState("");

  const handleClickAttach = () => {
    fileInputRef.current?.click();
  };

  const handleSend = async () => {
    if (message.trim() === "") {
      toast.error("Please enter a message");
      return;
    }

    if (message && selectedConversation) {
      await addDoc(collection(db, "messages"), {
        text: message,
        createdAt: serverTimestamp(),
        roomid: selectedConversation?._id,
        senderId: user_id,
      });
    }
    setMessage("");
  };

  const handleKeyDown = async (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      await handleSend();
    }
  };

  return (
    <footer className="absolute bottom-0 w-3/4 border-t border-gray-300 bg-white p-4 w-full">
      <div className="flex items-center">
        <InputBase
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type a message"
          onKeyUp={handleKeyDown}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            pl: 1,
            height: 56,
            flexShrink: 0,
            borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
          startAdornment={
            <InputAdornment position="start">
              <IconButton size="small">
                <HiOutlineEmojiHappy />
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            <Stack direction="row" spacing={1} sx={{ flexShrink: 0, mr: 1.5 }}>
              <IconButton size="small" onClick={handleClickAttach}>
                <MdOutlineAddPhotoAlternate />
              </IconButton>

              <IconButton size="small" onClick={handleClickAttach}>
                <MdOutlineAttachFile />
              </IconButton>

              <IconButton size="medium" onClick={handleSend}>
                <BsSendFill />
              </IconButton>
            </Stack>
          }
        />

        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
      </div>
    </footer>
  );
};

export default ChatFooter;
