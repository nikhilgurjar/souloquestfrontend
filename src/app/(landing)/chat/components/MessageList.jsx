"use client";
import React from "react";
import MessageItem from "./MessageItem";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import { useChat } from "./ChatContext";

const MessageList = () => {
  const [messages, setMessage] = React.useState([]);
  const onOpenLightbox = () => {};
  const conversationListRef = collection(db, "messages");
  const { selectedConversation } = useChat();

  React.useEffect(() => {
    const queryRooms = query(
      conversationListRef,
      where("roomid", "==", selectedConversation?._id),
      orderBy("createdAt", "asc")
    );
    onSnapshot(queryRooms, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        messages.push({ ...data, id: doc.id });
      });
      setMessage(messages);
    });
  }, [selectedConversation]);

  return (
    <div className="overflow-y-auto p-4 pb-36">
      {messages?.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          participants={selectedConversation.participants}
          onOpenLightbox={onOpenLightbox}
        />
      ))}
    </div>
  );
};

export default MessageList;
