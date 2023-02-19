import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { NavBar } from './components/NavBar'
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { RestaurantStaff } from './components/RestaurantStaff';
import { FeaturedMenu } from './components/FeaturedMenu';
import { NewMenu } from './components/NewMenu';
import { Blogs } from './components/Blogs';
import { Reservations } from './components/Reservations';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blogs />} />
          <Route path='reservation' element={<Reservations />} />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='staff' element={<RestaurantStaff />}>
            <Route index element={<FeaturedMenu />} />
            <Route path='featured' element={<FeaturedMenu/>} />
            <Route path='new' element={<NewMenu/>} />
          </Route>
          <Route path="*" element={<NoMatch/>} />
        </Routes>
    </>
  );
}

export default App;