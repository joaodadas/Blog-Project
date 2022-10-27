import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../config";

function Profile() {
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    server
      .get(`/profile/${id}`)
      .then((data) => {
        setPosts(data.data);
      })
      .catch();
  }, []);

  return (
    <>
      <h1>{name} Profile</h1>
      <br />
      <br />
      <h2>Posts</h2>
      <br />
      {posts.map((post) => (
        <p key={Math.random()}>{post.post}</p>
      ))}
    </>
  );
}

export default Profile;
