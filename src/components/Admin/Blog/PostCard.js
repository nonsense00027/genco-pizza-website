import React from 'react'
import './UserBlog.css'
function PostCard({Post}) {

    return (
        <div className="col-12 col-md-6 col-lg-4">
        <a href="">
            <div className="card">
            <img className="card-img-top" src="https://picsum.photos/362/180" alt="Card image cap" width="362px" height="180px"/>
            <div className="card-body">
                <h5 className="card-tag">INSPIRING</h5>
                <h5 className="card-title">{Post.title}</h5>
            
                    <p>By <span className="author">{Post.author} </span>● Oct 24, 2020</p>

            </div>
            </div>
        </a>

    </div>
    )
}

export default PostCard
