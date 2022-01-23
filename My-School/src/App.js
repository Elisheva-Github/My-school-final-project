import React, { useEffect } from "react";
import Login from './components/login';
import Home from './components/home';
import TeacherEnter from './components/teacher/teacherEnter';
import StudentEnter from './components/student/studentEnter';
import NewClassRoom from './components/teacher/newClassRoom';
import ViewAttendance from './components/teacher/viewAttendance';
import Schedule from './components/teacher/schedule';
import ViewTasks from './components/teacher/viewTasks';
import ViewTests from './components/teacher/viewTests';
import Hw from './components/teacher/hw';
import PreviousLessons from './components/teacher/previousLessons';
import NewTest from './components/teacher/newTest';
import NewHw from './components/teacher/newHw';
import ForgotPassword from './components/forgotPassword';
import Signup from './components/signup';

import S_previousLessons from './components/student/s_previousLessons';
import S_schedule from './components/student/s_schedule';
import S_viewTests from './components/student/s_viewTests';
import ViewHw from './components/student/viewHw';
import ViewMarks from './components/student/viewMarks';
import Admin from './components/admin';
import YouTube from './components/youTube';
import ReactPlayer from './components/youTube';
import Zoom from './components/zoom';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/previousLessons">
          <PreviousLessons />
        </Route>
        <Route path="/newClassRoom">
          <NewClassRoom />
        </Route>
       <Route path="/attendance">
          <ViewAttendance />
        </Route>
        <Route path="/tasks">
          <ViewTasks />
        </Route>
        <Route path="/tests">
          <ViewTests />
        </Route>
        <Route path="/newTest">
          <NewTest />
        </Route>
        <Route path="/newHw">
          <NewHw />
        </Route>


        <Route path="/hw">
          <Hw />
        </Route>


        <Route path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>

        <Route path="/s_previousLessons">
          <S_previousLessons />
        </Route>
        <Route path="/s_schedule">
          <S_schedule />
        </Route>
        <Route path="/s_test">
          <S_viewTests />
        </Route>
        <Route path="/s_hw">
          <ViewHw />
        </Route>
        <Route path="/s_marks">
          <ViewMarks />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/youTube">
          <YouTube />
        </Route>
        <Route path="/reactPlayer">
          <ReactPlayer />
        </Route>
        <Route path="/zoom">
          <Zoom />
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;