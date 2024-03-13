import React from "react";
import itr1 from "../ITR/assets/ITR1.jpg";
import itr4 from "../ITR/assets/ITR4.jpg";
import flight from "../ITR/assets/travel-flight2.png";
import { BrowserRouter,Routes , Route, Link } from "react-router-dom";
import ItrHeaderComponent from "./header";
import ITRLoginComponent from "./Login";
import ITRRegisterComponent from "./Register";
import STEPComponent from "./component/STEP";

export default function ITRindexComponent()
{
    return(
        <div className="container-fluid">
            <header className="text-center p-2 m-2">
            <h2 className="text-center" style={{ backgroundColor: "rgba(255, 60, 0, 0.925)" }}>
                <a href="https://www.india.gov.in/topics/travel-tourism/approved-agents/">
                <img src={itr1} height={40} width={40} alt="Logo" />
                </a>
            </h2>
            <h2 className="bi bi-airplane-engines-fill text-center text-primary">
                ITR-INDIAN TRAVELERS RESOURCES<span className="bi bi-train-lightrail-front-fill"></span>
            </h2>
            <h2 className="text-center text-bg-success text-white">
            <a className="text-decoration-none" href="https://www.mea.gov.in/">
                <img src={itr4} width={60} height={50} alt="Logo2" />
                    <span className="text-primary m-2">Ministry of External Affairs</span> 
                     <span className=" text-secondary">Govt of India</span> 
            </a>
            </h2>
            </header>

            <section className="mt-2 row">
                <BrowserRouter>
                    <nav className="row">
                    <div className="mb-2">
                            {/**<Link to="/Home" className="m-2 p-2 text-danger text-bg-light text-decoration-none">Home</Link>                             */}
                            {/**<Link to="/login" className="m-2 p-2 text-danger text-bg-light text-decoration-none">Login</Link> */}
                            {/**<Link to="/register" className="m-2 p-2 text-danger text-bg-light text-decoration-none">Register</Link> */}
                        </div>
                    </nav>
                    <main>
                        <Routes>
                            <Route path="/" element={<ItrHeaderComponent/>} />
                            <Route path="Home" element={ <ItrHeaderComponent/> } />
                            <Route path="login" element={<ITRLoginComponent/>} />
                            <Route path="register" element={<ITRRegisterComponent/>} />
                            <Route path="STEP" element={<STEPComponent/>} />
                        </Routes>
                    </main>
                </BrowserRouter>
            </section>

        </div>
    )
}