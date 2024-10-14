import React from 'react';
import SchoolImg from "@/Assets/image/home/school.svg";
import * as S from '@/Components/Home/Schools/Schools.style';
import Changeschool from '@/Components/Home/ChangeSchool/ChangeSchool';

import useSchools from '@/Hooks/HomeHook/Schools/index';

interface workspaceItem {
    workspaceId: string;
    workspaceName: string;
    workspaceImageUrl: string;
    workspaceAdmin: number;
    middleAdmin: number[];
    teacher: number[];
    student: number[];
}

interface pendingWorkspaceItem {
    workspaceId: string;
    workspaceName: string;
    workspaceImageUrl: string;
    studentCount: string;
    teacherCount: string;
}

interface Props {
    workspaces: workspaceItem[];
    pendingWorkspaces: pendingWorkspaceItem[];
}

const Schools = ({ workspaces, pendingWorkspaces }: Props) => {
    const { ...Schools } = useSchools();

    return (
        <S.UpContainer>
            {Schools.showChangeschool && (
                <div ref={Schools.ChangeSchoolRef}>
                    <Changeschool
                        onClose={Schools.handleOnClicked}
                        workspaces={workspaces}
                        pendingWorkspaces={pendingWorkspaces}
                    />
                </div>
            )}
            <S.SchoolTitleBox>
                <S.SchoolImg src={SchoolImg} />
                <S.MySchooliTitle>내 학교</S.MySchooliTitle>
            </S.SchoolTitleBox>
            {workspaces && workspaces.length > 0 ? (
                <>
                    <S.SchoolBox>
                        <S.SchoolName>{Schools.workspaceName}</S.SchoolName>
                        <S.ChangeSchool onClick={Schools.handleOnClicked} className='ChangeSchool'>
                            전환
                        </S.ChangeSchool>
                    </S.SchoolBox>
                </>
            ) : (
                <S.NoSchoolDiv>
                    <S.NoSchoolMessage>가입된 학교가 없습니다.</S.NoSchoolMessage>
                </S.NoSchoolDiv>
            )}
        </S.UpContainer>
    );
}

export default Schools;
