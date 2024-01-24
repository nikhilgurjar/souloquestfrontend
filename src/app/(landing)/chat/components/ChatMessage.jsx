"use client";
import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import { useChat } from "./ChatContext";
import MessageList from "./MessageList";

const ChatMessage = () => {
  const { selectedConversation, messageWindowHidden } = useChat();

  return (
    <div
      className={`w-0 messageContainer relative flex-1 md:w-0 flex-col ${
        messageWindowHidden
          ? "hidden md:flex md:flex-1 md:w-3/4"
          : "flex-1 md:flex md:w-3/4"
      }`}
    >
      {selectedConversation && (
        <>
          <ChatHeader />
          <MessageList />
          <ChatFooter />
        </>
      )}
    </div>
  );
};

export default ChatMessage;
