import React, { useEffect, useState } from "react";
import * as S from "@/Components/Home/Assignment/Assignment.style";
import AssignmentImg from "@/Assets/image/home/checkAssignment.svg";

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

interface Props {
  tasks: Task[];
  classroomTasks: ClassroomTask[];
}

const Assignment = ({ tasks = [], classroomTasks = [] }: Props) => {
  const handleClassroomTaskClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <S.AssignmentMain>
      <S.AssignmentTitleBox>
        <S.AssignmentImg src={AssignmentImg} />
        <S.AssignmentTitleText>과제</S.AssignmentTitleText>
        <S.PostAssignment>과제를 제출해주세요</S.PostAssignment>
      </S.AssignmentTitleBox>
      <S.AssignmentBox>
        <h1>Regular Tasks</h1>
        <ul>
          {tasks.map((task: Task) => (
            <li key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.description || "No description available"}</p>
              <p>
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleString()
                  : "No due date"}
              </p>
            </li>
          ))}
        </ul>

        <h1>Classroom Tasks</h1>
        <ul>
          {classroomTasks.map((task: ClassroomTask) => (
            <li
              key={task.id}
              onClick={() => handleClassroomTaskClick(task.link)}
            >
              <h2>{task.title}</h2>
              <p>{task.description || "No description available"}</p>
              <p>
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleString()
                  : "No due date"}
              </p>
            </li>
          ))}
        </ul>
      </S.AssignmentBox>
    </S.AssignmentMain>
  );
};

export default Assignment;
