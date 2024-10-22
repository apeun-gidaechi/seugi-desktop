import { SeugiCustomAxios } from "../axios/SeugiCutomAxios";

export const fetchingProfile = async (workspaceId: string) => {
    const res = await SeugiCustomAxios.get(`/profile/me?workspaceId=${workspaceId}`);
    return res.data.data;
}

export const getMyInfos = async () => {
    const res = await SeugiCustomAxios.get(`/member/myInfo`);
    return res.data.data
}
