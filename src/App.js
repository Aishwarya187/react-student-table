import React from "react";
import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Alice", age: 20, grade: "A" },
    { id: 2, name: "Bob", age: 21, grade: "B" },
    { id: 3, name: "Charlie", age: 22, grade: "C" },
    { id: 4, name: "David", age: 23, grade: "A" },
    { id: 5, name: "Eve", age: 20, grade: "B" },
    { id: 6, name: "Frank", age: 24, grade: "A" },
    { id: 7, name: "Grace", age: 22, grade: "C" },
    { id: 8, name: "Heidi", age: 21, grade: "B" },
    { id: 9, name: "Ivan", age: 25, grade: "B" },
    { id: 10, name: "Judy", age: 20, grade: "A" },
  ];

  return (
    <div className="App">
      <h1>Student Table</h1>
      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
