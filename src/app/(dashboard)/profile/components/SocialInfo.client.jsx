'use client';
import React from 'react'
import { useSelector } from "@/redux/store";
import ProfileSocialInfo from './ProfileSocialInfo'
const SocialInfo = () => {
    
    const user = useSelector((state) => state.user.user);
    
    return (
    <>
    {user?.socialMedia && (
          <ProfileSocialInfo socialLinks={user?.socialMedia} />
        )}
    </>
  )
}

export default SocialInfo