import { useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/authServices";

const Users = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: 0,
    birth: "",
    peruvian: true,
    height: 0.0,
  });

  const sendUserData = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="App">
      <form onSubmit={sendUserData}>
        <h2>User data</h2>
        <div className="form_group">
          <label>Name</label>
          <input type="text" name="name" onChange={handleInputChange} />
        </div>
        <div className="form_group">
          <label>Age</label>
          <input
            type="number"
            min={0}
            step={1}
            name="age"
            onChange={handleInputChange}
          />
        </div>
        <div className="form_group">
          <label>Birth</label>
          <input type={"datetime"} name="birth" onChange={handleInputChange} />
        </div>
        <div className="form_group">
          <label>Peruvian</label>
          <input type="checkbox" name="peruvian" onChange={handleInputChange} />
        </div>
        <div className="form_group">
          <label>Height</label>
          <input
            type="number"
            min={0}
            step={0.01}
            name="height"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Users;
