import { Box } from '@mui/material'
import { Container } from '@mui/system'
import { Outlet, useSearchParams } from 'react-router-dom';
import {userMockData} from '../mockdata/mockData';

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    const user_list = userMockData

  return (
    <div className='userpage'>
      <Container>
        <Outlet/>
        {
          user_list.map((item,i)=>(
            <p key={item+i}>{item.username}</p>
          ))
        }
        <div>
            <button onClick={() => setSearchParams({ filter: 'active'})}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        {
            showActiveUsers ? (<h2>Showing active users</h2>) : (<h2>Showing all users</h2>)
        }
      </Container>
    </div>
  )
}

 