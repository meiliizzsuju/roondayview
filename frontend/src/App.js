import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import { NavBar } from './components/navbar/NavBar'
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { RestaurantStaff } from './components/RestaurantStaff';
import { FeaturedMenu } from './components/FeaturedMenu';
import { NewMenu } from './components/NewMenu';
import { Blogs } from './components/blog/Blogs';
import { BlogDetails } from './components/blog/BlogDetails';
import { Reservations } from './components/Reservations';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/admin/Admin';
import { Login } from './components/login/LogIn';
import { Profile } from './components/profile/Profile'
import { AuthProvider } from './components/Auth';
import { RequireAuth } from './components/RequireAuth';
import { RequireAuthAdmin } from './components/RequireAuthAdmin';
import StaffUser from './components/staffuser/StaffUser';
import Register from './components/register/Register';
import LogInAdmin from './components/login/LogInAdmin';
import { AdminUsers}  from './components/admin/AdminUsers';
import { AdminBlogs } from './components/admin/AdminBlogs';
import { AdminMessages } from './components/admin/AdminMessages';
const LazyContact = React.lazy(() => import('./components/contact/Contact'))

axios.defaults.baseURL = 'https://roondayview-production.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const theme = createTheme({
  palette: {
    primary: {
      light: '#050505',
      main: '#A9A9A9',
      dark: '#909090',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#050505',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* Lazy Loading for large files, message 'loading...' while about page is being loaded */}
            <Route path='contact' element={<React.Suspense fallback='Loading...'>
              <LazyContact />
            </React.Suspense>}
            />
            <Route path='blog' element={<Blogs />}/>
            <Route path='blog/:blogId' element={<BlogDetails />} /> 
            <Route path='reservation' element={<Reservations />} />
            <Route path='order-summary' element={<OrderSummary />} />
            <Route path='staff-user' element={<StaffUser />} />
            
            <Route path='admin' element={
              <RequireAuthAdmin>
                <Admin />
              </RequireAuthAdmin>
            } 
            >
              <Route path='users' element={<AdminUsers />} />
              <Route path='blogs' element={<AdminBlogs />} />
              <Route path='messages' element={<AdminMessages/>} />
            </Route>
            <Route path='users' element={<Users />}>  
              <Route path=':userId' element={<UserDetails />} />
            </Route>
            <Route 
              path="profile" 
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
                } 
            />
            <Route path='login' element={<Login />} />
            <Route path='login-admin' element={<LogInAdmin />} />
            <Route path='register' element={<Register />} />
            <Route path='staff' element={<RestaurantStaff />}>
              <Route index element={<FeaturedMenu />} />
              <Route path='featured' element={<FeaturedMenu/>} />
              <Route path='new' element={<NewMenu/>} />
            </Route>
            <Route path="*" element={<NoMatch/>} />
          </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;