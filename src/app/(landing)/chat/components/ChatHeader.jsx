"use client";
import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useChat } from "./ChatContext";
import { FaEllipsisVertical } from "react-icons/fa6";

const ChatHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const { hideMessages, selectedConversation } = useChat();
  return (
    <>
    <header className="bg-teal-400 p-4 text-gray-700">
      <div className="flex justify-between gap-3 items-center">
        <div className="flex justify-start gap-3 items-center">
          <IoArrowBackCircle
            size={24}
            className="block md:hidden"
            onClick={hideMessages}
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={selectedConversation.avatar}
            alt=""
          ></img>
          <h1 className="text-2xl font-semibold">
            {selectedConversation.name}
          </h1>
        </div>
        <div>
          <FaEllipsisVertical size={24} className="cursor-pointer" onClick={openDrawer}/>
        </div>
      </div>
    </header>

    {/* <div className={`absolute top-0 right-0 min-h-52 w-64 bg-gray-800 text-white transform ${isOpen ? '' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
        <p className="text-lg font-semibold">Drawer Content</p>
        <p>This is some content inside the drawer.</p>
        <button onClick={closeDrawer} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Close Drawer</button>
      </div>
    </div> */}
  </>
  );
};

export default ChatHeader;
