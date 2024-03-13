import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/main.css"

export default function ITRMain()
{
    let navigate = useNavigate();

    return(
        <div className="container-fluid">
    
    <section>
        <main>
            <div className=" pt-5 mt-5">
            <div style={{ backgroundColor: 'rgba(46, 46, 46, 0.904)' }}>
                    <div className="text-center m-2 p-2 text-white">
                        <span className="bi bi-star-fill"></span>&nbsp;<span className="bi bi-star-fill"></span>&nbsp;<span className="bi bi-star-fill"></span>
                    </div>
                    <div className="text-center text-warning">
                        <h1>EMERGENCY INFORMATION & RESOURCES</h1>
                    </div>
                    <hr  style={{ marginBottom:'25px' ,marginleft: '850px' , color: 'rgb(10, 10, 10)' }}/>
                    
                    <div className="container">
                        <div className="card">
                            <div className="card-header text-center">
                                <h5>INDIAN-Citizen Travelers</h5>
                            </div>
                            <div className="card-body">
                                <div className="card-row-1">
                                    <div>
                                        <p>Please enroll in the : <a href="#" style= {{textdecoration: 'none', color: 'rgba(233, 90, 90, 0.459)'}}><h6>Smart Traveler Enrollment Program (STEP)</h6></a> to receive alerts and be located in an emergency.</p>
                                    </div>
                                    <div>
                                        <h5>In Case of an Emergency Overseas</h5>
                                        <p>Please call  +91 (000) xxx-xxxx (overseas) or contact the nearest INDIA embassy or consulate.</p>
                                    </div>
                                    <div>
                                        <h5>travel-advisory</h5>
                                        <p>As a first step in planning any trip abroad, check the Travel Advisories for your intended destination.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div className="card">
                            <div className="card-header text-center">
                                <h5>IMPORTANT</h5>
                            </div>
                            <div className="card-body">
                                <div className="card-row-2">
                                    <p>Our highest priority is to protect the lives and interests of INDIAN citizens overseas. We do this through routine and emergency services to INDIAN at our embassies and consulates around the world. Find more emergency resources for:</p>
                                <ol>
                                    <li><a href="#" className="text-decoration-none text-warning">INDIAN ABROAD</a></li>
                                    <li><a href="#" className="text-decoration-none text-warning">FAMILY MEMBERS</a></li>
                                    <li><a href="#" className="text-decoration-none text-warning">INTERNATIONAL PARENT CHILD ABDUCTION</a></li>
                                </ol>
                                </div>
                            </div>
                        </div>
            
                        <div className="card">
                            <div className="card-header text-center">
                                <h5>Passport Processing</h5>
                            </div>
                            <div className="card-body">
                            <div className="card-row-3">
                                <p>We encourage all INDIAN to check their passport expiration date before making any definitive plans for international travel, and to take action to renew their passport well in advance of international travel this year. </p>
                            </div>
                            <div className="card-footer text-center m-2">
                                <dl>
                                    <dd><button className="btn btn-primary">APPLY FOR A PASSPORT</button></dd>
                                    <dd><button className="btn btn-primary">RENEW YOUR PASSPORT</button></dd>
                                    <dd><button className="btn btn-primary bi-textarea-resize">CHECK YOUR PASSPORT APPLICATION STATUS</button></dd>
                                </dl>
                            </div>
                            </div>
                        </div>
                    </div>
        
                </div>

                <div className=" pt-5">
                    <div style= {{backgroundColor:'rgb(108, 108, 230)'}}>
                        <div className="text-center m-2 p-2 text-white">
                            <span className="bi bi-star-fill"></span>&nbsp;<span className="bi bi-star-fill"></span>&nbsp;<span className="bi bi-star-fill"></span>
                        </div>
                        <div className="text-center text-warning">
                            <h1>EMERGENCY INFORMATION & RESOURCES</h1>
                        </div>

                        <hr style={{ marginleft: '550px', color: 'rgb(82, 5, 5)'}}/>

                        <div className="container">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h5>TRAVELING ABROAD: WHAT YOU NEED</h5>
                                </div>
                                <div className="card-body">
                                    <div className="card-row-1">
                                        <div>
                                            <h5>Preparing for a Trip Abroad</h5>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none">Advisories</a>
                                            <p>As a first step in planning any trip abroad, check the Travel Advisories for your intended destination.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>International Financial Scams</h5></a>
                                            <p>INDIAN citizens can become victims of scams at home or abroad.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Smart Traveler Enrollment Program (STEP):</h5></a>
                                            <p>Subscribe to get up-to-date safety and security information and help us reach you in an emergency abroad.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Students Abroad: </h5></a>
                                            <p>Exploring new destinations and experiencing other cultures is both rewarding and exciting, but it is also important to do so safely. </p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Travel Tips for Everyone:</h5></a>
                                            <p> Check out our Travelers Checklist to help you prepare for your trip.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Travel Tips for Older INDIAN: </h5></a>
                                            <p> As an increasing number of older INDIAN. citizens are traveling abroad, we want you to be prepared so you can enjoy your trip. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="card">
                                <div className="card-header text-center">
                                    <h5>PASSPORTS & Documents </h5>
                                </div>
                                <div className="card-body">
                                    <div className="card-row-2">
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5> Where to Apply:</h5></a>
                                            <p> Learn where you can apply for a passport.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Renew a Passport:</h5></a>
                                            <p> Learn how to renew your passport.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5> What Form Should I Use?:</h5></a>
                                            <p> The following passport wizard will prepare you to apply for a INDIA passport, whether it is your first time applying, you need to renew, or you want to get a passport for your child. </p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5> Application Status:</h5></a>
                                            <p> You can check the status of your passport application online or by phone. </p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>  Report Your Passport Lost or Stolen:</h5></a>
                                            <p> Report your physical INDIAN. passport lost or stolen immediately to protect yourself from identity theft. You can replace it now or later – it’s up to you! </p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Frequently Asked Questions:</h5></a>
                                            <p> Check to see your question has already been answered.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Authentication of Documents:</h5></a>
                                            <p>Some documents require authentication before you can use them abroad.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="card">
                                <div className="card-header text-center">
                                    <h5>Visas</h5>
                                </div>
                                <div className="card-body">
                                    <div className="card-row-3">
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Visa Policy and Procedure:</h5></a>
                                            <p>Are you interested in immigrating to the INDIA or want to sponsor someone? The INDIA provides for immigrant visas based on family ties, employment, adoption, special immigrant categories, and the diversity visa. </p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Business Visas:</h5></a>
                                            <p> A foreign national traveling to the INDIA to conduct temporary business needs a visitor visa (B-1) unless qualifying for entry under the Visa Waiver Program.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Diversity Visa:</h5></a>
                                            <p>Annual program making a limited number of visas available to persons who meet strict eligibility requirements from countries with low rates of immigration to the INDIA.</p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Visa Bulletin:</h5></a>
                                            <p> Provides information regarding the cut-off dates which govern visa availability in the numerically limited visa categories and other immigrant visa related information. </p>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none"><h5>Visa Waiver Program:</h5></a>
                                            <p> Enables most citizens or nationals of participating countries to travel to the INDIA for tourism or business for stays of 90 days or less without obtaining a visa.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </main>
    </section>
        </div>
    )
}