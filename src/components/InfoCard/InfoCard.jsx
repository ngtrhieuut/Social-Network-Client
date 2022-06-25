import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthAction";

function InfoCard() {

    const dispatch = useDispatch();
    const [modalOpened, setModalOpened] = useState(false);
    const profileUserId = useParams().userId;
    const [profileUser, setProfileUser] = useState({});
    const { user } = useSelector((state) => state.authReducer.authData);
    
    const handleLogOut = ()=> {
      dispatch(logout())
    }
  
    useEffect(() => {
      const fetchProfileUser = async () => {
        if (profileUserId === user._id) {
          setProfileUser(user);
        } else {
          console.log("fetching")
          const profileUser = await UserApi.getUser(profileUserId);
          setProfileUser(profileUser);

        }
      };
      fetchProfileUser();
    }, [user]);

    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (
                    <div>
                        <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)}/>
                        <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user}/>
                    </div>
                ) : ("")}
            </div>

            <div className="info">
                <span><b>Status </b></span>
                <span>{profileUser.relationship}</span>
            </div>
            
            <div className="info">
                <span><b>Live in </b></span>
                <span>{profileUser.livesIn}</span>
            </div>
            
            <div className="info">
                <span><b>Works at </b></span>
                <span>{profileUser.worksAt}</span>
            </div>

            <div className="info">
                <span><b>Country </b></span>
                <span>{profileUser.country}</span>
            </div>

            <button className='button logout-button' onClick={handleLogOut}>
                Logout
            </button>
        </div>
    );
}

export default InfoCard;