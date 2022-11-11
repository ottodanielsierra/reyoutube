import image from './../assets/img/chunchyroll.jpg';
import Typography from '@mui/material/Typography';

function Description() {
    return (
        <div>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-48x48">
                        <img alt='Channel' src={image} style={{ borderRadius: '10px' }} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <div className="columns">
                            <div className="column">
                                <p>
                                    <strong className='has-text-light'>CrunchyRoll</strong> <span className="icon" style={{color: 'red'}}><i className="fa-solid fa-circle-check"></i></span>
                                    <br />
                                    <Typography variant="caption" display="block" gutterBottom>
                                        9.77M Subscribers
                                    </Typography>
                                </p>
                            </div>
                            <div className="column has-text-right">
                                <button className="button is-danger is-outlined"><b>Subscribe</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <br/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </p>
            <a href='/' className="is-size-7" style={{opacity: 0.8, color: 'white'}}><b>SHOW MORE</b></a>
        </div>
    );
}

export default Description;