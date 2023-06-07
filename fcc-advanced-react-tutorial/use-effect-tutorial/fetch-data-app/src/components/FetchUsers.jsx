import { useEffect, useState } from "react";
import "./fetch-users.css";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const url = "https:/api.github.com/users";

  // Fetch user data using useEffect
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        // console.log(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <section>
      <h3>Github users</h3>
      <ul className="users-container">
        {users.map(({ id, login, avatar_url, html_url }) => {
          return (
            <li className="user-profile" key={id}>
              <img
                className="user-profile-image"
                src={avatar_url}
                alt={login}
              />
              <div className="user-name-link-container">
                <h5 className="user-profile-name">{login}</h5>
                <a className="user-profile-link" href={html_url}>
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchUsers;
