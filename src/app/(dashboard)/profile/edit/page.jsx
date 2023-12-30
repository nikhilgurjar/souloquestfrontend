import { Container } from '@mui/material';

import { auth } from '@/utils/authConfig';
import UserEditPage from './components/EditPage';
export default async function UserAccountPage() {
    const session = await auth();
    const profile = session?.user;
    
    return (
      <>
      <Container maxWidth={'lg'}>
       <UserEditPage user={profile} />
      </Container>
    </>
    );
}
