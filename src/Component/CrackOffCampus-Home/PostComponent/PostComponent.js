import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommunityPostsData } from './../../../redux/actions/actions'
import PostCardComponent from "./PostCardComponent";
function PostComponent() {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchCommunityPostsData())
    }, [])

    const ref_loading = useRef(null);

    ///PAGINATION LOAD MORE
    const community_posts = useSelector(state => state.community_posts)
    const [visible, setVisible] = useState(4);

    let isLoading = true;
    function showMorePosts(e) {
        if (isLoading) {
            setTimeout(() => {
                setVisible(visible + 2);
                ref_loading.current.classList.remove('active')
                isLoading = true;
            }, 300)

            ref_loading.current.classList.add('active')
        }
        isLoading = false;


    }
    ///////


    return (
        <div className="PostComponent_COMMUNITY_POSTS" onScroll={showMorePosts}>
            {community_posts.data.slice(0, visible).map((post) => <PostCardComponent {...post}  />)}
            <div className="PostComponent_Loading" ref={ref_loading}></div>
        </div>
    )
}
export default PostComponent;
