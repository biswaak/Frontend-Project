import axios from "axios";
import { useEffect, useState } from "react";
import { cookies, useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";

export default function EshopDashboard()
{
    
    const[cookie, setCookie, removeCookie] = useCookies();
    const[userid, setUserId] = useState();
    const[categories, setCategories] = useState([]);
    let navigate = useNavigate();

    function LoadCategories()
    {
        axios.get("http://localhost:8080/table/getcategories") //to see and store the data in tablecategories
        .then(response=>{
            setCategories(response.data);
        })
    }

    useEffect(()=>{
        if(cookie["userid"] == undefined)
        {
            navigate("/login");
        }else{
            setUserId(cookie["userid"]);
            
            LoadCategories();
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
            <h3>Product Categories</h3>
            <ol>
                {
                    categories.map(item=>
                        //{item.category} //category contain a property called category
                        <li key={item.category}><Link to={"/products/" + item.category}>{item.category}</Link></li>
                        )
                }
            </ol>
        </div>
    )
}


    /*untill User not login this Dashboard not goona open
    - so we have to use Cookies and have to Configure.

    mean in this screen a user  can not access anything untill he registered or logs.
    it's a uthonetication type.
*/