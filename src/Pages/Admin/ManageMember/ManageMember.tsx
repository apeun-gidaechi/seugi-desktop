import React, { useState, useEffect } from 'react';
import * as S from './ManageMember.style';
import Setting from '@/Pages/Admin/Setting/Setting';
import SettingHeader from '@/Pages/Admin/SettingHeader/SettingHeader';
import SearchImg from '@/Assets/image/adminsetting/search_line.svg';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import Cookies from 'js-cookie';

const AdminGeneral = () => {
    const workspaceId = Cookies.get('workspaceId');
    const [selectedOption, setSelectedOption] = useState<'teacher' | 'student'>('teacher');
    const [teachers, setTeachers] = useState<string[]>([]); // 선생님 목록 상태
    const [students, setStudents] = useState<string[]>([]); // 학생 목록 상태

    // 옵션 변경 핸들러
    const handleOptionChange = (option: 'teacher' | 'student') => {
        setSelectedOption(option);
    };

    // 멤버 정보 가져오기
    const handleGetMembers = async () => {
        try {
            const res = await SeugiCustomAxios.get('/members', {
                
            });

            const members = res.data; // 응답 데이터를 변수에 저장

            // 선생님 필터링
            const teachersList = members.filter((member: any) => member.spot === '선생님');
            setTeachers(teachersList.map((teacher: any) => teacher.nick)); // 닉네임만 추출하여 상태에 저장

            // 학생 필터링
            const studentsList = members.filter((member: any) => member.spot === '학생');
            setStudents(studentsList.map((student: any) => student.nick)); // 닉네임만 추출하여 상태에 저장

        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        handleGetMembers(); // 컴포넌트가 마운트될 때 멤버 정보 가져오기
    }, []);

    return (
        <S.AdminGeneralMain>
            <Setting />
            <S.SettingMain>
                <SettingHeader />
                <S.SettingContainer>
                    <S.TitleDiv>
                        <S.Title>멤버 관리</S.Title>
                    </S.TitleDiv>
                    <S.SearchDiv>
                        <S.ToggleContainer>
                            <S.ToggleButton selectedOption={selectedOption} />
                            <S.Option
                                isSelected={selectedOption === 'teacher'}
                                onClick={() => handleOptionChange('teacher')}
                            >
                                선생님
                            </S.Option>
                            <S.Option
                                isSelected={selectedOption === 'student'}
                                onClick={() => handleOptionChange('student')}
                            >
                                학생
                            </S.Option>
                        </S.ToggleContainer>
                        <S.SearchMemberDiv>
                            <S.SearchIcon src={SearchImg} />
                            <S.SearchInput
                                placeholder="멤버 검색"
                            />
                        </S.SearchMemberDiv>
                    </S.SearchDiv>
                    <S.MemberDiv>
                        {selectedOption === 'teacher' ? (
                            teachers.length > 0 ? (
                                teachers.map((teacher, index) => (
                                    <S.MemberContent key={index}>{teacher}</S.MemberContent>
                                ))
                            ) : (
                                <S.MemberContent>선생님 목록이 없습니다.</S.MemberContent>
                            )
                        ) : (
                            students.length > 0 ? (
                                students.map((student, index) => (
                                    <S.MemberContent key={index}>{student}</S.MemberContent>
                                ))
                            ) : (
                                <S.MemberContent>학생 목록이 없습니다.</S.MemberContent>
                            )
                        )}
                    </S.MemberDiv>
                </S.SettingContainer>
            </S.SettingMain>
            <S.Right />
        </S.AdminGeneralMain>
    );
};

export default AdminGeneral;
