import './Posts.css';
import Post from '../Post/Post.jsx';
// import {PostsData} from '../../Data/PostsData.js';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getTimelinePost } from '../../actions/postAction';
import { useParams } from "react-router-dom";


function Posts() {
    const params = useParams()
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.authReducer.authData);
    const {posts, loading} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(getTimelinePost(user._id))
    }, []);

    if (!posts) {
        return 'No Posts';
    } 
    if (params.id && posts.length > 0) posts = posts.filter(post => post.userId === params.id);

    return (
        <div className="Posts">
            {loading 
                ? "Fetching posts..."
                : posts.map((post, id) => {
                    return (
                        <Post data={post} id={id} key={Math.random()}/>
                    )
            })}
        </div>
    );
}

export default Posts;