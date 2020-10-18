import React, { useEffect } from 'react'
import firebase from '../../../firebase'
import { useStateValue } from '../../../DataLayer'
import Post from './Post'
function UserBlog() {

    const [{posts}, dispatch] = useStateValue();

    const db = firebase.firestore();

    const addToPosts = (title,subject,body) => {
        dispatch({
            type: 'ADD_TO_POSTS',
            post: {
                title,
                subject,
                body,         
            }
        })
    }



    function getPosts(){
        db.collection('Posts').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach((change) => {
             
                if(change.type == 'added'){
                    console.log('code exectued', change.doc.data().title)
                     addToPosts(change.doc.data().title,change.doc.data().subject,change.doc.data().body);
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
                {posts.map((post) => 
                (  <Post
                    id = {post.id}
                    title = {post.title}
                    subject = {post.subject}
                    body = {post.body}
                ></Post>)
    
                )}
        </div>
    )
}

export default UserBlog
