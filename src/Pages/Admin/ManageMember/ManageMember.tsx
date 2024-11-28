import React, { useState, useEffect } from 'react';
import * as S from './ManageMember.style';
import Setting from '@/Pages/Admin/Setting/Setting';
import SettingHeader from '@/Pages/Admin/SettingHeader/SettingHeader';
import SearchImg from '@/Assets/image/adminsetting/search_line.svg';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import Cookies from 'js-cookie';
import Avatar from '@/Assets/image/adminsetting/Avatar.svg';
import MiddleAdminIcon from '@/Assets/image/adminsetting/middleAdmin.svg';
import AdminIcon from '@/Assets/image/adminsetting/adminIcon.svg';
import Dot from '@/Assets/image/adminsetting/Dot.svg'
import Dialog from '@/Pages/Admin/ManageMember/Dialog/Dialog'

type Permission = 'ADMIN' | 'MIDDLEADMIN' | 'TEACHER' | 'STUDENT';

const AdminGeneral = () => {
    const workspaceId = Cookies.get('workspaceId');
    const [selectedOption, setSelectedOption] = useState<'teacher' | 'student'>('teacher');
    const [students, setStudents] = useState<{ id: string; name: string; picture: string; permission: Permission }[]>([]);
    const [teachers, setTeachers] = useState<{ id: string; name: string; picture: string; permission: Permission }[]>([]);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedMember, setSelectedMember] = useState<{
        id: string;
        name: string;
        picture: string;
        permission: Permission;
    } | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleOptionChange = (option: 'teacher' | 'student') => {
        setSelectedOption(option);
    };

    const handleGetMembers = async () => {
        try {
            const res = await SeugiCustomAxios.get('/workspace/members/chart', {
                params: {
                    workspaceId,
                },
            });

            const allMembers = res.data.data; 
            const studentsList: { id: string, name: string, picture: string, permission: Permission }[] = [];
            const teachersList: { id: string, name: string, picture: string, permission: Permission }[] = [];

            Object.keys(allMembers.students).forEach((key) => {
                allMembers.students[key].forEach((student: any) => {
                    studentsList.push({
                        id: student.member.id,
                        name: student.member.name,
                        picture: student.member.picture || Avatar,
                        permission: allMembers.students[key][0].member.permission,
                    });
                });
            });

            Object.keys(allMembers.teachers).forEach((key) => {
                allMembers.teachers[key].forEach((teacher: any) => {
                    teachersList.push({
                        id: teacher.member.id,
                        name: teacher.member.name,
                        picture: teacher.member.picture || Avatar,
                        permission: allMembers.teachers[key][0].permission,
                    });
                });
            });

            Object.keys(allMembers.middleAdmin).forEach((key) => {
                allMembers.middleAdmin[key].forEach((middleAdmin: any) => {
                    teachersList.push({
                        id: middleAdmin.member.id,
                        name: middleAdmin.member.name,
                        picture: middleAdmin.member.picture || Avatar,
                        permission: allMembers.middleAdmin[key][0].permission,
                    });
                });
            });

            Object.keys(allMembers.admin).forEach((key) => {
                allMembers.admin[key].forEach((admin: any) => {
                    teachersList.push({
                        id: admin.member.id,
                        name: admin.member.name,
                        picture: admin.member.picture || Avatar,
                        permission: allMembers.admin[key][0].permission,
                    });
                });
            });

            teachersList.sort((a, b) => {
                const permissionOrder: { [key in Permission]: number } = {
                    'ADMIN': 1,
                    'MIDDLEADMIN': 2,
                    'TEACHER': 3,
                    'STUDENT': 4
                };

                return permissionOrder[a.permission] - permissionOrder[b.permission];
            });

            setStudents(studentsList);
            setTeachers(teachersList);

        } catch (err) {
            console.error('Error fetching members:', err);
        }
    };

    useEffect(() => {
        handleGetMembers(); 
    }, []);

    const filteredTeachers = teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getPermissionIcon = (permission: Permission) => {
        if (permission === 'ADMIN') {
            return <S.PermissionIcon src={AdminIcon} alt="Admin Icon" />;
        } else if (permission === 'MIDDLEADMIN') {
            return <S.PermissionIcon src={MiddleAdminIcon} alt="Middle Admin Icon" />;
        } else {
            return null;
        }
    };

    const openDialog = (member: {
        id: string;
        name: string;
        picture: string;
        permission: Permission;
    }) => {
        setSelectedMember(member); 
        setDialogVisible(true); 
    };

    const closeDialog = () => {
        setDialogVisible(false);
        setSelectedMember(null);
    };

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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} // 검색어 상태 업데이트
                            />
                        </S.SearchMemberDiv>
                    </S.SearchDiv>
                    <S.MemberDiv>
                        {selectedOption === 'teacher' ? (
                            filteredTeachers.length > 0 ? (
                                filteredTeachers.map((teacher, index) => (
                                    <S.MemberContentDiv key={index} >
                                        <S.UserInfo>
                                            <S.ProfileImage
                                                src={teacher.picture}
                                                alt={teacher.name}
                                            />
                                            <S.MemberContent>{teacher.name}</S.MemberContent>
                                            {getPermissionIcon(teacher.permission)}
                                        </S.UserInfo>
                                        <S.DotButton
                                            onClick={() => {
                                                if (teacher.permission === 'STUDENT') {
                                                    alert('이 기능은 사용하실 수 없습니다.');
                                                    return; 
                                                }
                                                openDialog(teacher); 
                                            }}
                                        >
                                            <S.DotIcon src={Dot} alt="More options" />
                                        </S.DotButton>

                                    </S.MemberContentDiv>
                                ))
                            ) : (
                                <S.MemberContent>선생님 목록이 없습니다.</S.MemberContent>
                            )
                        ) : (
                            filteredStudents.length > 0 ? (
                                filteredStudents.map((student, index) => (
                                    <S.MemberContentDiv key={index} >
                                        <S.UserInfo>
                                            <S.ProfileImage
                                                src={student.picture}
                                                alt={student.name}
                                            />
                                            <S.MemberContent>{student.name}</S.MemberContent>
                                            {getPermissionIcon(student.permission)}
                                        </S.UserInfo>
                                        <S.DotButton
                                            onClick={() => {
                                                if (student.permission === 'STUDENT') {
                                                    alert('이 기능은 사용하실 수 없습니다.'); 
                                                    return; 
                                                }
                                                openDialog(student); 
                                            }}
                                        >
                                            <S.DotIcon src={Dot} alt="More options" />
                                        </S.DotButton>
                                    </S.MemberContentDiv>
                                ))
                            ) : (
                                <S.MemberContent>학생 목록이 없습니다.</S.MemberContent>
                            )
                        )}
                    </S.MemberDiv>
                </S.SettingContainer>
            </S.SettingMain>
            <S.Right />
            {dialogVisible && selectedMember && (
                <Dialog 
                    onCancel={closeDialog} 
                    memberId={selectedMember.id}
                    permission={selectedMember.permission}
                />
            )}
        </S.AdminGeneralMain>
    );
};

export default AdminGeneral;
