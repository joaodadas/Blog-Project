import axios from "axios"
import { useEffect, useState } from "react";

function Profile() {
    const name = localStorage.getItem("name")
    const id = localStorage.getItem("id")
    const back = `http://localhost:5050/profile/${id}`;
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(back, {id})
        .then((data) =>  {setPosts(data.data)}) 
        .catch()
    }, [])
    
    
    return (
        <>
            <h1>{name} Profile</h1>
            <br/><br/>
            <h3>Posts</h3>
            <br/>
            {posts.map((post) => (<p key={Math.random()}>{post.post}</p>))}



        
        
        </>

    )
}

export default Profile