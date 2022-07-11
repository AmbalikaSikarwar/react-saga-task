import React from 'react'
import { Navigate,Outlet} from 'react-router-dom'

export default function Protected({ children }) {
    let user = localStorage.getItem('Token');
    if(!user){
        return<Navigate to= "/" />;
    }
    return children ? children : <Outlet />
};
