import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import HomePage from "./components/HomePage/HomePage";
import MainComponentApp from "./mainComponent/MainComponentApp";

import { useSelector } from "react-redux";
import Error from './components/Error'
import TimeTracker from "./mainComponent/timestracker/TimeTracker";
import Navbar from "./mainComponent/Navbar";
import { useState } from "react";
import ChatHome from "./views/chatfeature/ChatHome";
import SignUp from "./views/chatfeature/Signup";
import SignIn from "./views/chatfeature/SignIn";

import EmployeeDeshBoard from "./views/dashboard/EmployeeDeshBoard";
import ScreenShots from "./views/screenshort/ScreenShots";
import User from "./views/users/User";
import ProjectList from "./views/projects/ProjectList";
import ProjectTask from "./views/projects/ProjectTask";
import TaskList from "./views/projects/TaskList";
import TaskBoard from "./views/projects/TaskBoard";
import Credentiallist from "./views/projects/Credentiallist";
import Admintask from "./views/projects/Admintask";


export const theme = createTheme({
  components:{
     MuiPaper:{ 
        defaultProps:{
           sx:{
              padding: '10px',
              marginBottom: '10px'
           }
        }
     }
  }
})


function App() {

  const { isAuth } = useSelector((state) => state.auth);
  const [Myadmin, setMyadmin] = useState(isAuth)
  console.log('App isAuth:', isAuth)

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate replace to="/login" />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/employee' element={<MainComponentApp />} />
        
        <Route path='/employee/dashboard' element={<EmployeeDeshBoard/>} />
        <Route path="/employee/profile" element={< User/>} />
         
        <Route path='/employee/timetracker' element={Myadmin ? <LoginPage setMyadmin={setMyadmin} /> : <TimeTracker setMyadmin={setMyadmin} />} />
        <Route path="/employee/chat/login" element={<SignIn />} />
        <Route path="/employee/chat/signup" element={<SignUp />} />
        <Route path="/employee/chat-home/:receiverId" element={<ChatHome/>} />
        <Route path="/employee/screenshots" element={< ScreenShots/>} />
               {/* Project Routes  */}
        <Route path="/employee/projectlist" element={< ProjectList/>} />
        <Route path="/employee/projectboard" element={<TaskBoard/>} />
        <Route path="/employee/projecttask" element={< ProjectTask/>} />
        <Route path="/employee/credentiallist" element={< Credentiallist/>} />
        <Route path="/employee/admintask" element={<Admintask/>} />
     
        <Route path="/employee/tasklist" element={<TaskList/>} />

        <Route path='*' element={<Error />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
