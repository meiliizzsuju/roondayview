import { Container } from '@mui/system'
import { Outlet } from 'react-router-dom';

export const Users = () => {

  return (
    <div className='userpage'>
      <Container>
        <Outlet/>
      </Container>
    </div>
  )
}

 