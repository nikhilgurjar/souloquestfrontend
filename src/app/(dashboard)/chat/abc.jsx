import React from 'react'
import ChatSidebar from './components/Sidebar'
import ChatComponent from './components/ChatComponent';
import {IoArrowBackCircle} from "react-icons/io5";

const ChatPage = () => {

  // const sideBarRef = React.useRef();

  // const handleToggle = () =>{
  //   sideBarRef.current.classList.toggle('active');
  // }
// https://play.tailwindcss.com/V3iOQoxto3?size=1022x720
  return (
    <>
    {/* <ChatSidebar/> */}
    <div className="flex h-screen overflow-hidden w-full">
    {/* Sidebar  */}
  <div style={{borderRightStyle: '1px solid'}}
  className="w-full border-solid border-t-0 border-l-0 border-b-0   	border-r border-gray-300 bg-white md:w-1/4">
  <header className="flex items-center border-solid border-t-0 border-l-0 border-r-0 justify-between border-b border-gray-300 bg-white p-4 text-white">
  <h1 className="text-2xl font-semibold text-teal-700">Partners</h1>
  </header>
  {/* chatList */}
  <div className="mb-9 h-screen overflow-y-auto p-3 pb-20">
      <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
        <div className="mr-3 h-12 w-12 rounded-full bg-gray-300">
          <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="h-12 w-12 rounded-full" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Alice</h2>
          <p className="text-gray-600">Hoorayy!!</p>
        </div>
      </div>
      </div>
  </div>

  {/* chat area */}
  <div className="hidden flex-1 md:flex flex-col border-l border-gray-500">
    {/* chat header */}
  

    {/* chat message */}
    

    
    </div>

    </div>
    <ChatComponent/>
    </>
  )
}

export default ChatPage