import React, { useEffect } from 'react'
import firebase from '../../../firebase'
import { useStateValue } from '../../../DataLayer'
import PostCard from './PostCard'
import './UserBlog.css'
import Post from './Post'
function UserBlog() {

    const [{posts}, dispatch] = useStateValue();

    const db = firebase.firestore();

    const addToPosts = (title,subject,body,author) => {
        dispatch({
            type: 'ADD_TO_POSTS',
            post: {
                title,
                subject,
                body,   
                author      
            }
        })
    }
    

    function showList(e) {
        var $gridCont = document.getElementById('grid-container')
        e.preventDefault();
        if($gridCont.classList.contains('list-view') == false) $gridCont.classList.add('list-view')
        
      }

      function gridList(e) {
        var $gridCont = document.getElementById('grid-container')
        e.preventDefault();
        $gridCont.classList.remove('list-view');
      }

    function getPosts(){
        db.collection('Posts').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach((change) => {
             
                if(change.type == 'added'){
                    console.log('code exectued', change.doc.data().title)
                     addToPosts(change.doc.data().title,change.doc.data().subject,change.doc.data().body,change.doc.data().author);
                }
                else
                     console.log('Else reached')
            })
        })
       }
        
     useEffect(() => {
         getPosts()
     },[])

    return (
        <div className="userBlog">

                <div className="container mb-3 mt-3">
                    <button className="btn btn-primary btn-grid" onClick={gridList}>Grid View</button>
                    <button className="btn btn-danger btn-list" onClick={showList}>List View</button>
                </div>

                <div className="container grid-container" id="grid-container">

                    <div className="row">
                            
                            {posts.map(post => (
                                <PostCard Post={post}></PostCard>
                            ))}                        
                    </div>
                </div>















            
                {/* {posts.map((post) => 
                (  <Post
                    id = {post.id}
                    title = {post.title}
                    subject = {post.subject}
                    body = {post.body}
                ></Post>)
    
                )} */}
        </div>
    )
}

export default UserBlog
