import React from "react";
import MonkHomeComponent from "./Home";
import MonkMissionComponent from "./Mission";
import MonkVisionComponent from "./Vision";
import MonkServicesComponent from "./services";

export default function MonkMainCommponent()
{
    return(
        <div>
            <section>
                <main>
                    <MonkHomeComponent/>
                    <MonkVisionComponent/>
                    <MonkMissionComponent/>
                    <MonkServicesComponent/>            
                </main>
            </section>
        </div>
    )
}