import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../config";

function Profile() {
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const [posts, setPosts] = useState([]);

  console.log(posts);
  useEffect(() => {
    server
      .get(`/profile/${id}`)
      .then((data) => {
        setPosts(data.data);
      })
      .catch();
  }, []);

  function deletePost(id) {
    console.log(id);
    server.delete(`/delete/${id}`).then().catch();
  }

  return (
    <>
      <h1>{name} Profile</h1>
      <br />
      <br />
      <h2>Posts</h2>
      <br />
      {posts.map((post) => (
        <>
          <div>
            <br />
            <p key={Math.random()}>{post.post}</p>
            <button onClick={() => deletePost(post.id)}>delete</button>
            <br />
          </div>
        </>
      ))}
    </>
  );
}

export default Profile;
