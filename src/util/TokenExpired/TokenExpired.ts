
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SessionManagerProps {
    token: string | null;
    clearAccessToken: () => void;
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

const Session = ({ token, clearAccessToken }: SessionManagerProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isTokenExpired(token)) {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            clearAccessToken();
            navigate('/');
        }
    }, [token, navigate, clearAccessToken]);

    return null;
};

export default Session;
