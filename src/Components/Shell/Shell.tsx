import React, { useEffect } from 'react';
import Navbar from '../common/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import * as S from './Shell.style';
import useSWR from 'swr';
import { useUserDispatchContext } from '@/Contexts/userContext';
import { getMyInfos } from '@/Api/profile';

const Shell = () => {
    const setCurrentUser = useUserDispatchContext();

    const { data: user } = useSWR('user', getMyInfos);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    return (
        <S.HomeContainer>
            <Navbar />
            <Outlet />
        </S.HomeContainer>
    );
};

export default Shell;