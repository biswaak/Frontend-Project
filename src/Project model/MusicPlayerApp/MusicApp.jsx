import React from'react';
export default function MusicsAppComponent()
{
    return(
        //<div className=" container-fluid vh-100 d-flex justify-content-center align-items-center" style={{backgroundImage : `url(${bgPhoto})`, backgroundSize : 'cover', height : '100vh'}}></div>
        <div className="container-fluid">
            
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                
                <div className="text-white me-5">
                <nav className="col-3">
                    <div className="mb-2">
                    <ul className="list-unstyled">
                        <li><button className="btn btn-outline-light mb-2">Albums</button></li>
                        <li><button className="btn btn-outline-light mb-2">Online Music</button></li>
                        <li><button className="btn btn-outline-light mb-2">Upload Music</button></li>
                        <li><button className="btn btn-outline-light mb-2">Playlist</button></li>
                        <li><button className="btn btn-outline-light mb-2">Artists</button></li>
                        <li><button className="btn btn-outline-light mb-2">Favorites</button></li>
                    </ul>
                    <hr className="text-white" />
                    <div>
                        <button className="btn btn-outline-light me-2">Recently Played</button>
                        <button className="btn btn-outline-light">Browse All</button>
                    </div>
                    </div>
                </nav>
                    
                </div>
                
                <div className="text-white ms-5">
                    <h2 className="mb-4">Player Controls</h2>
                    <button className="btn btn-outline-light mb-2">Play</button>
                    <button className="btn btn-outline-light mb-2">Add to Favorites</button>
                </div>
            </div>


        </div>
    );
}

