import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Admin from './container/admin/Admin';
import Contact from './container/contact/Contact';

import Home from './container/home/Home';
import Login from './container/login/Login';
import RestaurantStaff from './container/restaurantStaff/RestaurantStaff';
import User from './container/user/User';

// functional component
function App() {
  
  return (
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/restaurant-staff' element={<RestaurantStaff/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  );
}

export default App;
