import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center h-screen items-center'>
            <button class="btn btn-ghost loading ">loading</button>
        </div>
    }

    if(!user){
        return <Navigate to='/admin-login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;