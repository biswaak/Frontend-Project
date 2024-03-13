import React from "react";
import ItrHeaderComponent from "./header";
import ITRMain from "./Main";
import ITRFooter from "./Footer";

export default function ItrMainApp()
{
    return(
        <div className="container-fluid">
        <ItrHeaderComponent/>
        <ITRMain/>
        <ITRFooter/>
        </div>
    );
}