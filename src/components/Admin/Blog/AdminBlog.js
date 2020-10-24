import React, {useState, useEffect} from 'react'
import firebase from '../../../firebase'
import { useStateValue } from '../../../DataLayer'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './AdminBlog.css'

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
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                            <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Blogs</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Posts</li>
                                </ol>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <form id="blog__entry">
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
                                    <Editor/>
                                </div>
                                <button type="submit" id= "form__submit">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
                
        </div>
        
    )
}

export default AdminBlog
