import React, { useState } from 'react';

import { Autocomplete, TextField} from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import {userMockData} from '../mockdata/mockData';

import '../components/css/admin.css'

export const Admin = () => {
  const [selectUser, setSelectUser] = useState('');
  const user_list = userMockData;

  console.log(selectUser); // selected user

  
  return (
    <div className='adminuser'>
      Admin Manage User
      <div className='adminuser__form'>
        <div className='form-control relative'>
          <label htmlFor="restaurantdetails_tags">Search User</label>
          <Autocomplete
            id="userlist"
            sx={{ width: 300 }}
            options={user_list}
            getOptionLabel={(option) => option.username}
            onChange={(event, value) => setSelectUser(value)}
            renderInput={(params) => (
              <TextField {...params} label="search here" margin="normal" />
            )}
            renderOption={(props, option, { inputValue }) => {
              const matches = match(option.username, inputValue, { insideWords: true });
              const parts = parse(option.username, matches);

              return (
                <li {...props}>
                  <div>
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{
                          fontWeight: part.highlight ? 700 : 400,
                        }}
                      >
                        {part.text}
                      </span>
                    ))}
                  </div>
                </li>
              );
            }}
          />
        </div>
      </div>
    </div>
  )
}
