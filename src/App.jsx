import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import UserCard from "./components/usercard";
import SearchBar from "./components/searchbar";
import { UserContext } from "./context/usercontext";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <UserContext.Provider value={users}>
      <Navbar />

      <div className="container">
        <SearchBar setSearch={setSearch} />

        <div className="grid">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>
      </div>

      <Footer />
    </UserContext.Provider>
  );
}

export default App;