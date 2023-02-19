import { useNavigate } from 'react-router-dom' 
 
 export const Home = () => {
   const navigate = useNavigate()
    return (
    <>
        <div>Home Page</div>
        <div>
            <input type='search' placeholder='Search Products'/>
        </div>
        <button onClick={() => navigate('order-summary', { replace: true})}>Place order</button>
    </>
   )
 }
 