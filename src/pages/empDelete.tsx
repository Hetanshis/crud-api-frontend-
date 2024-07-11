import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Todo } from "../interface/todo";

const DeleteEmp = () => {
  const { id } = useParams();
  const [data, setData] = useState<Todo>();
  const navigate = useNavigate();
  const deleteTodo = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/todo/delete/${id}`
      );
      alert("Deleted data successfully");
      setData(response.data);
      navigate("/");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      <h1>Delete Employee</h1>
      <button className="btn btn-primary" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
};
export default DeleteEmp;
