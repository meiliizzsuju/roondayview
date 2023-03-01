import { Container } from '@mui/material';
import { useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../Auth';

import './login.css';

export const Login = () => {
  const [ user, setUser ] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'
 
  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, { replace: true } )
  }
  return (
    <div className='loginpage'>
      <Container>
        <div className='login__box'>
          <div className='login__form'>
            <input type='text' onChange={(e) => setUser(e.target.value)} placeholder='Username'></input>
            <button onClick={handleLogin} className="btn btn-form">Login</button>
            <a href="/register">
              Create new account
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
