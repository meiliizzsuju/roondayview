import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { NavBar } from './components/navbar/NavBar'
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { RestaurantStaff } from './components/RestaurantStaff';
import { FeaturedMenu } from './components/FeaturedMenu';
import { NewMenu } from './components/NewMenu';
import { Blogs } from './components/Blogs';
import { BlogDetails } from './components/BlogDetails';
import { Reservations } from './components/Reservations';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Login } from './components/login/LogIn';
import { Profile } from './components/Profile'
import { AuthProvider } from './components/Auth';
import { RequireAuth } from './components/RequireAuth';
const LazyContact = React.lazy(() => import('./components/contact/Contact'))

function App() {
  return (
    <AuthProvider>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Lazy Loading for large files, message 'loading...' while about page is being loaded */}
          <Route path='contact' element={<React.Suspense fallback='Loading...'>
            <LazyContact />
          </React.Suspense>}
           />
          <Route path='blog' element={<Blogs />}>
            <Route path=':blogId' element={<BlogDetails />} /> 
          </Route>
          <Route path='reservation' element={<Reservations />} />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='users' element={<Users />}>  
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route 
            path="profile" 
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
              } 
          />
          <Route path='log-in' element={<Login />} />
          <Route path='staff' element={<RestaurantStaff />}>
            <Route index element={<FeaturedMenu />} />
            <Route path='featured' element={<FeaturedMenu/>} />
            <Route path='new' element={<NewMenu/>} />
          </Route>
          <Route path="*" element={<NoMatch/>} />
        </Routes>
    </AuthProvider>
  );
}

export default App;