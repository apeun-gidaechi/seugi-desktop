import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import * as S from "@/Components/Home/Assignment/Assignment.style";
import AssignmentImg from "@/Assets/image/home/checkAssignment.svg";
import { getTasks, getClassroomTasks } from "@/Api/Home";
import Emoji from "@/Assets/image/home/emoji.svg";

interface Task {
  id: number;
  workspaceId: string;
  title: string;
  description: string | null;
  dueDate: Date | null;
}

interface ClassroomTask {
  id: string;
  title: string;
  description: string | null;
  link: string;
  dueDate: Date | null;
}

interface AssignmentProps {
  tasks?: Task[]; 
  classroomTasks?: ClassroomTask[]; 
}

const Assignment: React.FC<AssignmentProps> = ({ tasks = [], classroomTasks = [] }) => {
  const [localTasks, setLocalTasks] = useState<Task[]>(tasks);
  const [localClassroomTasks, setLocalClassroomTasks] = useState<ClassroomTask[]>(classroomTasks);

  const fetchData = async () => {
    const workspaceId = Cookies.get("workspaceId");
    if (workspaceId) {
      const fetchedTasks = await getTasks(workspaceId);
      const fetchedClassroomTasks = await getClassroomTasks();

      setLocalTasks(Array.isArray(fetchedTasks) ? fetchedTasks : []);
      setLocalClassroomTasks(Array.isArray(fetchedClassroomTasks) ? fetchedClassroomTasks : []);
    } else {
      console.error("Workspace ID is not defined");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClassroomTaskClick = (link: string) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      console.error("No link available for this task.");
    }
  };

  const calculateDaysLeft = (dueDate: Date | null) => {
    if (!dueDate) return "기한 없음";

    const today = new Date();
    const diffTime = new Date(dueDate).getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      return `D-${diffDays}`;
    } else if (diffDays === 0) {
      return "D-Day";
    } else {
      return `D+${Math.abs(diffDays)}`;
    }
  };

  return (
    <S.AssignmentMain>
      <S.AssignmentTitleBox>
        <S.AssignmentImg src={AssignmentImg} />
        <S.AssignmentTitleText>다가오는 과제</S.AssignmentTitleText>
      </S.AssignmentTitleBox>

      <S.AssignmentBox>
        <h1>구글 클래스룸 과제</h1>
        <ul>
          {localClassroomTasks.length > 0 ? (
            localClassroomTasks.map((task) => (
              <S.AssignmentButton key={task.id} onClick={() => handleClassroomTaskClick(task.link)}>
                <S.AssignmentButtonText>{task.title}</S.AssignmentButtonText>
                <S.AssignmentDescription>
                  {task.description ? task.description : "설명 없음"}
                </S.AssignmentDescription>
                <S.AssignmentDateBox>
                  <p>{task.dueDate ? new Date(task.dueDate).toLocaleString() : "기한 없음"}</p>
                  <S.DaysLeft>{calculateDaysLeft(task.dueDate)}</S.DaysLeft>
                </S.AssignmentDateBox>
              </S.AssignmentButton>
            ))
          ) : (
            <S.NoTask>등록된 과제가 없습니다.</S.NoTask>
          )}
        </ul>
      </S.AssignmentBox>

      <S.AssignmentBox>
        <h1>일반 과제</h1>
        <ul>
          {localTasks.length > 0 ? (
            localTasks.map((task) => (
              <S.AssignmentButton key={task.id}>
                <S.AssignmentButtonText>{task.title}</S.AssignmentButtonText>
                <S.AssignmentDescription>
                  {task.description ? task.description : "설명 없음"}
                </S.AssignmentDescription>
                <S.AssignmentDateBox>
                  <p>{task.dueDate ? new Date(task.dueDate).toLocaleString() : "기한 없음"}</p>
                  <S.DaysLeft>{calculateDaysLeft(task.dueDate)}</S.DaysLeft>
                </S.AssignmentDateBox>
              </S.AssignmentButton>
            ))
          ) : (
            <S.NoTaskWrap>
              <S.NoTask>등록된 과제가 없습니다.</S.NoTask>
            </S.NoTaskWrap>
          )}
        </ul>
      </S.AssignmentBox>
    </S.AssignmentMain>
  );
};

export default Assignment;