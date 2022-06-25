import PostSide from '../../components/PostSide/PostSide.jsx';
import ProfileSide from '../../components/profileSide/ProfileSide.jsx';
import RightSide from '../../components/RightSide/RightSide.jsx';
import './Home.css';

function Home() {
    return ( 
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    );
}

export default Home;