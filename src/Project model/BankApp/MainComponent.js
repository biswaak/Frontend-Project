import { BrowserRouter, Routes, Route } from "react-router-dom"
import BankAppHome from "./BankAppHome"
import PersonalHome from "./Personal/PersonalHome"
import PersonalLogin from "./Personal/PersonalLogin"
import PersonalRegister from "./Personal/PersonalRegister"
import NriHome from "./Nri/NriHome"
import NriLogin from "./Nri/NriLogin"
import NriRegister from "./Nri/NriRegister"



export default function MainComponent()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
              <Routes>
                <Route path="/"  element={<BankAppHome/> } >
                    <Route path="personal"  element={<PersonalHome/>} >
                        <Route path="plogin" element={<PersonalLogin/>} />
                        <Route path="pregister" element={<PersonalRegister/> } />
                    </Route>
                    <Route path="nri" element={<NriHome/>}>
                        <Route path="nlogin" element={<NriLogin/>} />
                        <Route path="nregister" element={<NriRegister/>} />
                    </Route>
                </Route>
              </Routes>
            </BrowserRouter>
        </div>
    )
}