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
            <input className="inputHeader" placeholder="# Explore" />
          </div>
          <div className="header-div">
            <button className="buttonHeader">Home</button>
            <button className="buttonHeader" onClick={profile}>Profile</button>
            <button className="buttonHeader" onClick={logout}>out</button>
          </div>
        </div>
      </header>
      <div className="container">
        
        <div className="sideLeft">
          <div className="asideA"></div>
          <div className="asideB"></div>
        </div>
        <div className="asideTrend"></div>

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
              <button className="buttonInput" onClick={create}>
                Post
              </button>
            </div>
          </div>

          <div className="postContainer">
            {posts.map((post) => (
              <div className="mainPost">
                <div>Icone</div>
                <div className="post">
                  <div className="headerPost">
                    <div>Nome</div>
                    <div>Tres pontos</div>
                    
                  </div>

                  <div>
                    <p>{post.post}</p>
                  </div>

                  <div className="containerPostButton">
                    <div className="postButtonLike">Like</div>
                    <div className="postButtonRetweet">Retweet</div>
                    <div className="postButtonComment">Comment</div>
                    <div className="postButtonSave">Save</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </>
  );
}

export default Home;
