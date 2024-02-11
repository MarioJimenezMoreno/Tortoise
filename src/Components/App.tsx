import ReactDOM from 'react-dom/client';
import MainPage from './MainPage';
import Agenda from './Agenda';
import Profile from './Profile';
import '../Styles/App.css'
import '../Styles/Style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";
import Estadisticas from './Analytics';

function App() {

  return (
    <BrowserRouter>
    <NextUIProvider>    
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/app' element={<Agenda/>} />
          <Route path='/stats' element={<Estadisticas/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);