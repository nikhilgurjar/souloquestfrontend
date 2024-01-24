import { useSelector } from "@/redux/store";
import React from "react";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";
import { useChat } from "./ChatContext";

const MessageItem = ({ message }) => {
  const user_id = useSelector((state) => state.user.user_id);
  const { selectedConversation } = useChat();

  const sender = selectedConversation?.participants.find(
    (participant) => participant._id === message.senderId
  );
  const senderDetails =
    message.senderId === user_id
      ? {
          type: "me",
          avatar: sender?.profilePic,
          name: sender?.name,
        }
      : {
          avatar: sender?.profilePic,
          name: sender?.name,
        };
  const currentUser = senderDetails.type === "me";
  const isImage = message.contentType === "image";
  const firstName = senderDetails.name && senderDetails.name.split(" ")[0];

  return (
    <>
      {currentUser ? (
        <OutgoingMessage
          name={firstName}
          avatar={senderDetails.avatar}
          message={message?.text}
        />
      ) : (
        <IncomingMessage
          name={firstName}
          avatar={senderDetails.avatar}
          message={message?.text}
        />
      )}
    </>
  );
};

export default MessageItem;
