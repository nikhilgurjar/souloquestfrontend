'use client';
import { Container } from '@mui/material';
import UserEditPage from './components/EditPage';
export default function UserAccountPage() {
    return (
      <>
      <Container maxWidth={'lg'}>
       <UserEditPage />
      </Container>
    </>
    );
}
