import React from "react";
import { Task } from "../../types";
import { differenceInMinutes, parse } from "date-fns";
import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import DeleteIcon from "../Icons/DeleteIcon";
import axios from "axios";

const containerHeight = 1200;

const calculatePositionAndSize = (task: Task) => {
  const startTime = parse(task.beginning_hour, "HH:mm", new Date());
  const endTime = parse(task.final_hour, "HH:mm", new Date());
  const totalMinutes = differenceInMinutes(endTime, startTime);

  const top =
    ((startTime.getHours() * 60 + startTime.getMinutes()) / 1440) *
    containerHeight;
  const height = (totalMinutes / 1440) * containerHeight;

  return { top, height };
};

const handleDeleteTask = (task: Task) => {
  axios
    .delete(
      `http://localhost:8080/api/tasks?beginning_hour=${task.beginning_hour}`
    )
    .then((response) => {
      console.log("Tarea borrada:", response.data);
    })
    .catch((error) => {
      console.error("Error al crear la borrar:", error);
    });
};

const TaskComponent: React.FC<{
  task: Task;
  position: "absolute" | "static";
  indexInGroup: number;
  totalTasksInGroup: number;
  groupIndex: number;
}> = ({ task, position, indexInGroup, totalTasksInGroup, groupIndex }) => {
  const { top, height } = calculatePositionAndSize(task);

  const overlappedWidth = 100 / (totalTasksInGroup * 2);

  const style: React.CSSProperties = {
    position: position,
    top: position ? `${top}px` : "0",
    minHeight: `${height}px`,
    maxHeight: "auto",
    maxWidth: "50%",
    width: `${overlappedWidth}%`,
    left: position === "absolute" ? `${overlappedWidth * indexInGroup}%` : "0",
    zIndex: groupIndex,
    marginLeft: "5px",
  };

  return (
    <Card fullWidth style={style} className={task.color_code}>
      <div className="flex flex-grow">
        <CardBody className="flex flex-row gap-2 p-2">
          <div className="flex flex-col text-xs justify-between">
            <p>{task.beginning_hour}</p>
            <p>{task.final_hour}</p>
          </div>
          <Divider className="h-auto" orientation="vertical" />
          <p className="font-bold">{task.title}:</p>
          {task.description}

          <Button
            isIconOnly
            radius="full"
            variant="light"
            onClick={() => handleDeleteTask(task)}
          >
            <DeleteIcon />
          </Button>
        </CardBody>
      </div>
    </Card>
  );
};

export default TaskComponent;
