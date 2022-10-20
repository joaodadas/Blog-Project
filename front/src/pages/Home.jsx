import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const name = localStorage.getItem("name");

function Home() {
  const back = "http://localhost:5050/home";
  const navigate = useNavigate();
  const [post, setPost] = useState("");

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  function create() {
    axios.post(back, {post}).them().catch();
  }

  axios.get()

  return (
    <>
      <div>
        <h1>Welcome {name}</h1>
        <br />
        <h2>logout</h2>
        <button onClick={logout}>out</button>
        <br />
        <div>
          <input type="text" onChange={(e) => setPost(e.target.value)}></input>
        </div>
        <div>
          <button onClick={create}>Post</button>
        </div>
      </div>
      <div>
        <text></text>
      </div>
    </>
  );
}

export default Home;
