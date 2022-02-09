import { Navigate } from 'react-router-dom';

const AuthRoute = ({ authUser, element }) => {
    return (
    authUser ? element : <Navigate replace to='/login' />
    );
}

export default AuthRoute;
