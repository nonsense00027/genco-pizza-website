import React from 'react'

function Post(post) {
    return (
        <div className="post">
            <div className="post__container">
                <div className="post__header">
                        
                </div>
                <div className="post__title">
                    <h1>{post.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Post
