import React from "react";
import bgPhoto from '../MusicPlayerApp/Assets/f1.jpg';
import { BrowserRouter,Routes , Route, Link } from "react-router-dom";
import MusicsAppComponent from "./MusicApp";

export default function MusicindexComponent()
{
    return(
        <div className="container-fluid" style={{backgroundImage : `url(${bgPhoto})`, backgroundSize : 'cover', height : '100vh'}}>
            <header className="text-center p-2 m-2">
            <h1 className="text-danger text-center bi bi-optical-audio">Music App</h1>
            <div className="d-flex justify-content-start align-items-center px-4 py-2">
                <span className=" bi bi-person-add text-danger">
                    <button className="text-primary btn btn-outline-light p-1">Login</button>    
                </span>                
            </div>
            </header>

            <section className="mt-2 row">
                <BrowserRouter>
                <nav className="col-3">
                    <div className="mb-2">
                        
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="/"  element={<MusicsAppComponent/>} />                        
                    </Routes>
                </main>
                </BrowserRouter>
            </section>

        </div>
    )
}