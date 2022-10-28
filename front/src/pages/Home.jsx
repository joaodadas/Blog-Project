import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../config";

function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    server
      .get(`/home`)
      .then((data) => {
        setPosts(data.data);
      })
      .catch();
  }, []);

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  function create() {
    const id = localStorage.getItem("id");
    server.post(`/home`, { post, id }).then().catch();
  }

  function profile() {
    navigate("/Profile");
  }

  return (
    <>
      <div>
        <h1>Welcome {name}</h1>
        <button onClick={profile}>Profile</button>
        <br />
        <h2>logout</h2>
        <button onClick={logout}>out</button>
        <br /> <br /> <br />
        <div>
          <input type="text" onChange={(e) => setPost(e.target.value)}></input>
        </div>
        <br />
        <div>
          <button onClick={create}>Post</button>
        </div>
      </div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <>
          <br />
          <div>
            <p>{post.post}</p>
          </div>
          <br/>
        </>
      ))}
    </>
  );
}

export default Home;
