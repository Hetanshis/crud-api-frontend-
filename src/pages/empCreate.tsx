import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateEmp = () => {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const create = async () => {
    const response = await axios
      .post("http://localhost:9000/todo/create", {
        todo,
      })
      .then((res) => {
        console.log(res.data);
        alert("Saved Data successfully");
        navigate("/");
      });
  };
  return (
    <div>
      <div>
        <div className="row">
          <div className="offset-lg-4 col-lg-4">
            <div className="container">
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-title">
                  <h2>Create Employee</h2>
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
                          onChange={(e) => setTodo(e.target.value)}
                          className="form-control"
                          placeholder="Enter Todo"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <button
                          className="btn btn-primary me-3"
                          type="submit"
                          onClick={create}
                        >
                          Save
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
export default CreateEmp;
