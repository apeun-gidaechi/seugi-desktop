import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getWorkspaceInfo } from "@/Api/workspace";
import { paths } from '@/Constants/paths';

const index = () => {
    const navigate = useNavigate();
    const [workspaceName, setWorkspaceName] = useState("");
    const [schoolInfo, setSchoolInfo] = useState("");
    const [schoolImgUrl, setSchoolImgUrl] = useState("");
    const [workspaceId, setWorkspaceId] = useState("");
    const location = useLocation();
    const { verificationCode } = location.state || {};

    const handleJoinSuccess = () => {
        navigate(paths.selectjob, { state: { verificationCode, workspaceId } });
    };

    useEffect(() => {
        const handleSchoolInfo = async () => {
            try {
                const schoolInfos = await getWorkspaceInfo(verificationCode);

                setWorkspaceName(schoolInfos.workspaceName);
                setSchoolInfo(
                    `학생 ${schoolInfos.studentCount}명 선생님 ${schoolInfos.teacherCount}명`
                );
                setSchoolImgUrl(schoolInfos.workspaceImageUrl);
                setWorkspaceId(schoolInfos.workspaceId);
            } catch (error) {
                console.error("Failed to fetch school information:", error);
            }
        };
        handleSchoolInfo();
    }, [verificationCode]);

    const Backclick = () => {
        navigate(paths.schoolcode);
    };
  return {
      workspaceName,
      schoolInfo,
      schoolImgUrl,
      handleJoinSuccess,
      Backclick
  }
}

export default index