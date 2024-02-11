import { useState, useEffect } from "react";
import Header from "./Header";
import Calendar from "./Agenda/Calendar";
import DaysContainer from "./Agenda/DaysContainer";
import TaskCreator from "./Agenda/TaskCreator";
import { Task } from "../types";
import { format } from "date-fns";
import DaysContainerLoader from "./Agenda/DaysContainerLoader";
import { Button, useDisclosure } from "@nextui-org/react";
import EditIcon from "./Icons/EditIcon";
import DaysContainerEmpty from "./Agenda/DaysContainerEmpty";

const Agenda = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const fetchTasks = () => {
    setIsLoading(true);
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const filteredTasks = tasks.filter(
      (task: Task) => task.date === format(selectedDate, "eeee, dd/MM/yy")
    );
    setTasks(filteredTasks);
    setIsLoading(false);
  };

  useEffect(() => {
    setTasks([]);
    fetchTasks();
  }, [selectedDate]);

  return (
    <>
      <Header />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {isLoading ? (
        <DaysContainerLoader selectedDate={selectedDate} />
      ) : tasks.length > 0 ? (
        <DaysContainer tasks={tasks} selectedDate={selectedDate} />
      ) : (
        <DaysContainerEmpty selectedDate={selectedDate} />
      )}
      <Button
        radius="full"
        startContent={<EditIcon />}
        size="lg"
        isIconOnly
        className="fixed newTaskButton"
        color="primary"
        onPress={onOpen}
      ></Button>
      <TaskCreator
        selectedDate={selectedDate}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSuccess={fetchTasks}
      />
    </>
  );
};

export default Agenda;
