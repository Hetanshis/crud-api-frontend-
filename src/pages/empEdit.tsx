import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateEmp = () => {
  const { id } = useParams();
  const [todo, setUpdateTodo] = useState("");
  const navigate = useNavigate();

  //Update Todo api

  const UpdateTodo = async () => {
    try {
      console.log(todo);
      const response = await axios.put(
        `http://localhost:9000/todo/update/${id}`,
        {
          todo,
        }
      );
      alert("Update data successfully");
      navigate("/");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="offset-lg-4 col-lg-4">
            <div className="container">
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-title">
                  <h2>Update Employee</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="todo"
                          id="todo"
                          value={todo}
                          onChange={(e) => setUpdateTodo(e.target.value)}
                          className="form-control"
                          placeholder="Enter Todo"
                        />
                        <br />
                      </div>
                      <br />
                      <div className="form-group">
                        <button
                          className="btn btn-primary me-3"
                          type="submit"
                          onClick={UpdateTodo}
                        >
                          Change
                        </button>

                        <Link to={"/"} className="btn btn-success">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateEmp;
