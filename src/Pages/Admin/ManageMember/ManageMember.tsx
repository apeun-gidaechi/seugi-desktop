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
            const res = await SeugiCustomAxios.get('/workspace/members', {
                params: {
                    workspaceId,
                },
            });

            const allMembers = res.data.data;

            const studentsList: { id: string, name: string, picture: string, permission: Permission }[] = [];
            const teachersList: { id: string, name: string, picture: string, permission: Permission }[] = [];

            allMembers.forEach((member: any) => {
                const { id, name, picture } = member.member;
                const { permission } = member;

                const memberData = {
                    id: String(id),
                    name,
                    picture: picture || Avatar,
                    permission,
                };

                if (permission === 'STUDENT') {
                    studentsList.push(memberData);
                } else {
                    teachersList.push(memberData);
                }
            });

            teachersList.sort((a, b) => {
                const permissionOrder: { [key in Permission]: number } = {
                    'ADMIN': 1,
                    'MIDDLEADMIN': 2,
                    'TEACHER': 3,
                    'STUDENT': 4,
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
                                onChange={(e) => setSearchQuery(e.target.value)}
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
                                            onClick={() => {openDialog(teacher);}}
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
                                            onClick={() => {openDialog(student);}}
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
