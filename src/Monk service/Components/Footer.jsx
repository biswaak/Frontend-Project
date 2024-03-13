import React from "react";
import { Link } from "react-router-dom";
export default function MonkFooterComponent()
{

    return(
        <div className="row bg-secondary">
            <p className="text-center text-white pt-5" style={{fontSize:'30px',fontWeight:'bold'}}>
                IT Monks Solutions Pvt Ltd is your dedicated partner in navigating the <br />
                dynamic world of technology, offering comprehensive services to transform <br />
                    your business and stay ahead in the digital era.
            </p>
            
            <p className="w-50 bg-success rounded-5 mt-4 text-white text-center  p-2" style={{marginLeft:'350px', fontSize:'40px'}}>
                <b className="p-2">Get in Touch</b> 
                <input className="rounded-5 w-50" type="search"/> <span className=" bi bi-arrow-right-circle-fill"></span>
            </p>
            
            
            <div className="d-flex pt-5 ps-5 pb-5">
                    <div>
                        <h3 align="center">Resources</h3>
                        <div className="text-danger ps-5 row-cols-1">
                            <h5>Follow Us</h5>
                            <a href="https://twitter.com/"><span className="bi bi-twitter-x text-bg-dark align m-1"></span></a>
                            <a href="https://facebook.com/"><span className="bi bi-facebook text-bg-primary m-1"></span></a>
                            <a href="https://Youtube.com/"><span className="bi bi-youtube text-bg-danger m-1"></span></a>
                            <a href="https://instagram.com/"><span className="bi bi-instagram text-bg-secondary m-1"></span></a>
                        </div>
                    </div>

                    <div className="ps-5 pt-5 row-cols-2">
                        <h5 className="text-dark">Company</h5>
                        <div className=" text-center">
                            <Link to="/Home" className=" text-decoration-none text-white"><strong>Home</strong></Link>
                        </div>
                        <div className=" text-center">
                            <Link to="/About" className=" text-decoration-none text-white"><strong>About</strong></Link>
                        </div>
                        <div className=" text-center">
                            <Link to="/Contact" className=" text-decoration-none text-white"><strong>Contact</strong></Link>
                        </div>
                
                    </div>

                <div className="ps-5 pt-5 pe-5">
                    <h5>Partner with Us</h5>
                    <div>
                        <Link to="/Blog" className=" text-decoration-none text-white"><strong>Blog</strong></Link>
                    </div>
                    <div>
                        <Link to="/BlogPost" className=" text-decoration-none text-white"><strong>Blog Post</strong></Link>
                    </div>
                    <div>
                        <Link to="/Pricing" className=" text-decoration-none text-white"><strong>Pricing</strong></Link>
                    </div>
                    <div>
                        <Link to="/PricingSingle" className=" text-decoration-none text-white"><strong>Pricing Single</strong></Link>
                    </div> 
                </div>

            
                <div className="pe-5 pt-5 row-cols-10">
                    <h5>About us</h5>
                    <div>
                        <Link to="/Choose" className=" text-decoration-none text-white"><strong>Why Coose us</strong></Link>
                    </div>
                    <div>
                        <Link to="/Careers" className=" text-decoration-none text-white"><strong>Careers</strong></Link>
                    </div>
                    <div>
                        <Link to="/Studies" className=" text-decoration-none text-white"><strong>Case Studies</strong></Link>
                    </div>
                </div>

                <div className=" pe-5 pt-5 row-cols-12" >
                    <h5>Monk <span className="bi bi-menu-down text-warning"></span> Services</h5>
                    <div>
                        <Link to="/Starthere" className=" text-decoration-none text-white"><strong>Start here</strong></Link>
                    </div>
                    <div>
                        <Link to="/styleguide" className=" text-decoration-none text-white"><strong>Style guide</strong></Link>
                    </div>
                    <div>
                        <Link to="/PasswordProtected" className=" text-decoration-none text-white"><strong>Password Protected</strong></Link>
                    </div>
                    <div>
                        <Link to="/License" className=" text-decoration-none text-white"><strong>License</strong></Link>
                    </div>
                    <div>
                        <Link to="/Changelog" className=" text-decoration-none text-white"><strong>Changelog</strong></Link>
                    </div>

                </div>
                
                <div className="pt-5" style={{ textAlign: "justify", color:'black' }}>
                    <p><font face="Goudy Stout" style={{ float: 'left', fontSize: '100px', paddingRight: '5px' }}>IT</font>
                        <b>Monk Sol .Pvt. <br/> Ltd</b>
                    </p>
                </div>

            </div>
            <div className="row pb-3 pt-5">
                <div className="col text-center">
                    <p>&copy; 2024 Monk sol pvt.Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}