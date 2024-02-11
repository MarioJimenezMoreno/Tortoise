import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TimeKeeper from "react-timekeeper";
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
import axios from "axios";
import { differenceInMinutes, parse } from "date-fns";
// import { TimePicker } from "antd";
// import dayjs from "dayjs";
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

  // const [showStartTime, setShowStartTime] = useState(false);
  // const [showEndTime, setShowEndTime] = useState(false);

  // const [values, setValues] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([
  //   dayjs("07:00", "HH:mm"),
  //   dayjs("09:00", "HH:mm"),
  // ]);

  // const hourFormat = "HH:mm";

  const handleColorCode = () => {
    switch (category) {
      case "Work":
        setColorCode("bg-success-300");
        break;
      case "Entertainment":
        setColorCode("bg-warning-300");
        break;
      case "Cook":
        setColorCode("bg-danger-300");
        break;
      case "Sports":
        setColorCode("bg-primary-300");
        break;
    }
    console.log("colorasignado :" + colorCode);
  };

  const handleCreateTask = () => {
    const startTime = parse(beginningHour, "HH:mm", new Date());
    const endTime = parse(finalHour, "HH:mm", new Date());
    const totalMinutes = differenceInMinutes(endTime, startTime);

    console.log(colorCode);

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      beginning_hour: beginningHour,
      final_hour: finalHour,
      duration: totalMinutes,
      category: category,
      date: format(date, "yyyy-MM-dd"),
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
    console.log(newTask);
    axios
      .post(`http://localhost:8080/api/tasks`, newTask)
      .then((response) => {
        console.log("Tarea creada:", response.data);
        onSuccess();
      })
      .catch((error) => {
        console.error("Error al crear la tarea:", error);
        onSuccess();
      });
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

  // const handleHourSetUp = () => {
  //   console.log("entramoh");
  //   setBeginningHour(values[0][0]);
  //   setFinalHour(values[1]);
  //   console.log(finalHour + " " + beginningHour);
  // };

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
                    key="Work"
                    value="Work"
                    startContent={
                      <Avatar
                        className="bg-success-300 w-6 h-6 text-tiny"
                        name=" "
                      />
                    }
                    onClick={() => {
                      setCategory("Work");
                    }}
                  >
                    Work
                  </SelectItem>
                  <SelectItem
                    key="Sports"
                    value="Sports"
                    startContent={
                      <Avatar
                        className="bg-primary-300 w-6 h-6 text-tiny"
                        name=" "
                      />
                    }
                    onClick={() => {
                      setCategory("Sports");
                    }}
                  >
                    Sports
                  </SelectItem>
                  <SelectItem
                    key="Entertainment"
                    value="Entertainment"
                    startContent={
                      <Avatar
                        className="bg-warning-300 w-6 h-6 text-tiny"
                        name=" "
                      />
                    }
                    onClick={() => {
                      setCategory("Entertainment");
                    }}
                  >
                    Entertainment
                  </SelectItem>
                  <SelectItem
                    key="Cook"
                    value="Cook"
                    startContent={
                      <Avatar
                        className="bg-danger-300 w-6 h-6 text-tiny"
                        name=" "
                      />
                    }
                    onClick={() => {
                      setCategory("Cook");
                    }}
                  >
                    Cook
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
                  {/* <TimePicker.RangePicker
                    format={hourFormat}
                    minuteStep={15}
                    onOpenChange={() => {
                      handleHourSetUp;
                    }}
                    value={[values[0], values[1]]}
                  /> */}
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
