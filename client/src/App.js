import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  // const displayInfo = () => {
  //   console.log(name + age + country + position + wage);
  // };
  return (
    <div className="App">
      <div className="info">
        <label htmlFor="">Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label htmlFor="">Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label htmlFor="">Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label htmlFor="">Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <hr />
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>
        {employeeList.map((val, key) => {
          return (
            <div className="employeetable">
              <div>
                <strong>Name: </strong>
                <span>{val.name}</span>
              </div>
              <div>
                <strong>Age: </strong>
                <span>{val.age}</span>
              </div>
              <div>
                <strong>Country: </strong>
                <span>{val.country}</span>
              </div>
              <div>
                <strong>Position: </strong>
                <span>{val.position}</span>
              </div>
              <div>
                <strong>Wage: </strong>
                <span>{val.wage}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
