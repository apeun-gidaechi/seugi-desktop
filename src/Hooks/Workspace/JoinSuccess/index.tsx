import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';

const index = () => {
    const navigate = useNavigate();
    const [workspaceName, setWorkspaceName] = useState("");
    const [schoolInfo, setSchoolInfo] = useState("");
    const [schoolImgUrl, setSchoolImgUrl] = useState("");
    const [workspaceId, setWorkspaceId] = useState("");
    const location = useLocation();
    const { verificationCode } = location.state || {};

    const handleJoinSuccess = () => {
        navigate('/selectjob', { state: { verificationCode, workspaceId } });
    };

    useEffect(() => {
        const handleSchoolInfo = async () => {
            try {

                const res = await SeugiCustomAxios.get(`/workspace/search/${verificationCode}`);
                const data = res.data.data;

                setWorkspaceName(data.workspaceName);
                setSchoolInfo(
                    `학생 ${data.studentCount}명 선생님 ${data.teacherCount}명`
                );
                setSchoolImgUrl(data.workspaceImageUrl);
                setWorkspaceId(data.workspaceId);
            } catch (error) {
                console.error("Failed to fetch school information:", error);
            }
        };
        handleSchoolInfo();
    }, [verificationCode]);

    const Backclick = () => {
        navigate("/schoolcode");
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