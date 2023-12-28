'use client';
import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import { Container, Tab, Tabs, Box } from '@mui/material';
import { IoShareSocialSharp } from "react-icons/io5";
import { MdVpnKey, MdAccountCircle } from "react-icons/md";

import AccountGeneral from './components/AccountGeneral';
import AccountSocialLinks from './components/AccountSocialLinks';
import AccountChangePassword from './components/AccountChangePassword';
export default function UserAccountPage() {
    
  const [currentTab, setCurrentTab] = useState('general');
    const TABS = [
        {
            value: 'general',
            label: 'General',
            icon: <MdAccountCircle />,
            component: <AccountGeneral />,
        },
        {
            value: 'social_links',
            label: 'Social links',
            icon: <IoShareSocialSharp />,
            component: <AccountSocialLinks />,
        },
        {
            value: 'change_password',
            label: 'Change password',
            icon: <MdVpnKey />,
            component: <AccountChangePassword />,
        },
    ];
    return (<>
      <Head>
        <title> User: Account Settings | Minimal UI</title>
      </Head>

      <Container maxWidth={'lg'}>
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {TABS.map((tab) => (<Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value}/>))}
        </Tabs>

        {TABS.map((tab) => tab.value === currentTab && (<Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
        </Box>
        ))}
      </Container>
    </>);
}
