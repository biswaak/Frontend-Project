import React from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import MonkHomeComponent from "./Home";
import MonkMissionComponent from "./Mission";
import MonkVisionComponent from "./Vision";
import MonkServicesComponent from "./services";
import MonkFooterComponent from "./Footer";
import MonkMainCommponent from "./MonkMain";

export default function MonkIndexComponent()
{
    
    return(
        <BrowserRouter>
            <div className="container-fluid">
                <div className="row" style={{backgroundColor:'rgb(245, 146, 53)', height:'100px', paddingTop:'10px'}}>
                    <header className="row align-item-center">
                            <div className="col">
                                <Link to="/" className="text-decoration-none">
                                <h1 className="text-decoration-none" style={{fontFamily:'Goudy Stout', fontWeight:'bold',  color:'black'}}>IT</h1>
                                <p style={{color:'black'}} className="font-weight-bold"><strong>Monk Sol Pvt.Ltd</strong></p>
                                </Link>
                            </div>
                            
                            <div className="col mt-4">
                                <Link to="/"></Link>
                            </div>
                            <div className="col mt-4">
                                <Link to="/Home" className=" text-decoration-none text-dark"><strong>Home</strong></Link>
                            </div>
                            <div className="col mt-4">
                                <Link to="/Mission" className=" text-decoration-none text-dark"><strong>Mission</strong></Link>
                            </div>
                            <div className="col mt-4">
                                <Link to="/Vision" className=" text-decoration-none text-dark"><strong>Vision</strong></Link>
                            </div>
                            <div className="col mt-4">
                                <Link to="/Services" className=" text-decoration-none text-dark"><strong>Services</strong></Link>
                            </div> 
                    </header>
                </div>

                <section>
                    <main>
                        <Routes>
                            <Route path="/" element={<MonkMainCommponent/>}/>
                            <Route path="/Home" element={<MonkHomeComponent/>}/>
                            <Route path="/Mission" element={<MonkMissionComponent/>}/>
                            <Route path="/Vision" element={<MonkVisionComponent/>}/>
                            <Route path="/Services" element={<MonkServicesComponent/>}/>
                        </Routes>
                    </main>
                </section>

                <footer>
                    <MonkFooterComponent/>
                </footer>
            </div>
        </BrowserRouter>
    );
}