import { useEffect, useState } from "react";
import InfoCard from "./components/InfoCard";

function Home() {
  const [users, setUsers] = useState([]);// Stores list of users fetched from API.
  const [searchQuery, setSearchQuery] = useState(""); // Stores text entered in search input.
  const [loading, setLoading] = useState(true);// Tracks whether the application is still loading data.

  // Fetch user data when the component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  //filters users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <h1>User Directory</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      //Display loading message while data is being fetched
      {loading ? (
        <p>Loading...</p>
      ) : filteredUsers.length === 0 ? (
        //Displays a message when no matching users are found
        <p>No users found.</p>
      ) : (//Display all matching users
        <div className="users-grid">
          {filteredUsers.map((user) => (
            <InfoCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;