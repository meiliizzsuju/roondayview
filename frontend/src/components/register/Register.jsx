import { Box, Container, InputAdornment, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import './register.css';

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);
    const [userExist, setUserExist] = useState(false);

    const handleSubmit = () => {
        setSubmit(true)
        axios.post('/users/register', {
            name: name,
            username: username,
            password: password
        })
        .then(function (response) {
            if(response.status === 200){
                alert('Register completed');
                setSubmit(false) 
                setUserExist(false)
                setName('')
                setUsername('')
                setPassword('')

                navigate('/login')
            }
        })
        .catch(function (error) {
            if(error.response.status === 400){
                alert(error.response.data['data'])
                setUserExist(true)
            }
        });

    }

    
    return (
    <div className='register'>
        <Container>
            <div className='register__form'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}

                    autoComplete="off"
                >
                    <TextField id="regis-name" label="Name" variant="filled" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        error={submit===true&&name === ''}
                    />
                    <TextField id="regis-username" label="Username" variant="filled" 
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        error={((submit===true&&username === '') || userExist===true)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            ),
                            }
                        }
                    />
                    <TextField 
                        id="regis-password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        autoComplete="current-password"
                        variant="filled"
                        error={submit===true&&password === ''}
                    />

                    <button className='btn'
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </Box>
            </div>
        </Container>
    </div>
  )
}

export default Register