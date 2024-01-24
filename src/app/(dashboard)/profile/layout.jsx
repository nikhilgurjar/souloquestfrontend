"use client";
import {
  Box,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from '@/redux/store';
import { SkeletonProductItem } from '@/components/skeleton';
import { useRouter } from 'next/navigation';
import { get_profile } from '@/actions/auth';
import { setUser } from '@/redux/slices/user';

const ProfileLayout = ({ children }) => {

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const router = useRouter();
    const  [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
      console.log(user);
      if(!user){
       
          setLoading(true);
          get_profile()
        .then((fetchedUser) => {
          console.log(fetchedUser);
          dispatch(setUser({user: fetchedUser.data}));
        })
        .catch((error) => {
          console.log(error);
          router.push('/login');
        })
        .finally(() => {
          setLoading(false);
        });
        
    } 
    },
    [user])
  
    const shouldRenderChildren = user && !loading; 

  return (
    <>
    {shouldRenderChildren && (
    children
    )}
    {!shouldRenderChildren && <SkeletonProductItem />} 
     </>
  );
};

export default ProfileLayout;
