import { useEffect, useState } from "react";
import { cookies, useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export default function EshopDashboard()
{
    let navigate = useNavigate();
    const[cookie, setCookie, removeCookie] = useCookies();
    const[userid, setUserId] = useState();

    useEffect(()=>{
        if(cookie["userid"] == undefined)
        {
            navigate("/login");
        }else{
            setUserId(cookie["userid"]);
        }
    })

    function handleSignout()
    {
        removeCookie("userid");
        navigate("/login")
    }
    return(
        <div className="conatiner-fluid ">
            <h2>User Dasboard {userid} - <button onClick={handleSignout} className="btn btn-link">Signout</button> </h2>
        </div>
    )
}


    /*untill User not login this Dashboard not goona open
    - so we have to use Cookies and have to Configure.

    mean in this screen a user  can not access anything untill he registered or logs.
    it's a uthonetication type.
*/