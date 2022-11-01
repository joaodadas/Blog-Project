import { Outlet } from "react-router-dom"
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";



function PrivateRoute () {
    const location = useLocation();
    const token = localStorage.getItem('token')
    

    return (
        token ? <Outlet /> : <Navigate to='/Login' state={{ from: location }} replace />
        
        
    )
}

export default PrivateRoute