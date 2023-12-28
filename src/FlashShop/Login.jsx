import axios from "axios";
import { useFormik } from "formik";
import { values } from "mobx";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export default function EshopLogin()
{
    let navigate = useNavigate();
    const[users, setUsers] = useState([]);
    const[cookie, setCookie, removeCookie] = useCookies();

    const formik = useFormik({
        initialValues:{
            UserId:"",
            Password:"",
        },
        onSubmit:values=> {
            //we can initialize axios here directly but it's good way to initialize axios by using fetch then declare it here.
            for(var user of users)
            {
                if(user.UserId == values.UserId && user.Password == values.Password)
                {
                    setCookie("userid", user.UserId);
                    navigate("/dashboard");
                }else{
                    navigate("/errorpage");
                }
            }
        }
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/getusers",values)
            .then(response=>{
                setUsers(response.data);
            })
    },[]);
    return(
        <div className="conatiner-fluid ">
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input type="text" name="UserId" onChange={formik.handleChange} value={formik.values.UserId}/>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password}/>
                    </dd>
                </dl>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>

            <br />

            <Link to="/register">New User?</Link>
        </div>
    )
}