import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const useSignup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = (password: string) => {
        const re = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };


    const clearErrorMessage = () => {
        setErrorMessage('');
    }
    const handleSignup = async () => {
        if (!name.trim()) {
            setErrorMessage('이름을 입력해주세요');
            setTimeout(clearErrorMessage, 3000);
            return;
        }
        if (!email.trim()) {
            setErrorMessage('이메일을 입력해주세요.');
            setTimeout(clearErrorMessage, 3000);
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('유효한 이메일 형식을 입력해주세요.');
            setTimeout(clearErrorMessage, 3000);
            return;
        }
        if (!password.trim()) {
            setErrorMessage('비밀번호를 입력해주세요.');
            setTimeout(clearErrorMessage, 3000);
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            setTimeout(clearErrorMessage, 3000);
        }
        if (!validatePassword(password)) {
            setErrorMessage('비밀번호는 8자리 이상, 특수문자 포함이어야 합니다.');
            setTimeout(clearErrorMessage, 3000);
        } else {
            navigate('/emailauthentication', { state: { name, email, password } });
            console.log(email, name, password);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSignup();
        }
    }
    
    return {
        name,
        email,
        password,
        showPassword,
        showConfirmPassword,
        errorMessage,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleKeyDown,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        handleConfirmPasswordChange,
        handleSignup,
    }
}

export default useSignup;