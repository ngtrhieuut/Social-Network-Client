import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import { likePost } from "../../api/PostsRequest";
import { getAllUser } from "../../api/UserRequests";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';

function Post({data}) {
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.authReducer.authData);

    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length);
  
    const publicFolder = "http://localhost:5000/images/";
    const handleLike = () => {
      likePost(data._id, user._id);
      setLiked((prev) => !prev);
      liked ? setLikes((prev)=>prev-1) : setLikes((prev)=>prev+1)
    };

    // const [persons, setPersons] = useState([]);
  
    // useEffect(() => {
    //   const fetchPersons = async () => {
    //     const { data } = await getAllUser();
    //     setPersons(data);
    //   };
    //   fetchPersons();
    // }, []);
    
    // const person = persons.find(per => per._id === data.userId)

    return (
        <div className="Post">
            <img src={data.image ? "http://localhost:5000/images/" + data.image : ""} alt="" />
            <div className="postReact">
                <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike}/>
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span style={{color: "var(--gray)", fontSize: '12px'}}>
                {likes} likes
            </span>
            <div className="detail">
                <span>
                <b>{data.name}</b>
                </span>
                <span>{data.desc}</span>
            </div>
        </div>
    );
}

export default Post;