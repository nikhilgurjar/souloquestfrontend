'use client';
import React from "react";
import ChatList from "./ChatList";
import ChatNavSearch from "./ChatNavSearch";
import { useChat } from "./ChatContext";

const Sidebar = () => {
  const { messageWindowHidden } = useChat();


  return (
    <div
      style={{ borderRightStyle: "1px solid" }}
      className={`w-full border-solid border-t-0 border-l-0 border-b-0   	border-r border-gray-300 md:w-1/4 ${!messageWindowHidden ? 'hidden md:block md:w-1/4' : 'md:w-1/4'}`}
    >
      <header className="flex items-center flex-col border-solid border-t-0 border-l-0 border-r-0 justify-between border-b border-gray-300 p-4 text-white">
        <h1 className="text-2xl font-semibold text-teal-700">Partners</h1>
        {/* <ChatNavSearch /> */}
      </header>
      {/* chatList */}
      <ChatList />
    </div>
  );
};

export default Sidebar;
