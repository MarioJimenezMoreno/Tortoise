import {
  format,
  startOfWeek,
  endOfWeek,
  addDays,
  addWeeks,
  isSameWeek,
  isSameDay,
} from "date-fns";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import "../../Styles/Calendar.css";
import { CalendarProps } from "../../types";

function Calendar({ selectedDate, setSelectedDate }: CalendarProps) {
  const startOfWeekDate = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const endOfWeekDate = endOfWeek(selectedDate, { weekStartsOn: 1 });
  const startDate = startOfWeekDate;
  const endDate = endOfWeekDate;

  const days: Date[] = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    days.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePrevWeek = () => {
    setSelectedDate(addWeeks(selectedDate, -1));
  };

  const handleNextWeek = () => {
    setSelectedDate(addWeeks(selectedDate, 1));
  };

  const dayItems = [];

  for (let i = 0; i < days.length; i++) {
    dayItems.push(
      <div
        key={`name-${days[i].toString()}`}
        className="text-center font-medium text-xl"
      >
        {format(days[i], "eee")}
        <Divider></Divider>
      </div>
    );
    dayItems.push(
      <Button
        key={`button-${days[i].toString()}`}
        className={`flex-grow m-2 text-2xl${
          isSameDay(days[i], selectedDate) ? "bg-primary-300" : ""
        }`}
      >
        <div
          key={days[i].toString()}
          className={`day ${
            isSameWeek(days[i], startOfWeekDate) ? "" : "outside"
          }`}
          onClick={() => handleDateClick(days[i])}
        >
          <span className="date">{format(days[i], "d")}</span>
        </div>
      </Button>
    );
  }

  return (
    <>
      <Card className="h-[90vh] w-[150px] fixed" radius="none">
        <CardHeader className=" flex flex-col gap-2">
          <p className="calendarTitle">{format(selectedDate, "MMM yyyy")}</p>
          <Divider></Divider>
          <button onClick={handlePrevWeek}>^</button>
        </CardHeader>
        <CardBody className="py-0">
          <div className="days flex-grow">{dayItems}</div>
        </CardBody>
        <button onClick={handleNextWeek}>v</button>
      </Card>
    </>
  );
}

export default Calendar;
