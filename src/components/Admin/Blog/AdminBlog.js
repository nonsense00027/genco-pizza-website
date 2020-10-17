import React, {useState, useEffect} from 'react'
import firebase from '../../../firebase'
import { useStateValue } from '../../../DataLayer'
function AdminBlog() {
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
        <div className="adminBlog">
                <h1>Gello</h1>
                {posts.map((post ) => (
                    <div className="post">
                        <h1>{post.title}</h1>
                        <h1>{post.subject}</h1>
                        <h1>{post.body}</h1>
                    </div>
                ))}
        </div>
    )
}

export default AdminBlog
