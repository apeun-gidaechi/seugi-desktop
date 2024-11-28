import React, { useState, useEffect } from 'react';
import * as S from './InviteMember.style';
import Setting from '@/Pages/Admin/Setting/Setting';
import SettingHeader from '@/Pages/Admin/SettingHeader/SettingHeader';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import Cookies from 'js-cookie';
import Code from '@/Pages/Admin/InviteMember/Code/Code';
import CheckImg from '@/Assets/image/adminsetting/checkbox.svg';
import NotCheckImg from '@/Assets/image/adminsetting/notcheckbox.svg';

const InviteMember = () => {
    const workspaceId = Cookies.get('workspaceId');
    const userRole = Cookies.get('userRole');
    const [selectedOption, setSelectedOption] = useState<'TEACHER' | 'STUDENT'>('TEACHER');
    const [teachers, setTeachers] = useState<{ id: number, name: string; picture: string; permission: string }[]>([]);
    const [students, setStudents] = useState<{ id: number, name: string; picture: string; permission: string }[]>([]);
    const [workspaceCode, setWorkspaceCode] = useState<string | null>(null);
    const [isCodeVisible, setIsCodeVisible] = useState<boolean>(false);
    const [selectedIds, setSelectedIds] = useState<number[]>([]); // 선택된 ID 배열

    useEffect(() => {
        const fetchWaitingMembers = async () => {
            try {
                if (userRole === 'TEACHER' && selectedOption !== 'STUDENT') {
                    console.warn('교사는 학생만 조회할 수 있습니다.');
                    return;
                }

                const res = await SeugiCustomAxios.get(`/workspace/wait-list`, {
                    params: {
                        workspaceId,
                        role: selectedOption,
                    },
                });
                console.log(res.data.data);

                if (selectedOption === 'TEACHER') {
                    setTeachers(res?.data?.data || []);
                } else if (selectedOption === 'STUDENT') {
                    setStudents(res?.data?.data || []);
                }
            } catch (err) {
                console.error("Can't find Waiting Member", err);
            }
        };

        fetchWaitingMembers();
    }, [selectedOption, workspaceId, userRole]);

    const handleOptionChange = (option: 'TEACHER' | 'STUDENT') => {
        if (userRole === 'TEACHER' && option === 'TEACHER') {
            console.warn('교사는 학생만 조회할 수 있습니다.');
            return;
        }
        setSelectedOption(option);
    };

    const handleCheckCode = async () => {
        try {
            const res = await SeugiCustomAxios.get(`/workspace/code/${workspaceId}`);
            if (res?.data?.data) {
                setWorkspaceCode(res.data.data);
                setIsCodeVisible(true);
            } else {
                console.error('No code received');
            }
        } catch (error) {
            console.error('Fail to get WorkspaceCode', error);
        }
    };

    const handleCloseCode = () => {
        setIsCodeVisible(false);
    };

    const toggleSelection = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
        );
    };

    const handleAddMember = async () => {
        try {
            await SeugiCustomAxios.patch(`/workspace/add`, {
                role: selectedOption,
                userSet: selectedIds,
                workspaceId
            });

            console.log('성공적으로 승인되었습니다!');

            if (selectedOption === 'TEACHER') {
                setTeachers((prev) =>
                    prev.filter((teacher) => !selectedIds.includes(teacher.id))
                );
            } else if (selectedOption === 'STUDENT') {
                setStudents((prev) =>
                    prev.filter((student) => !selectedIds.includes(student.id))
                );
            }

            setSelectedIds([]);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteMember = async () => {
        try {
            await SeugiCustomAxios.delete(`/workspace/cancel`, {
                data: {
                    role: selectedOption,
                    userSet: selectedIds,
                    workspaceId
                }
            });

            console.log('성공적으로 거절되었습니다!');

            if (selectedOption === 'TEACHER') {
                setTeachers((prev) =>
                    prev.filter((teacher) => !selectedIds.includes(teacher.id))
                );
            } else if (selectedOption === 'STUDENT') {
                setStudents((prev) =>
                    prev.filter((student) => !selectedIds.includes(student.id))
                );
            }

            setSelectedIds([]);
        } catch (err) {
            console.error(err);
        }
    };

    const isActionDisabled =
        userRole === 'STUDENT' ||
        (userRole === 'TEACHER' && selectedOption === 'TEACHER');

    return (
        <S.AdminGeneralMain>
            <Setting />
            <S.SettingMain>
                <SettingHeader />
                <S.CodeDiv>
                    <S.TitleDiv>
                        <S.Title>학교코드로 멤버를 초대할 수 있어요</S.Title>
                    </S.TitleDiv>
                    <S.CodeButton onClick={handleCheckCode} disabled={userRole === 'STUDENT'}>
                        학교코드 확인
                    </S.CodeButton>
                </S.CodeDiv>
                <S.JoinPeople>
                    <S.JoinTitleDiv>
                        <S.JoinTitle>
                            {selectedOption === 'TEACHER' ? teachers.length : students.length}명으로부터 가입 요청이 왔어요
                        </S.JoinTitle>
                    </S.JoinTitleDiv>
                </S.JoinPeople>
                <S.ButtonDiv>
                    <S.SearchDiv>
                        <S.ToggleContainer>
                            <S.ToggleButton selectedOption={selectedOption} />
                            <S.Option
                                isSelected={selectedOption === 'TEACHER'}
                                onClick={() => handleOptionChange('TEACHER')}
                            >
                                선생님
                            </S.Option>
                            <S.Option
                                isSelected={selectedOption === 'STUDENT'}
                                onClick={() => handleOptionChange('STUDENT')}
                            >
                                학생
                            </S.Option>
                        </S.ToggleContainer>
                    </S.SearchDiv>
                    <S.ButtonContainer>
                        <S.AllowButton onClick={handleAddMember} disabled={isActionDisabled}>
                            수락
                        </S.AllowButton>
                        <S.CancelButton onClick={handleDeleteMember} disabled={isActionDisabled}>
                            거절
                        </S.CancelButton>
                    </S.ButtonContainer>
                </S.ButtonDiv>
                <S.MemberDiv>
                    {(selectedOption === 'TEACHER' ? teachers : students).map((member, index) => (
                        <S.MemberContentDiv key={index}>
                            <S.UserInfo>
                                <S.ProfileImage
                                    src={member.picture}
                                    alt={member.name}
                                />
                                <S.MemberContent>{member.name}</S.MemberContent>
                            </S.UserInfo>
                            <S.Checkbox onClick={() => toggleSelection(member.id)}>
                                <img
                                    src={selectedIds.includes(member.id) ? CheckImg : NotCheckImg}
                                    alt={selectedIds.includes(member.id) ? "선택됨" : "선택되지 않음"}
                                />
                            </S.Checkbox>
                        </S.MemberContentDiv>
                    ))}
                </S.MemberDiv>
            </S.SettingMain>
            {isCodeVisible && workspaceCode && (
                <Code workspaceCode={workspaceCode} onClose={handleCloseCode} />
            )}
            <S.Right />
        </S.AdminGeneralMain>
    );
};

export default InviteMember;
