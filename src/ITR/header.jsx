import React from "react";
import { Link } from "react-router-dom";
import itr1 from "../ITR/assets/ITR1.jpg";
import itr4 from "../ITR/assets/ITR4.jpg";
import flight from "../ITR/assets/travel-flight2.png";
import ITRRegisterComponent from "./Register";
import ITRLoginComponent from "./Login";
import ITRMain from "./Main";
import ITRFooter from "./Footer";



export default function ItrHeaderComponent() {
    return (
        <div className="container-fluid">
            <header>
                <div style={{ justifyContent: "space-between", marginLeft: "750px" }}>
                    <a href="https://twitter.com/">
                        <span className="bi bi-twitter-x text-bg-dark align m-1 "></span>
                    </a>
                    <a href="https://facebook.com/">
                        <span className="bi bi-facebook text-bg-primary m-1"></span>
                    </a>
                    <a href="https://Youtube.com/">
                        <span className="bi bi-youtube text-bg-danger m-1"></span>
                    </a>
                    <a href="https://instagram.com/">
                        <span className="bi bi-instagram text-bg-secondary m-1"></span>
                    </a>
                    <span>
                        <label htmlFor="Search" className="bi bi-search text-primary m-1"></label>
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-25 h-25 btn btn-light text-primary">
                    </input>
                    <button className="btn btn-warning badge">
                        <span className="bi bi-bell m-1"></span>what's New
                    </button>
                    
                    <Link to="/register" className="btn btn-outline-danger btn btn-success text-warning m-1 badge">
                        Register
                    </Link>
                    <Link to="/login" className="btn btn-outline-danger btn btn-success text-warning m-1 badge">
                        Login
                    </Link>
                    <span className="bi bi-person-circle text-danger active"></span>
                </div>
                <div>
                    <a href="#" className="text-decoration-none text-black m-1">
                        Newsroom
                    </a>
                    <a href="#" className="text-decoration-none text-black m-1">Business</a>
                    <a href="#" className="text-decoration-none text-black m-1">Employee</a>
                    <a href="#" className="text-decoration-none text-black m-1">Students</a>
                    <a href="#" className="text-decoration-none text-black m-1">Travelers</a>
                    <a href="https://indianvisaonline.gov.in/" className="text-decoration-none text-black m-1">Visas</a>
                    <a href="https://indianvisaonline.gov.in/evisa/" className="text-decoration-none text-black m-1">E-Visas</a>
                    

                    <marquee direction="left" textAlign="right">
                        <p className="text-danger-emphasis">
                            Available Indian Visa plus services through "Official app Indian Visa Su-Swagatam" mobile App for 60 countries.... One stop solution for all Visa related services.
                        </p>
                    </marquee>

                    <h3 className="text-primary" style={{ marginLeft: "990px" }}>
                        <a href="https://www.mygov.in/covid-19" className="bi bi-person-exclamation text-decoration-none">COVID-19 Updates</a>
                    </h3>
                </div>
            </header>
            <div>
                <img src={flight} width={`100%`} height={`100%`} alt="FlightLogo" />
            </div>
            <ITRMain/>
            <ITRFooter/>
        </div>
    );
}
