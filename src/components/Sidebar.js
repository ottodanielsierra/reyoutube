import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from './../assets/img/youtube-logo.png';
import channel from './../assets/img/chunchyroll.jpg';

function Sidebar() {
    return (
        <div className='sidebar'>            
            <div className='py-4'>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <img alt="logo" src={logo} width={100} style={{verticalAlign: 'middle'}}/>
            </div>
            <aside className="menu">
                <ul className="menu-list">
                    <li><a href="/"><i className="fa-regular fa-compass"></i> Explore</a></li>
                    <li><a href="/"><i className="fas fa-fire"></i> Trending</a></li>
                    <li><a href="/"><i className="far fa-circle-play"></i> Subscription</a></li>
                </ul>
                <Divider className='my-5'/>
                <ul className="menu-list">
                    <li><a href="/"><i className="fas fa-book"></i> Library</a></li>
                    <li><a href="/"><i className="fas fa-clock-rotate-left"></i> History</a></li>
                    <li><a href="/"><i className="far fa-clock"></i> Watch later</a></li>
                    <li><a href="/"><i className="far fa-heart"></i> Liked videos</a></li>
                    <li><a href="/"><i className="fas fa-angle-down"></i> <small><b>SHOW MORE</b></small></a></li>
                </ul>
                <p className="menu-label">
                    SUBSCRIPTIONS
                </p>
                <ul className="menu-list">
                    <li>
                        <a href="/">
                            <img className='channel-img' alt="channel" src={channel}/>
                            <span>CrunchyRoll</span>
                        </a>
                    </li>
                    <li><a href="/"><i className="fas fa-angle-down"></i> <small><b>SHOW MORE</b></small></a></li>
                </ul>
                <p className="menu-label">
                    MORE FROM YOUTUBE
                </p>
                <ul className="menu-list">
                    <li><a href="/"><i className="fas fa-gear"></i> Settings</a></li>
                    <li><a href="/"><i className="fas fa-circle-exclamation"></i> Send Feedback</a></li>
                </ul>
            </aside>
        </div>

    );
}

export default Sidebar;