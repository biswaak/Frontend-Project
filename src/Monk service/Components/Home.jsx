import React from "react";
import Meet from "../assets/meet.jpg";
export default function MonkHomeComponent()
{
    return(
        <div className="row align-item-center text-center" style={{backgroundColor:'#FF6347'}}>
        
            {/**
             <div className="pt-5 mt-5" style={{ textAlign: "justify", color:'black', marginLeft:'500px' }}>
                <p><font face="Goudy Stout" style={{ float: 'left', fontSize: '100px', paddingRight: '5px' }}>IT</font>
                    <b>Monk Sol .Pvt. <br/> Ltd</b></p>
            </div>
             */}
            
            <div className="row align-items-center text-center" style={{paddingTop:'10rem'}}>
                <div className="col"  style={{ textAlign: "justify", color:'black', marginLeft:'500px' }}>
                    <p><font face="Goudy Stout" style={{ float: 'left', fontSize: '100px', paddingRight: '5px' }}>IT</font>
                        <b>Monk Sol .Pvt. <br/> Ltd</b></p>
                </div>
            </div>

            <div className="text-white text-center  pt-5 mt-5 mb-3 pb-3">
                <blockquote>
                    <p style={{fontSize:'20px',fontFamily:'monospace'}}>
                        <i>
                            " IT Monks Solutions Pvt Ltd is a dynamic player in the Information Technology <br/>
                                Development and Services industry. Commited to driving innovation and <br/>
                                delivering cutting-edge solutions. "
                        </i>
                    </p>
                </blockquote>
            </div>
            <div className="pb-5">
                <img src={Meet} className="img-fluid" width={1000} height={400} alt="Meet" />
            </div>
        </div>
    )
}


