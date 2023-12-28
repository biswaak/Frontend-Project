import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import EShopHome from "./Home";
import EshopLogin from "./Login";
import EshopRegister from "./Register";
import EshopDashboard from "./Dashboard";

export default function EShopIndex()
{
    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 m-2">
                <h1>Eshop-Online Store</h1>
            </header>

            <section className="mt-2 row">
                <BrowserRouter>
                <nav className="col-3">
                    <div>
                        <Link to="/Home">Home</Link>
                    </div>
                    <div>
                        <Link to="/Register">Register</Link>
                    </div>
                    <div>
                        <Link to="/Login">Login</Link>
                    </div>
                    <div>
                        <Link to="/Dashboard">Dashboard</Link>
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="/" element={<EShopHome/>} /> {/*/ & home  are for both EShopHome */}
                        <Route path="Home" element={<EShopHome/>}/>
                        <Route path="Login" element={<EshopLogin/>}/>
                        <Route path="Register" element={<EshopRegister/>}/>
                        <Route path="Dashboard" element={<EshopDashboard/>}/>
                    </Routes>
                </main>
                </BrowserRouter>
            </section>
        </div>
    )
}