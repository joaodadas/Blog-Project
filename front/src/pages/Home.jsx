import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const back = "http://localhost:5050/home";
  const navigate = useNavigate();
  const [post, setPost] = useState("");
  const name = localStorage.getItem("name");

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  function create() {
    const id = localStorage.getItem("id")
    axios.post(back, {post, id}).them().catch();
  }

  function profile() {
    navigate("/Profile")
  }

  axios.get()

  return (
    <>
      <div>
        <h1>Welcome {name}</h1>
        <button onClick={profile}>Profile</button>
        <br />
        <h2>logout</h2>
        <button onClick={logout}>out</button>
        <br/> <br/> <br/>
        <div>
          <input type="text" onChange={(e) => setPost(e.target.value)}></input>
        </div>
        <br />
        <div>
          <button onClick={create}>Post</button>
        </div>
      </div>
    </>
  );
}

export default Home;
