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

    const ref_ads = useRef(null);

    ///PAGINATION LOAD MORE
    const community_posts = useSelector(state => state.community_posts)
    const [visible, setVisible] = useState(4);
    const [add, setAdd] = useState(0);
    let isLoading = true;
    function showMorePosts(e) {
        if (isLoading) {
            setTimeout(() => {
                setVisible(visible + 2);
                //ref_loading.current.classList.remove('active')
                isLoading = true;
            }, 1000)

            //ref_loading.current.classList.add('active')
        }
        isLoading = false;
    }
    let arr = [
        {
            title: "Life Lapse",
            image: "https://img.youtube.com/vi/0jhFwxnfrB8/sddefault.jpg",
            desc: "A Android app to make Transformation videos",
            url:"https://play.google.com/store/apps/details?id=com.ankush.lifelapse"
        },
        {
            title: "My E wallet",
            image: "https://play-lh.googleusercontent.com/U-OsA-GNc5BWqlZWbI0pXwM70yyYntF_ELA__M8h3UmAPCObvuZKk6z08tlr0wqt6IM=w720-h310-rw",
            desc: "My E-Wallet makes managing personal finances. Now Easily Record Your Transactions and generate PDF of it.",
            url:"https://play.google.com/store/apps/details?id=com.shrivastavas.myewallet"
        },
        {
            title: "Extended Control",
            image: "https://play-lh.googleusercontent.com/eSJGSrXTSAxa1oqrs-TaEj9ruxnuj9RfDKwMDKqWvdGAbBAhtlTReLOfrG48LMeCvw=w720-h310-rw",
            desc: "Use your volume keys for different function of your choice in different Games/Apps.",
            url:"https://play.google.com/store/apps/details?id=com.ankush.project.extended_control"
        },
    ]

    ///////
    let index = 0;
    function handleAdsClose() {
        setInterval(() => {
            index = (index + 1) % 3;
            setAdd(index);
            console.log(index)
        }, 3000);
    }
    function handleOpenLink() {
         window.open(arr[add].url)
    }
    useEffect(() => {
        handleAdsClose()
    }, [])

    return (
        <div className="PostComponent_COMMUNITY_POSTS_PARENT">
            <div className="PostComponent_COMMUNITY_POSTS" onScroll={showMorePosts}>
                {community_posts.data.slice(0, visible).map((post) => <PostCardComponent {...post} />)}
            </div>
            <div className="Ads" ref={ref_ads} onClick={() => handleOpenLink()}>
                <h1 id="ads_h1">My Projects</h1>
                <img id="Ads_image" src={arr[add].image}></img>
                <h1 id="ads_title">{arr[add].title}</h1>
                <h1 id="ads_desc">{arr[add].desc}</h1>
            </div>
        </div>

    )
}
export default PostComponent;
