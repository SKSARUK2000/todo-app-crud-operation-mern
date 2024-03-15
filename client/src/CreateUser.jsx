import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/todo/adduser", { name, email, age })
      .then((results) => {
        console.log(results);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={submit}>
          <h2>Create User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
