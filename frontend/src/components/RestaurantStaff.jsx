import { Link, Outlet } from 'react-router-dom'

export const RestaurantStaff= () => {
  return (
    <>
        <nav>
            <Link to='featured'>Featured Menu</Link>
            <Link to='new'>New Menu</Link>
        </nav>
        <Outlet/> 
    </>
  )
}