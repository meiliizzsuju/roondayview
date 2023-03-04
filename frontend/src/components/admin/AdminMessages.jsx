import React, { useEffect, useState } from 'react';
import axios from "axios";

import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    padding: 20
}));


export const AdminMessages = () => {
    const [messages, setMessages] = useState(null);
    
    const token = localStorage.getItem('auth-token');
  
    useEffect(()=>{
        axios.get(`/contact`,{headers: { Authorization: `Bearer ${token}` }}).then((response) => {
            setMessages(response.data);
        })
    });

    return (
    <div className='adminMessage'>
        <h1>View Messages</h1>
        <div className='adminMessage__box'>
            <Box>
                {
                    messages ? (
                        <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
                            {messages?.map((item) => (
                                <Item key={item._id} elevation={6}>
                                    {item.message}
                                    <Divider sx={{marginBottom:1,marginTop:3}}/>
                                    <b>{item.name}</b>
                                </Item>
                            ))}
                        </Masonry>
                    ) : ('Privilege content')
                }
            </Box>
        </div>
    </div>
    )
}
