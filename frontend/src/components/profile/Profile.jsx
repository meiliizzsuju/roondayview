import { useAuth } from "../Auth"
import { useNavigate } from "react-router-dom"
import { Container } from "@mui/material"

import './profile.css';

export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
    <div className="profilepage">
        <Container>
            <div className="profilepage__topbar">
                Welcome {auth.user}
                <button onClick={handleLogout} className="btn">Logout</button>
            </div>
        </Container>
    </div>
    )
}
