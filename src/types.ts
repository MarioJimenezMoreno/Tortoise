import { LinearScale } from "chart.js";

export interface Task {
  title: string;
  description: string;
  beginning_hour: string;
  final_hour: string;
  duration: string;
  category: string;
  date: string;
  color_code: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string;
    borderWidth: number;
  }[];
}

export interface RespuestaItem {
  username: string;
  date: number;
  name: string;
  duration: number;
  color_code: string;
}

export interface DataElement {
  username: string;
  name: string;
  duration: number;
  color_code: string;
}

export interface ChartOptions {
  scales: {
    y: LinearScale[];
  };
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      position: string;
      labels: {
        color: string;
      };
    };
  };
}

export interface TaskCreatorProps extends ModalProps {
  selectedDate: Date;
  onSuccess: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export interface Data {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface SecondaryDaysContainerProps {
  selectedDate: Date;
}
export interface DaysContainerProps {
  tasks: Task[];
  selectedDate: Date;
}

export interface Categories {
  username: string;
  tarea: string;
  duracion: number;
  color_code: string;
}
