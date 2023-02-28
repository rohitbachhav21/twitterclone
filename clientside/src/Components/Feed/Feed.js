
import React, { useEffect, useState } from "react";
import '../Page.css'
import Post from "../Posts/Post";
import TweetBox from './TweetBox'

const Feed = () => {

    const [posts, setPosts] = useState([]);
        
    useEffect(()=>{
        fetch('http://localhost:5000/post')
        .then(res=>res.json())
        .then(data=>{
            setPosts(data)
        })
    },[posts])
    
    return (
        <>
        <div className="page">
        <h2 className="pageTitle">Home</h2>
        <TweetBox />
        {
            posts.map(p=> <Post key={p._id} p={p}/>)
        }
        </div>
        </>

    )
}
export default Feed;