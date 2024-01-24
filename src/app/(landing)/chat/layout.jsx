import React from 'react'
import { ChatProvider } from './components/ChatContext'

const Chatayout = ({children}) => {
  return (
    <ChatProvider>
    <div className="overflow-hidden rounded-lg bg-white shadow mt-16 mx-10 ">
    <div className="flex  w-full px-4 py-5 sm:p-6 chatContainer">
        {children}
        </div>
        </div>
        </ChatProvider>
  )
}

export default Chatayout