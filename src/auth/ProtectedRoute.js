import React, { useContext } from 'react'
import AuthContext from './AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {

    const { isAtuhenticated } = useContext(AuthContext);

  return isAtuhenticated ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute