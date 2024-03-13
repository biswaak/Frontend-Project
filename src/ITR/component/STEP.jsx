import React from "react";
import step from "../assets/step.png";
import indiasymbol from "../assets/ITR4.jpg";
import { Link } from "react-router-dom";
import ITRRegisterComponent from "../Register";
import ITRLoginComponent from "../Login";

export default function STEPComponent()
{
    
    return(
        <div className="container-fluid">
            <header className="d-flex flex-wrap p-2 m-2 text-center">
                <div style={{marginLeft: '150px'}}>
                  <img src={step} height="100" width="100" alt="Step.img" />
                </div>
                <div className="p-2">
                   <h3><span className="text-danger">S</span> mart <span className="text-primary">T</span> raveler <span className="text-warning">E</span> nrollment <span className="text-danger">P</span> rogram</h3>
                   <span className="text-secondary">A SERVICE OF THE BUREAU OF CONSULAR AFFAIRS</span>
                   <p className=" text-success">Govt of India | Department of ITR</p> 
                </div>
                <div style={{marginLeft: '300px'}}>
                    <img src={indiasymbol} width="120" height="120" alt="india.img" />
                </div>
                
            </header>
            <hr style={{color: 'blue' }} />
            
        </div>
    )
}