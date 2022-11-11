function Comment() {
    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-48x48">
                    <img alt="Profile" src="https://thypix.com/wp-content/uploads/2021/10/anime-avatar-profile-picture-thypix-78.jpg" style={{borderRadius: 10}}/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong className="has-text-light">John Smith</strong> <small style={{opacity: 0.8}}>@johnsmith</small> <small style={{opacity: 0.8}}>31m</small>
                        <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    </p>
                </div>
                <nav className="level is-mobile">
                    <div className="level-left">
                        <a href="/"className="level-item" style={{color: 'red'}}>
                            <span className="icon is-small"><i className="fas fa-reply"></i></span>
                        </a>
                        <a href="/"className="level-item" style={{color: 'red'}}>
                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                        </a>
                        <a href="/"className="level-item" style={{color: 'red'}}>
                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                        </a>
                    </div>
                </nav>
            </div>            
        </article>
    );
}

export default Comment;