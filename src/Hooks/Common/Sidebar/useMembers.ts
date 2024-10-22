import { useEffect, useState } from 'react';
import axios, { AxiosInstance } from 'axios';

interface Member {
  id: number;
  name: string;
  department: string;
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
});

const useMembers = (workspaceId: string, accessToken: string | null) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Member[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  useEffect(() => {
    if (searchTerm) {
      searchMembers(searchTerm);
    } else {
      setSearchResult([]);
    }
  }, [searchTerm]);

  const searchMembers = async (term: string) => {
    if (accessToken) {
      try {
        const response = await SeugiCustomAxios.get(`/workspace/members`, {
          params: {
            workspaceId: workspaceId,
          },
          headers: {
            "Authorization": accessToken,
          },
        });

        const members: Member[] = (response.data.data || []).map((m: any) => ({
          id: m.member.id,
          name: m.nick,
          department: m.belong || "",
        }));

        setSearchResult(members.filter(
          (item) =>
            item.name.toLowerCase().includes(term.toLowerCase()) ||
            item.department.toLowerCase().includes(term.toLowerCase())
        ));
      } catch (error) {
        console.error("Error fetching members:", error);
        alert('멤버를 가져오는 중 오류가 발생했습니다.');
      }
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleMemberClick = (id: number) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((memberId) => memberId !== id) : [...prev, id]
    );
  };

  const combinedResults = [
    ...selectedMembers.map((id) => searchResult.find((item) => item.id === id)!).filter(Boolean),
    ...searchResult.filter((item) => !selectedMembers.includes(item.id)),
  ];

  return {
    searchTerm,
    handleSearchChange,
    handleMemberClick,
    combinedResults,
    selectedMembers,
  };
};

export default useMembers;
