import { Outlet } from "react-router-dom"
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";


const token = localStorage.getItem('token')

function PrivateRoute () {
    const location = useLocation();
    

    return (
        token ? <Outlet /> : <Navigate to='/Login' state={{ from: location }} replace />
        
        
    )
}

export default PrivateRoute