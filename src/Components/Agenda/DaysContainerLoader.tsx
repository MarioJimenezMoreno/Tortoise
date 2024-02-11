import React from "react";
import { format } from "date-fns";
import { Spinner } from "@nextui-org/react";
import { SecondaryDaysContainerProps } from "../../types";

const DaysContainerLoader: React.FC<SecondaryDaysContainerProps> = ({
  selectedDate,
}) => {
  return (
    <div className="dayContainer">
      <div className="dateTitle">
        <p>{format(selectedDate, "eeee, dd/MM/yyyy")}</p>
      </div>
      <div className="loaderContainer">
        <Spinner
          label="Loading Tasks"
          color="primary"
          labelColor="foreground"
        />
      </div>
    </div>
  );
};

export default DaysContainerLoader;
