
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../config";

import "../index.css";

function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    server
      .get(`/`)
      .then((data) => {
        setPosts(data.data);
      })
      .catch();
  }, []);

  function logout() {
    localStorage.clear();
    navigate("/Login");
  }

  function create() {
    const id = localStorage.getItem("id");
    server.post(`/`, { post, id }).then().catch();
  }

  function profile() {
    navigate("/Profile");
  }

  return (
    <>
        {/* Cabeçalho */}
        <header className="header-main">
          <div className="header-inside">
            <div className="header-div">
              <div className="header-icon" />
              <input placeholder="Explore" />
            </div>
            <div className="header-div">
              <button className="header-home">Home</button>
              <div className="header-explor " />
              <div className="header-message" />
              <div className="header-notifications" />
              <button onClick={profile}>Profile</button>
              <button onClick={logout}>out</button>
            </div>
          </div>
        </header>
      <div className="container">
        

        {/* Parte Principal */}
        <main className="main">

          <div className="inputContainer">
              <div className="input">
                <input
                  placeholder="What`s Heppening?"
                  className="input"
                  type="text"
                  onChange={(e) => setPost(e.target.value)}
                />
              </div>
              <div className="inputButton">
                <button className="buttonInput" onClick={create}>Post</button>
              </div>
          </div>

          <div className="postContainer">
            {posts.map((post) => (
              <div className="post">
                <br />
                <div>
                  <p>{post.post}</p>
                </div>
                <br />
              </div>
            ))}
          </div>

        </main>
      </div>
    </>
  );
}

export default Home;
