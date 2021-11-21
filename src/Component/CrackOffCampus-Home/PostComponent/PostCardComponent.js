import React from "react";

import { StarFill, PersonSquare } from 'react-bootstrap-icons';
function PostCardComponent(post) {
    return (
        <div className="POST_CARD_COMPONENT">
            <h1 id="post_date">{post.post_date}</h1>
            <h1 id="post_title">{post.post_title}</h1>
            <p id="post_data">{post.post_data}</p>
            <div>
                {[...Array(Number(post.post_rating))].map((el, i) => {
                    return (
                        <StarFill key={i} />
                    )
                })}
            </div>

            <div className="post_user">
                <PersonSquare id="post_userProfileImage" />
                <h2 id="post_userID">User: {post.post_userId}</h2>
            </div>
        </div>
    )
}
export default PostCardComponent;