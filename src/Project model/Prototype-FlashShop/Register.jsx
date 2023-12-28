import { useNavigate ,Link , Navigate} from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios"; {/**use axios here to post the data to Api */}

export default function EshopRegister()
{
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            id:0,
            UserId:"",
            UserName:"",
            Password:"",
            Age:0,
            Mobile:"",
            Subscribed:true,
        },
        onSubmit:values=>{
            axios.post("http://localhost:8080/RegisterUser", values);
            alert("Register sucessFully");
            /*alert(`Subscribed: ${(values.Subscribed == true)? "Subscribed":"not Subscribe"}`);
            alert(JSON.stringify(values));*/
            navigate("/login");
        }
    })
    return(
        <div className="conatiner-fluid ">
            <h2>User Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>ID</dt>
                    <dd>
                        <input type="number" onChange={formik.handleChange}  name="id" value={formik.values.id}/>
                    </dd>
                    <dt>UserId</dt>
                    <dd>
                        <input type="text" onChange={formik.handleChange} name="UserId" value={formik.values.UserId} />
                    </dd>
                    <dt>UserName</dt>
                    <dd>
                        <input type="text" name="UserName" onChange={formik.handleChange} value={formik.values.UserName} />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password} />
                    </dd>
                    <dt>Age</dt>
                    <dd>
                        <input type="number" name="Age" onChange={formik.handleChange} value={formik.values.Age} />
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile} />
                    </dd>
                    <dt>Subscribed</dt>
                    <dd className="bi bi-emoji-smile-fill">
                        <input className="form-switch" type="checkbox" name="Subscribed" onChange={formik.handleChange} checked={formik.values.Subscribed} /> : YES
                    </dd>
                </dl>
                <button className="btn btn-primary" type="submit">Register</button>
                <br />

                    <Link to="/login">Already have an Account?</Link>
            </form>
        </div>
    )
}