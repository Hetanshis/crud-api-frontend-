import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Todo } from "../interface/todo";

const DetailsEmp = () => {
  const { id } = useParams();
  const [empData, setEmpData] = useState({});
  const navigate = useNavigate();

  const getTodo = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/todo/list/${id}`);
      setEmpData(response.data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Lists</h2>

          {<h1>This is todo title :{empData.todo}</h1>}

          <button className="btn btn-primary me-3" onClick={getTodo}>
            View
          </button>
          <Link to={"/"} className="btn btn-success">
            Back{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DetailsEmp;
