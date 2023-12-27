'use client';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { setUser } from '@/redux/features/user.slice';
const PrivateLayout = ({ children }) => {
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            redirect('/login');
        }
        else {
            setUser(user);
        }
    }, []);

     return (<>{children}</>);
};
export default PrivateLayout;
