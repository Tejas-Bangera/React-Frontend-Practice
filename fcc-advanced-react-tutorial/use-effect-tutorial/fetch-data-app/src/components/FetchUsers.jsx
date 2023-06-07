import { useEffect, useState } from "react";
import "./fetch-users.css";

const FetchUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <section>
        <h3>Github users</h3>
        <ul className="users-container">
          <li className="user-profile">
            <div className="user-profile-image skeleton"></div>
            <div className="user-name-link-container">
              <div className="skeleton-profile-name skeleton"></div>
              <div className="skeleton-profile-link skeleton"></div>
            </div>
          </li>
          <li className="user-profile">
            <div className="user-profile-image skeleton"></div>
            <div className="user-name-link-container">
              <div className="skeleton-profile-name skeleton"></div>
              <div className="skeleton-profile-link skeleton"></div>
            </div>
          </li>
          <li className="user-profile">
            <div className="user-profile-image skeleton"></div>
            <div className="user-name-link-container">
              <div className="skeleton-profile-name skeleton"></div>
              <div className="skeleton-profile-link skeleton"></div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
  if (isError) {
    return <h3>There was an error...</h3>;
  }

  return (
    <section>
      <h3>Github users</h3>
      <ul className="users-container">
        {users.map(({ id, login, avatar_url, html_url }) => {
          return (
            <li className="user-profile" key={id}>
              <img
                className="user-profile-image skeleton"
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
