import React, { useEffect, useState } from 'react';
import { Navigate, Route, PathRouteProps, useNavigate } from 'react-router-dom';
import { paths } from '@/Constants/paths';
import { clearAccessToken, SeugiCustomAxios } from '@/Api/SeugiCutomAxios';

interface Props extends PathRouteProps {
}

const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;

    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const exp = decodedPayload.exp;

    if (Date.now() >= exp * 1000) {
        return true;
    }

    return false;
};

const ProtectedRoute = (props: Props) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        let interceptor: number | null = null;
        interceptor = SeugiCustomAxios.interceptors.response.use(
            (res) => res,
            (err) => {
                if (err.response && err.response.status) {
                    switch (err.response.status) {
                        case 401:
                            setIsAuthenticated(false);
                            break;
                        default:
                            return Promise.reject(err);
                    }
                }
                return Promise.reject(err);
            },
        );
        return () => {
            if (interceptor === null){
                return;
            }
            SeugiCustomAxios.interceptors.response.eject(interceptor);
        };
    }, [navigate]);

    if (!isAuthenticated) {
        return <Navigate to={paths.login} />;
    }

    return <Route {...props} />;
};

export default ProtectedRoute;