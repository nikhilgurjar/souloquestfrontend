'use client'; // Optional, depending on your setup
import React, { useState, useEffect } from 'react';
import ChatElement from './ChatElement';
import { getRooms } from '@/actions/partnerFinder';
import { toast } from 'react-toastify';

const ContactList = () => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await getRooms();
        setChatList(response.rooms);
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };

    fetchConversations(); // Call the function directly
  }, []);

  return (
    <>
      {chatList.map((conversation) => (
        <ChatElement key={conversation.id} conversation={conversation} />
      ))}
    </>
  );
};

export default ContactList;
