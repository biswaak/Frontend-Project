import React from "react";
import innovation from "../assets/inovative.png";
import approach from "../assets/approach.png";
import intigrity from "../assets/protect.png";
import collab from "../assets/groupcollab.png";
export default function MonkServicesComponent()
{
    return(
        <div className="row">
            <div style={{backgroundColor:'rgb(236, 92, 92)'}}>
            <div>
                <h1 className="text-white text-center pt-5" style={{fontSize:'55px'}}><font face="Fontspring Matcherator"><strong>SERVICES</strong></font></h1>
            </div>
            <div className="text-white font-monospace p-5" >
                <h1 className=" text-decoration-underline pb-3 me-auto">IT SOFTWARE DEVELOPMENT</h1>
                <p style={{fontSize:'18px',fontWeight:'bold'}}>CRAFTING ROBUST AND SCALABLE SOFTWARE <br />
                                                               SOLUTIONS TRILORED TO MEET THE UNIQUE NEEDS OF<br />
                                                               OUR CLIENTS.</p>
            </div>
            <div className="text-white font-monospace p-5" style={{textAlign:'right'}} >
                <h1 className=" text-decoration-underline pb-3">WEBSITE DESIGN AND DEVELOPMENT</h1>
                <p style={{fontSize:'18px',fontWeight:'bold'}}>CREATING VISUALLY STUNNING AND FUNCTIONALLY <br />
                                                               EFFICIENT WEBSITES THAT LEAVE A LASTING <br />
                                                               IMPRESSION. </p>
            </div>
            <div className="text-white font-monospace p-5" >
                <h1 className=" text-decoration-underline pb-3 me-auto">CONTENT MODERATION</h1>
                <p style={{fontSize:'18px',fontWeight:'bold'}}>ENSURING ONLINE PLATFORMS MAINTAIN A SAFE AND <br />
                                                               POSITIVE ENVIROUNMENT THROUGH EFFECTIVE <br />
                                                               CONTENT MODERATION. </p>
            </div>
            <div className="text-white font-monospace p-5" style={{textAlign:'right'}} >
                <h1 className=" text-decoration-underline pb-3">WEBSITE DESIGN AND DEVELOPMENT</h1>
                <p style={{fontSize:'18px',fontWeight:'bold'}}>CREATING VISUALLY STUNNING AND FUNCTIONALLY<br/>
                                                               EFFICIENT WEBSITES THAT LEAVE A LASTINGv<br/>
                                                               IMPRESSION.</p>
            </div>
            </div>

            <div style={{backgroundColor:'rgb(245, 146, 53)'}}>
                <div className="text-white font-monospace p-5" >
                    <h1 style={{backgroundColor:"rgb(112, 85, 233)",fontSize:'40px',marginLeft:"60px"}} className="pb-3 mt-5 w-25 text-center rounded-5">HR SERVICES</h1>
                </div>
                <div className="text-white font-monospace" style={{textAlign:'right'}} >
                    <h1 style={{fontSize:'30px', marginLeft:'800px'}} className=" text-center w-25 text-bg-danger rounded-pill">APP DEVELOPMENT:</h1>
                    <p style={{fontSize:'20px',fontWeight:'bold',color:'black', marginRight:'100px'}}>Developing Innovative And User-<br />
                                                                                                     Friendly Mobile Applications That <br/>
                                                                                                     Cater To Diverse Business <br/>
                                                                                                     Requirements.</p>
                </div>
                
                <div style={{marginLeft:'150px'}}>
                    <h1 style={{fontSize:"30px"}} className=" rounded-5 text-center text-bg-success w-25 font-monospace">DATA ENTRY WORK </h1>
                    <p style={{fontSize:'20px',fontWeight:'bold',color:'black',marginRight:'100px'}}>Providing accurate and timely data<br/>
                                                                                                    Entry Services To support Efficient<br/>
                                                                                                    Business Operations.</p>
                </div>

                <div className="text-white font-monospace p-5" >
                    <h1 style={{backgroundColor:"rgb(112, 85, 233)",fontSize:'40px',marginLeft:"60px", width:'400px'}} className="pb-3 mt-5  text-center rounded-5">VIDEO MANAGEMENT</h1>
                </div>

                <div className="text-white font-monospace" style={{textAlign:'right'}} >
                    <h1 style={{fontSize:'30px', marginLeft:'800px',backgroundColor:'rgb(83, 60, 185)'}} className=" text-center w-25  rounded-pill">CONTENT CREATION:</h1>
                    <p style={{fontSize:'20px',fontWeight:'bold',color:'black',marginRight:'100px'}}>Offering Creative And Engaging <br />
                                                                                                     Content Creation Services To <br />
                                                                                                     Enhance Brand Presence And <br />
                                                                                                     Communication. </p>
                </div>
                
                <div style={{marginLeft:'150px'}} className="pb-5">
                    <h1 style={{fontSize:"30px",backgroundColor:'rgb(134, 15, 15)',width:'400px'}} className=" text-white rounded-5 text-center  font-monospace">MARKETING SERVICES:</h1>
                    <p style={{fontSize:'20px',fontWeight:'bold',color:'black'}}>Implementing Strategic And Result <br />
                                                                                 Driven Marketing Services To Boost <br />
                                                                                 Brand Awarness and customer <br />
                                                                                 Engagement.</p>
                </div>
            </div>

            <div style={{backgroundColor: 'rgb(236, 92, 92)'}}>

                <div className="pt-5" style={{ display: 'flex', alignItems: 'center'}}>
                    <img src={innovation} height={400} width={250} alt="innovation" />
                    <div className="p-5">
                        <h1 className="text-white" style={{ fontSize:"60px" }}><b>INNOVATION</b></h1>
                        <p style={{ color:'white' ,fontSize:'25px' }}>Embracing Creativity And <br />
                                                                  Innovation to stay ahead in the <br />
                                                                  Ever-Evolving Tech Landscape.</p>
                    </div>
                </div>
            
                <div style={{ display: 'flex', alignItems: 'center',  paddingLeft:'100px' }}>
                    <img src={approach} height={200} width={300} alt="innovation" />
                    <div className="p-5">
                        <h1 className="text-white" style={{ fontSize:"60px" }}><b>CLIENT-CENTRC <br/> APPROACH</b></h1>
                        <p style={{ color:'white' ,fontSize:'25px' }}>Prioritizing client needs and <br />
                                                                  Delivering Solutions that exceed <br />
                                                                  Expectations.</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center',  paddingLeft:'300px' }}>
                    <img src={intigrity} height={200} width={300} alt="innovation" />
                    <div className="p-5">
                        <h1 className="text-white" style={{ fontSize:"60px" }}><b>INTEGRITY</b></h1>
                        <p style={{ color:'white' ,fontSize:'25px' }}>Upholding the highest standards <br />
                                                                      Of integrity in all our business <br />
                                                                      Practices.</p>
                    </div>
                </div>

                <div style={{paddingBottom:'50px' ,display: 'flex', alignItems: 'center',  paddingLeft:'500px' }}>
                    <img src={collab} height={200} width={300} alt="innovation" className=" img-thumbnail"  style={{border:'2px',borderRadius:'200px'}}/> {/**style={{filter: 'blur(5px)'}} */}
                    <div className="p-5">
                        <h1 className="text-white" style={{ fontSize:"60px" }}><b>Collaboration</b></h1>
                        <p style={{ color:'white' ,fontSize:'25px' }}>Fostering a culture of Collaboration <br />
                                                                      And teamwork to achieve <br />
                                                                      Collective Success.</p>
                    </div>
                </div>
            
            </div>

        </div>
    );
}