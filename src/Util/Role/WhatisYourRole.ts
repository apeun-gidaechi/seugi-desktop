import { SeugiCustomAxios } from "@/axios/SeugiCutomAxios";
import Cookies from "js-cookie";

enum Role {
    Teacher = "TEACHER",
    Student = "STUDENT",
    Admin = "ADMIN",
    MiddleAdmin = "MIDDLE_ADMIN",
}

interface User {
    role: Role;
}

const fetchUser = async (workspaceId: string): Promise<User | undefined> => {
    try {
        const res = await SeugiCustomAxios.get(`/profile/me?workspaceId=${workspaceId}`);
        const data = res.data.data.permission;
        
        const user: User = {
            role: data as Role
        };

        Cookies.set('userRole', user.role); 
        return user;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return undefined;
    }
};

export const handleUserRole = async (workspaceId: string) => {
    const user = await fetchUser(workspaceId);

    if (user) {
        if (user.role === Role.Teacher) {
            console.log(user.role);
        } else if (user.role === Role.Student) {
            console.log(user.role);
        } else if (user.role === Role.Admin) {
            console.log(user.role);
        } else if (user.role === Role.MiddleAdmin) {
            console.log(user.role);
        } else {
            console.log("정체가 무엇입니까");
        }
        return user.role;  
    } else {
        console.log("사용자 정보를 가져오지 못했습니다.");
        return undefined; 
    }
};
