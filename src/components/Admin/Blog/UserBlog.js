import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { useStateValue } from "../../../DataLayer";
import PostCard from "./PostCard";
import "./UserBlog.css";


function UserBlog() {
  const [{ posts }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const addToPosts = (title, subject, body, author) => {
    dispatch({
      type: "ADD_TO_POSTS",
      payload: {
        title,
        subject,
        body,
        author,
      },
    });
  };


  // Code to utilize the functions below 
  window.onload = () => {
    const listViewButton = document.querySelector('.list-view-button');
    const gridViewButton = document.querySelector('.grid-view-button');

    listViewButton.onclick = () => showList();
    gridViewButton.onclick = () => gridList();

  }
  

  // Functions for toggling between list and grid view 
  function showList() {
    var $gridCont = document.getElementById("grid-container");

    if ($gridCont.classList.contains("list-view") == false)
      $gridCont.classList.add("list-view");
  }

  function gridList() {
    var $gridCont = document.getElementById("grid-container");
    $gridCont.classList.remove("list-view");
  }


  function getPosts() {
    db.collection("Posts").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type == "added") {
          console.log("code exectued", change.doc.data().title);
          addToPosts(
            change.doc.data().title,
            change.doc.data().subject,
            change.doc.data().body,
            change.doc.data().author
          );
        } else console.log("Else reached");
      });
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    );  console.log(filteredPosts.length)
  }, [search, posts]);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="userBlog">
    <div className="filter-buttons">
      <div className="list-view-button"><i className="fa fa-bars" aria-hidden="true" /> List view</div>
      <div className="grid-view-button"><i className="fa fa-th-large" aria-hidden="true" /> Grid view</div>
    </div>
    <div className="search-bar">
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Blog" id="input"/>
    </div>
      <div className="container grid-container" id="grid-container">
        <div className="row">
          {
            filteredPosts.length == 0 ? 
              <h1>No result found</h1>
            :
              filteredPosts.map((post) => {
              console.log(filteredPosts.length)
              return <PostCard Post={post}></PostCard>
          })}
        </div>
      </div>
      <h1>
    <p></p>
      </h1>
    </div>
    
  );
}

export default UserBlog;
