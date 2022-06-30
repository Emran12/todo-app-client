import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import CompletedTask from "./Pages/CompletedTask";
import Calendar from "./Pages/Calendar";
import ToDo from "./Pages/ToDo";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route
            path="/completed-task"
            element={<CompletedTask></CompletedTask>}
          ></Route>
          <Route path="/calendar" element={<Calendar></Calendar>}></Route>
          <Route path="/to-do" element={<ToDo></ToDo>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
