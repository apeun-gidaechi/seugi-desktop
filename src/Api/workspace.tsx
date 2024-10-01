import { SeugiCustomAxios } from "./SeugiCutomAxios";

export const getMyWorkspaces = async () => {
    const res = await SeugiCustomAxios.get(`/workspace/`);
    return res.data.data;
};

export const getMyWaitingWorkspace = async () => {
    const res = await SeugiCustomAxios.get(`/workspace/my/wait-list`);
    return res.data.data;
}

export const WorkspaceName = async (workspaceId: string) => {
    const res = await SeugiCustomAxios.get(`/workspace/${workspaceId}`);
    return res.data.data;
}

export const getWorkspaceInfo = async (verificationCode:string) => {
    const res = await SeugiCustomAxios.get(`/workspace/search/${verificationCode}`);
    return res.data.data;
}

export const getWorkspaceCode = async (verificationCode: string) => {
    const res = await SeugiCustomAxios.get(`/workspace?code=${verificationCode}`);
    return res.data.data
}