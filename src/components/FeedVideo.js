function FeedVideo(props) {
    return (
        <div className="feedvideo">
            <img alt="Thumbnail" className="thumbnail" src={props.thumbnail}/>
            <p><b>{props.title}</b></p>            
            <p style={{opacity: 0.8}} className="is-size-7">
                <b>{props.channel}</b>
                <span className="icon" style={{color: 'red'}}>
                <i className="fa-solid fa-circle-check"></i></span>
                <small>{props.views}</small>
            </p>
        </div>
    );
}

export default FeedVideo;