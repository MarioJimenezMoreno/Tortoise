import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  //@ts-ignore
  Avatar,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { TaskCreatorProps } from "../../types";
import { format } from "date-fns";
import { differenceInMinutes, parse } from "date-fns";
//@ts-ignore
import { TimePicker } from "react-ios-time-picker";

const TaskCreator = ({
  selectedDate,
  isOpen,
  onOpenChange,
  onSuccess,
}: TaskCreatorProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("");
  const [beginningHour, setBeginningHour] = useState("00:00");
  const [finalHour, setFinalHour] = useState("01:00");
  const [date, setDate] = useState(selectedDate);
  const [colorCode, setColorCode] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const handleColorCode = () => {
    switch (category) {
      case "Estudio":
        setColorCode("bg-success-300");
        break;
      case "Juego":
        setColorCode("bg-warning-300");
        break;
      case "Vídeo":
        setColorCode("bg-danger-300");
        break;
      case "Deporte":
        setColorCode("bg-primary-300");
        break;
    }
    console.log("colorasignado :" + colorCode);
  };

  const handleCreateTask = () => {
    const startTime = parse(beginningHour, "HH:mm", new Date());
    const endTime = parse(finalHour, "HH:mm", new Date());
    const totalMinutes = differenceInMinutes(endTime, startTime);

    const newTask = {
      id: crypto.randomUUID() as string,
      title: taskTitle,
      description: taskDescription,
      beginning_hour: beginningHour,
      final_hour: finalHour,
      duration: totalMinutes,
      category: category,
      date: format(date, "eeee, dd/MM/yy"),
      color_code: colorCode == "" ? "bg-primary-300" : colorCode,
      userList: [
        {
          id: 2,
          email: localStorage.email,
          password: "123123",
          phone: "644343107",
          username: "Mario",
        },
      ],
    };

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log("Tarea guardada en localStorage:", newTask);
    onSuccess();
  };

  const handleInputChange = () => {
    if (
      taskTitle !== "" &&
      taskDescription !== "" &&
      category !== "" &&
      beginningHour !== "" &&
      finalHour !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    console.log(beginningHour + " " + finalHour);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new task
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  autoFocus
                  label="Title"
                  placeholder="Enter task title"
                  type="text"
                  variant="bordered"
                  value={taskTitle}
                  onChange={(e) => {
                    setTaskTitle(e.target.value);
                    handleInputChange();
                  }}
                />
                <Input
                  label="Description"
                  placeholder="Enter a short description"
                  type="text"
                  variant="bordered"
                  onChange={(e) => {
                    setTaskDescription(e.target.value);
                    handleInputChange();
                  }}
                />
                <Select
                  placeholder="Select a category"
                  label="Category"
                  isRequired
                  onChange={() => {
                    console.log(category);
                    handleInputChange;
                    handleColorCode();
                  }}
                >
                  <SelectItem
                    key="Estudio"
                    value="Estudio"
                    startContent={
                      <Avatar
                        className="bg-success-300 w-6 h-6 text-tiny"
                        name=" "
                      />
                    }
                    onClick={() => {
                      setCategory("Estudio");
                    }}
                  >
                    Estudio
                  </SelectItem>
                  <SelectItem
                    key="Deporte"
                    value="Deporte"
                    startContent={
                      <Avatar
                        className="bg-primary-300 w-6 h-6 text-tiny"
                        name=" "
                      />
                    }
                    onClick={() => {
                      setCategory("Deporte");
                    }}
                  >
                    Deporte
                  </SelectItem>
                  <SelectItem
                    key="Juego"
                    value="Juego"
                    startContent={
                      <Avatar
                        className="bg-warning-300 w-6 h-6 text-tiny"
                        name=" "
                      />
                    }
                    onClick={() => {
                      setCategory("Juego");
                    }}
                  >
                    Juego
                  </SelectItem>
                  <SelectItem
                    key="Vídeo"
                    value="Vídeo"
                    startContent={
                      <Avatar
                        className="bg-danger-300 w-6 h-6 text-tiny"
                        name=" "
                      />
                    }
                    onClick={() => {
                      setCategory("Vídeo");
                    }}
                  >
                    Vídeo
                  </SelectItem>
                </Select>
                <div className="flex flex-col">
                  <p className="text-xs px-2 pb-1 font-bold">Hour Range</p>
                  <TimePicker
                    onChange={(e: string) => {
                      setBeginningHour(e);
                      handleInputChange();
                    }}
                    value={beginningHour}
                  />
                  <TimePicker
                    onChange={(e: string) => {
                      setFinalHour(e);
                      handleInputChange();
                    }}
                    value={finalHour}
                  />
                </div>
                <p className="text-xs px-2 pb-1 font-bold">Date</p>
                <div className="px-3">
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date || new Date())}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    handleCreateTask();
                    onClose();
                  }}
                  color="primary"
                  isDisabled={!isFormValid}
                >
                  Create Task
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskCreator;
