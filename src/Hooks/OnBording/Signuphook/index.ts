import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { paths } from '@/Constants/paths';

const useSignup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

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

    const handleSignup = async () => {
        const newErrors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        if (!name.trim()) {
            newErrors.name = '이름을 입력해주세요';
        }

        if (!email.trim()) {
            newErrors.email = '이메일을 입력해주세요.';
        } else if (!validateEmail(email)) {
            newErrors.email = '유효한 이메일 형식을 입력해주세요.';
        }

        if (!password.trim()) {
            newErrors.password = '비밀번호를 입력해주세요.';
        } else if (!validatePassword(password)) {
            newErrors.password = '비밀번호는 8자리 이상, 특수문자 포함이어야 합니다.';
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
        }

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
            navigate(paths.auth, { state: { name, email, password } });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSignup();
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const Backclick = () => {
        navigate(paths.login)
    }
    
    return {
        name,
        email,
        password,
        confirmPassword,
        showPassword,
        showConfirmPassword,
        errors,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleKeyDown,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        handleConfirmPasswordChange,
        handleSignup,
        Backclick
    }
}

export default useSignup;
