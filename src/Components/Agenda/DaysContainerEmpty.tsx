import React from "react";
import { format } from "date-fns";
import { SecondaryDaysContainerProps } from "../../types";

const DaysContainerEmpty: React.FC<SecondaryDaysContainerProps> = ({
  selectedDate,
}) => {
  return (
    <div className="dayContainer sticky gap-2">
      <div className="dateTitle flex justify-between">
        <p>{format(selectedDate, "eeee, dd/MM/yyyy")}</p>
      </div>
      <div className="loaderContainer">
        <p>No tasks planned yet for this date.</p>
      </div>
    </div>
  );
};

export default DaysContainerEmpty;
