import "./LogoSearch.css";
import Logo from '../../img/logo.png';
import { UilSearch } from '@iconscout/react-unicons';
import { Link } from "react-router-dom";

function LogoSearch() {
    return ( 
        <div className="LogoSearch" style={{textDecoration: "none"}}>
            <Link to="/home">
                <img src={Logo} alt="Logo" />
            </Link>
            <div className="Search">
                <input type="text" placeholder="#Explore" />
                <div className="s-icon">
                    <UilSearch />
                </div>
            </div>
        </div>
    );
}

export default LogoSearch;