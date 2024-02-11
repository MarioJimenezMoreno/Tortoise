import React from "react";
import { format } from "date-fns";
import TaskComponent from "./TaskComponent";
import { DaysContainerProps, Task } from "../../types";
import { Switch } from "@nextui-org/react";
import { parse } from "date-fns";

const DaysContainer: React.FC<DaysContainerProps> = ({
  tasks,
  selectedDate,
}) => {
  const [position, setPosition] = React.useState<"absolute" | "static">(
    "absolute"
  );

  const handlePositionChange = () => {
    setPosition((prevPosition) =>
      prevPosition === "absolute" ? "static" : "absolute"
    );
  };

  const doTasksOverlap = (taskA: Task, taskB: Task) => {
    const startTimeA = parse(taskA.beginning_hour, "HH:mm", new Date());
    const endTimeA = parse(taskA.final_hour, "HH:mm", new Date());

    const startTimeB = parse(taskB.beginning_hour, "HH:mm", new Date());
    const endTimeB = parse(taskB.final_hour, "HH:mm", new Date());

    return (
      (startTimeA <= endTimeB && endTimeA >= startTimeB) ||
      (startTimeB <= endTimeA && endTimeB >= startTimeA)
    );
  };

  const groupedTasks: Task[][] = [];

  tasks.forEach((task) => {
    const overlappingGroup = groupedTasks.find((group) =>
      group.some((groupTask) => doTasksOverlap(groupTask, task))
    );

    if (overlappingGroup) {
      overlappingGroup.push(task);
    } else {
      groupedTasks.push([task]);
    }
  });

  return (
    <div className="dayContainer sticky gap-2">
      <div className="dateTitle flex justify-between">
        <p>{format(selectedDate, "eeee, dd/MM/yy")}</p>
        <Switch
          defaultSelected
          onChange={handlePositionChange}
          size="sm"
          color="primary"
        ></Switch>
      </div>
      {groupedTasks.map((group, index) => (
        <div key={index} className="taskGroupContainer">
          {group.map((task, taskIndex) => (
            <TaskComponent
              key={task.title}
              task={task}
              position={position}
              indexInGroup={taskIndex}
              totalTasksInGroup={group.length}
              groupIndex={index}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DaysContainer;
