'use client';
import { getRooms } from "@/actions/partnerFinder";
import { useDispatch, useSelector } from "@/redux/store";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useChat } from "./ChatContext";

const ChatListItem = ({conversation}) => {

  const { selectedConversation, selectConversation } = useChat();

  const selectedChatId = selectedConversation?._id?.toString();

  let isSelected = +selectedChatId === conversation._id;

  if (!selectedChatId) {
    isSelected = false;
  }
  const handleSelectChat = (event) => {
    event.preventDefault();
    if (selectedChatId === conversation._id) {
      return;
    }
    selectConversation(conversation);
  };

  return (
    <div className={`mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100 `}
    id={conversation._id}
    onClick={handleSelectChat}
    >
      <div className="mr-3 h-12 w-12 rounded-full bg-gray-300">
        <img
        alt={conversation.name} src={conversation.avatar}
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{conversation.name}</h2>
        <p className="text-gray-600">{`${conversation.participants?.length} travellers`}!!</p>
      </div>
    </div>
  );
};

const ChatList = () => {

  const { chatList } = useChat()

  return (
    <div className="mb-9 h-screen overflow-y-auto p-3 pb-20">
      {chatList?.map((conversation) => (
        <ChatListItem key={conversation.id} conversation={conversation} />
      ))}
    </div>
  );
};

export default ChatList;
