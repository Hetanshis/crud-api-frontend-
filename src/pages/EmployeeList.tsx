import { listClasses } from "@mui/material";
import { textAlign } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastBody } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Todo } from "../interface/todo";

const EmployeeLists = () => {
  const [filter, setFilter] = useState("");
  const [empData, setEmpData] = useState<Todo[]>([]);
  const navigate = useNavigate();
  const employee = async () => {
    const response = await axios.get("http://localhost:9000/todo/lists");
    console.log(response.data);
    setEmpData(response.data);
  };

  useEffect(() => {
    employee;
  });

  const LoadDetails = (_id: any) => {
    navigate("/employee/details/" + _id);
  };
  const LoadEdit = (_id: any) => {
    navigate("/employee/update/" + _id);
  };

  const LoadDelete = (_id: any) => {
    navigate("/employee/delete/" + _id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Lists</h2>
        </div>

        <div>
          <label className="form-label h4 mt-3">Search</label>
          <div style={{ textAlign: "center" }}>
            {" "}
            <input
              type="text"
              className="form-control"
              style={{ width: "290px" }}
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="card-body">
          <div>
            <Link className="btn btn-success" to={"/employee/create"}>
              Add New (+)
            </Link>
          </div>

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Todo</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empData.map((item: any) => (
                <tr key={item._id}>
                  <td>{item.todo}</td>

                  <td>
                    <a
                      onClick={() => {
                        LoadEdit(item._id);
                      }}
                      className="btn btn-success me-3"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        LoadDelete(item._id);
                      }}
                      className="btn btn-danger me-3"
                    >
                      Remove
                    </a>
                    <a
                      className="btn btn-primary"
                      onClick={() => {
                        LoadDetails(item._id);
                      }}
                    >
                      Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button type="button" onClick={employee} className="btn btn-primary">
            View
          </button>
        </div>
      </div>
    </div>
  );
};
export default EmployeeLists;
