import { SeugiCustomAxios } from "./SeugiCutomAxios";

export const getTimeTable = async (workspaceId: string) => {
    const res = await SeugiCustomAxios.get(`/timetable/day?workspaceId=${workspaceId}`);
    return res.data.data;
}

export const getNotification = async (workspaceId: string, page: number) => {
    const res = await SeugiCustomAxios.get(`/notification/${workspaceId}?page=${page}&size=365`);
    return res.data.data;
}

export const fetchingNotice = async (workspaceId: string) => {
    const res = await SeugiCustomAxios.get(`/notification/${workspaceId}`);
    return res.data.data;
}

export const getMenus = async (workspaceId: string, date: string) => {
    const res = await SeugiCustomAxios.get(`/meal?workspaceId=${workspaceId}&date=${date}`);
    return res.data.data
}