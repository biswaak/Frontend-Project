import { Link } from "react-router-dom";

export default function EShopHome()
{
    return(
        <div className="container-fluid">
            <h2>Shooping Home</h2>
            <Link to="/register">NewRegister</Link>
            <span> | </span>
            <Link to="/login" >Existing User</Link>
        </div>
    )
}