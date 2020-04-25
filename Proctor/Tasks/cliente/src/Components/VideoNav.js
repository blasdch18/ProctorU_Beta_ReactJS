import React, { Fragment } from 'react';

const VideoNav = () => {
    return ( 
        <Fragment>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" 
            id="sideNav">
                <h3 className="mb-0">Aqui va Video</h3>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <a className="nav-link js-scroll-trigger" >one camera</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <a className="nav-link js-scroll-trigger">two camera</a>
                            </div>
                        </li>
                    </ul>
                
            </nav>

        </Fragment>

     );
}
 
export default VideoNav;