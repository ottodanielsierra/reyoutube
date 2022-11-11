import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Player from './components/Player.js';
import Comment from './components/Comment.js';
import Description from './components/Description';
import FeedVideo from './components/FeedVideo';

import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/MicNone';
import NotificationIcon from '@mui/icons-material/Notifications';
import UploadIcon from '@mui/icons-material/Upload';

import thumb1 from './assets/img/thumb1.png';
import thumb2 from './assets/img/thumb2.jpg';
import thumb3 from './assets/img/thumb3.jpg';

import profile_pic from './assets/img/otto.jpg';

function App() {

    let FeedVideos = [
        {
            thumbnail: thumb1,
            title: "Full Metal ALchemist - Opening 1 Full",
            channel: "CrunchyRoll",
            views: "2.6M"
        },
        {
            thumbnail: thumb2,
            title: "Top 10 Boku No Her Academia Characters",
            channel: "AnimeTops",
            views: "1.5M"
        },
        {
            thumbnail: thumb3,
            title: "100 facts about Shaman King",
            channel: "AnimeTops",
            views: "2.2M"
        }
    ];

    let listFeedVideos = FeedVideos.map((item, index) =>
        <FeedVideo key={index} thumbnail={item.thumbnail} title={item.title} channel={item.channel} views={item.views}/>
    );

    return (
        <div id='app-container' className='has-text-light'>
            <div className="columns">
                <div className="column is-one-fifth">
                    <Sidebar />
                </div>
                <main className="column">
                    <div className='p-4 is-flex'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <MicIcon />
                        </IconButton>
                        <input className="searchbar" type="text" placeholder="Type to search" />
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <UploadIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <NotificationIcon />
                        </IconButton>
                        <figure>
                            <p className="image is-48x48">
                                <img alt='Channel' src={profile_pic} style={{ borderRadius: '10px' }} />
                            </p>
                        </figure>
                    </div>
                    <Divider />
                    <section id='content' className="columns mt-5">
                        <div className="column is-two-thirds">
                            <Player />
                            <hr />
                            <Description />
                            <hr />
                            <Comment />
                        </div>
                        <div className="column">
                            <div id="autoplay">
                                <FormGroup>
                                    <FormControlLabel
                                        value="start"
                                        control={<Switch color="warning" />}
                                        label={
                                            <Typography sx={{ fontSize: 16, flex: 'auto' }}>
                                                <b>Autoplay</b>
                                            </Typography>
                                        }
                                        labelPlacement="start"
                                        />
                                </FormGroup>                                
                            </div>
                            {listFeedVideos}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
