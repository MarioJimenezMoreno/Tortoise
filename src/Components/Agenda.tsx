import { useState, useEffect } from "react";
import Header from "./Header";
import Calendar from "./Agenda/Calendar";
import DaysContainer from "./Agenda/DaysContainer";
import TaskCreator from "./Agenda/TaskCreator";
import { Task } from "../types";
import axios from "axios";
import DaysContainerLoader from "./Agenda/DaysContainerLoader";
import { format } from "date-fns";
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
    axios
      .get(
        `http://localhost:8080/api/session-dates?date=${format(
          selectedDate,
          "yyyy-MM-dd"
        )}&email=${localStorage.email}`
      )
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
