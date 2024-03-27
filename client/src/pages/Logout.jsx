import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../auth-context';


const Logout = () => {
    const navigate = useNavigate();
    const {RemoveTokenFromLS} = useAuthContext();
    useEffect(() => {
        RemoveTokenFromLS();
        
    }, [RemoveTokenFromLS])
    
  return navigate('/login');
}

export default Logout