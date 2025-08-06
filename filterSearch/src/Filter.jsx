import { useState } from "react";

const Filter = () => {
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
    const [search, setSearch] = useState("");
    const [items] = useState(data);
    const [filteredItems, setFilteredItems] = useState(data);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        const result = items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(result);
  };
  return (
    <div className='Filter'>
      <h2>Search Filter Example</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} - {item.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter
