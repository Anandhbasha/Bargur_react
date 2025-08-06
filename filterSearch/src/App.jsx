import React, { useState } from 'react';
import Filter from './Filter';

const data = [
  { id: 1, name: "Arun", age: 25, city: "Chennai" },
  { id: 2, name: "Bala", age: 30, city: "Madurai" },
  { id: 3, name: "Charan", age: 28, city: "Coimbatore" },
  { id: 4, name: "Deepak", age: 22, city: "Trichy" },
  { id: 5, name: "Ezhil", age: 27, city: "Salem" },
  { id: 6, name: "Farook", age: 29, city: "Chennai" },
  { id: 7, name: "Gopi", age: 32, city: "Madurai" },
  { id: 8, name: "Hari", age: 31, city: "Coimbatore" },
  { id: 9, name: "Ilayaraja", age: 26, city: "Trichy" },
  { id: 10, name: "Jeeva", age: 23, city: "Salem" },
  { id: 11, name: "Karthik", age: 24, city: "Chennai" },
  { id: 12, name: "Logan", age: 35, city: "Madurai" },
  { id: 13, name: "Mani", age: 21, city: "Coimbatore" },
  { id: 14, name: "Naveen", age: 33, city: "Trichy" },
  { id: 15, name: "Omprakash", age: 29, city: "Salem" },
  { id: 16, name: "Praveen", age: 28, city: "Chennai" },
  { id: 17, name: "Qureshi", age: 26, city: "Madurai" },
  { id: 18, name: "Ravi", age: 30, city: "Coimbatore" },
  { id: 19, name: "Sathish", age: 27, city: "Trichy" },
  { id: 20, name: "Thiru", age: 25, city: "Salem" },
  { id: 21, name: "Uday", age: 24, city: "Chennai" },
  { id: 22, name: "Vicky", age: 22, city: "Madurai" },
  { id: 23, name: "Wasim", age: 32, city: "Coimbatore" },
  { id: 24, name: "Xavier", age: 31, city: "Trichy" },
  { id: 25, name: "Yogesh", age: 26, city: "Salem" },
  { id: 26, name: "Zakir", age: 30, city: "Chennai" },
  { id: 27, name: "Ajith", age: 28, city: "Madurai" },
  { id: 28, name: "Baskar", age: 33, city: "Coimbatore" },
  { id: 29, name: "Chandru", age: 21, city: "Trichy" },
  { id: 30, name: "Dinesh", age: 27, city: "Salem" },
  { id: 31, name: "Elango", age: 29, city: "Chennai" },
  { id: 32, name: "Faisal", age: 24, city: "Madurai" },
  { id: 33, name: "Gokul", age: 25, city: "Coimbatore" },
  { id: 34, name: "Harish", age: 26, city: "Trichy" },
  { id: 35, name: "Indrajith", age: 28, city: "Salem" },
  { id: 36, name: "Jagan", age: 31, city: "Chennai" },
  { id: 37, name: "Kavin", age: 30, city: "Madurai" },
  { id: 38, name: "Lokesh", age: 23, city: "Coimbatore" },
  { id: 39, name: "Mohan", age: 35, city: "Trichy" },
  { id: 40, name: "Nithin", age: 22, city: "Salem" },
  { id: 41, name: "Oviya", age: 24, city: "Chennai" },
  { id: 42, name: "Pandi", age: 27, city: "Madurai" },
  { id: 43, name: "Qadir", age: 33, city: "Coimbatore" },
  { id: 44, name: "Raj", age: 25, city: "Trichy" },
  { id: 45, name: "Santhosh", age: 29, city: "Salem" },
  { id: 46, name: "Tamil", age: 30, city: "Chennai" },
  { id: 47, name: "Uma", age: 28, city: "Madurai" },
  { id: 48, name: "Vasanth", age: 26, city: "Coimbatore" },
  { id: 49, name: "Waseem", age: 32, city: "Trichy" },
  { id: 50, name: "Yuvan", age: 21, city: "Salem" },
];

const App = () => {
  let [count, setCount] = useState(0);
  let [bg, setBg] = useState("dark");
  const option = [10, 20, 30, 40, 50];
  let [filter, setFilter] = useState(10);

  const handleCount = () => {
    setCount(++count); 
  };

  const handleBg = () => {
    setBg(bg === "dark" ? "light" : "dark");
  };

  const handleDrop = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <button onClick={handleCount}>
        Count: {count}
      </button>{" "}
      <button
        onClick={handleBg}
        style={{
          backgroundColor: bg === "dark" ? "black" : "white",
          color: bg === "dark" ? "white" : "black",
        }}
      >
        {bg}
      </button>{" "}
      <select onChange={handleDrop} value={filter}>
        {option.map((x, index) => (
          <option key={index} value={x}>
            {x}
          </option>
        ))}
      </select>

      <h3>Showing {filter} Records</h3>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#ddd" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, filter).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Filter/>
    </div>
  );
};

export default App;