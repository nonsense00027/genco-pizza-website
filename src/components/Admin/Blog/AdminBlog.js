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
        $(document).ready(function() {
            $('#summernote').summernote();
          });
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
                <form>
                    <div className="form__group">
                        <label>Enter Title</label>
                        <input type="text"  name="title "/>
                    </div>

                    <div className="form__group">
                        <label>Enter Subject</label>
                        <input type="text" name="subject" />
                    </div>

                    <div className="form__group">
                        <label>Enter Body</label>
                        <textarea id="summernote"></textarea>
                    </div>
                </form>

                <button type="submit" id= "form__submit">

                </button>
        </div>
        
    )
}

export default AdminBlog
