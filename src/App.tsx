import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEmp from "./pages/empCreate";
import DeleteEmp from "./pages/empDelete";
import DetailsEmp from "./pages/empDetails";
import UpdateEmp from "./pages/empEdit";
import EmployeeLists from "./pages/EmployeeList";

function App() {
  return (
    <div className="App">
      <h1>React Js Crud Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeLists />}></Route>
          <Route path="/employee/create" element={<CreateEmp />}></Route>
          <Route path="/employee/update/:id" element={<UpdateEmp />}></Route>
          <Route path="/employee/delete/:id" element={<DeleteEmp />}></Route>
          <Route path="/employee/details/:id" element={<DetailsEmp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
