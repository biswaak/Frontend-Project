import React from "react";
import ITR4 from "./assets/ITR4.jpg";
import { useNavigate } from "react-router-dom";

export default function ITRFooter()
{
    let navigate = useNavigate();
    return(
        <div className=" container-fluid">
            <footer className="bg-black pt-5">
        <h2 className="text-bg-light text-secondary"><img src={ITR4} width="5%" height="5%" alt=""></img>Ministry of External Affairs | Govt of India</h2>
        <div style={{marginleft: '900px'}}>
            <span><a href="#" className="text-decoration-none text-danger m-3">Contact Us</a></span>
            <span><a href="#" className="text-decoration-none text-warning m-2">Archives</a></span>
            <span><a href="#" className="text-decoration-none text-white m-2">Office of the IG</a></span>
            <span><a href="#" className="text-decoration-none text-success m-2">INDIA GOVT</a></span>
        </div>
        <nav>
            <a href="https://twitter.com/"><span className="bi bi-twitter-x text-bg-dark align"></span></a>
            <a href="https://facebook.com/"><span className="bi bi-facebook text-bg-primary"></span></a>
            <a href="https://Youtube.com/"><span className="bi bi-youtube text-bg-danger"></span></a>
            <a href="https://instagram.com/"><span className="bi bi-instagram text-bg-secondary"></span></a>
        </nav>
        <hr/>
        <div className="d-flex">
            <div className="text-danger ms-5 row-cols-1">
                <h5>Follow Us</h5>
                    <a href="https://twitter.com/"><span className="bi bi-twitter-x text-bg-dark align m-1"></span></a>
                    <a href="https://facebook.com/"><span className="bi bi-facebook text-bg-primary m-1"></span></a>
                    <a href="https://Youtube.com/"><span className="bi bi-youtube text-bg-danger m-1"></span></a>
                    <a href="https://instagram.com/"><span className="bi bi-instagram text-bg-secondary m-1"></span></a>
            </div>
            <div className="text-danger ms-5 row-cols-2">
                <a href="#" className="text-decoration-none">Privacy Policy</a>
            </div>
            <div className="text-danger ms-5 row-cols-3">
                <a href="#" className="text-decoration-none">Accessbility Statement</a>
            </div>
            <div className="text-danger ms-5 row-cols-4">
                <a href="#" className="text-decoration-none">Copyright Information</a>
            </div>
            <div className="text-danger ms-5 row-cols-5">
                <a href="https://www.indiacode.nic.in/handle/123456789/2407?sam_handle=123456789/1362" className="text-decoration-none">ITR-Act</a>
            </div>
            <div className="text-danger ms-5 row-cols-6">
                <a href="https://www.indiacode.nic.in/handle/123456789/2407?sam_handle=123456789/1362" className="text-decoration-none">No Fear Act</a>
            </div>
            <div className="text-danger ms-5 row-cols-7">
                <a href="https://www.digilocker.gov.in/" className="text-decoration-none">Digi Locker</a>
            </div>
            <div className="text-danger ms-5 row-cols-8">
                <a href="https://www.mygov.in/covid-19" className="text-decoration-none">COVID Report</a>
            </div>
        </div>
    </footer>
</div>
    )
}