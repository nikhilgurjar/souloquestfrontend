'use client';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box'
import {MdVpnKey, MdAccountCircle} from 'react-icons/md';
import {IoShareSocialSharp} from 'react-icons/io5';
import dynamic from 'next/dynamic';
import AccountGeneral from './AccountGeneral';
const AccountSocialLinks = dynamic(() => import('./AccountSocialLinks'));
const AccountChangePassword = dynamic(() => import('./AccountChangePassword'));

export default function UserEditPage({user}) {
    
  const [currentTab, setCurrentTab] = useState('general');
  const TABS = [
        {
            value: 'general',
            label: 'General',
            icon: <MdAccountCircle />,
            component: <AccountGeneral user={user}/>,
        },
        {
            value: 'social_links',
            label: 'Social links',
            icon: <IoShareSocialSharp />,
            component: <AccountSocialLinks socialLinks = {user?.socialMedia}/>,
        },
        {
            value: 'change_password',
            label: 'Change password',
            icon: <MdVpnKey />,
            component: <AccountChangePassword />,
        },
    ];
    return (
      <>
      <Container maxWidth={'lg'}>
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {TABS.map((tab) => (<Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value}/>))}
        </Tabs>

        {TABS.map((tab) => tab.value === currentTab && (<Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
        </Box>
        ))}
      </Container>
    </>
    );
}
