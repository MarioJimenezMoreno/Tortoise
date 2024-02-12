import ReactDOM from "react-dom/client";
import MainPage from "./MainPage";
import Agenda from "./Agenda";
import "../Styles/App.css";
import "../Styles/Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<Agenda />} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
