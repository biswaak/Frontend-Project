import React from "react";
import discuss from "../assets/discuss2.png";
export default function MonkMissionComponent()
{
    return(
        <div className="row" style={{backgroundColor: 'rgb(137, 230, 137)'}}>
            <div className="text-center pt-5" style={{color:'black'}}>
                <h1><font face="Tempus Sans ITC"><b>TRANSFORM AT THE</b> </font></h1>
            </div>
            <div>
                <h1 style={{fontSize:'50px'}} className="text-dark text-center pt-3 font"><b>I &nbsp;  &nbsp; &nbsp; N  &nbsp; &nbsp; &nbsp; T &nbsp; &nbsp; &nbsp; E  &nbsp; &nbsp; &nbsp; R  &nbsp; &nbsp; &nbsp; S  &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; C  &nbsp; &nbsp; &nbsp; T</b></h1>
            </div>
            <div className="align-item-center text-center pt-5 pb-5">
                <img src={discuss} width={1000} height={500} alt="" />
            </div>
            <div className="text-center pt-5 pb-5" style={{color:'black'}}>
                <p style={{fontSize:'25px',fontStyle:'italic'}} className="text-dark">At IT Solutions, We aim to <b>" TRANSFORM AT THE INTERSECT,"</b> focusing</p>
                <p style={{fontSize:'25px',fontStyle:'italic'}} className="text-dark">on the convergence of technology and business needs to bring about</p>
                <p style={{fontSize:'25px',fontStyle:'italic'}} className="text-dark">transformative solutions for the clients.</p>
            </div>
        </div>
    )
}