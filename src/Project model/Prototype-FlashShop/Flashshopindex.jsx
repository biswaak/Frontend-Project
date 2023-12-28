import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import EShopHome from "./Home";
import EshopLogin from "./Login";
import EshopRegister from "./Register";
import EshopDashboard from "./Dashboard";

export default function FlashShopIndex()
{
    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 m-2">
                <h1>Flash<span className="bi bi-lightning-charge text-warning"></span>Shop-Online Store</h1>
            </header>

            <section className="mt-2 row">
                <BrowserRouter>
                <nav className="col-3">
                    <div className="mb-2">
                        <Link to="/Home" className="btn btn-danger w-75">Home</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/Register" className="btn btn-danger w-75">Register</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/Login" className="btn btn-danger w-75">Login</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/Dashboard" className="btn btn-danger w-75">Dashboard</Link>
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="/" element={<EShopHome/>} /> {/* "/" & "home"  are for both EShopHome */}
                        <Route path="Home" element={<EShopHome/>}/>
                        <Route path="Login" element={<EshopLogin/>}/>
                        <Route path="Register" element={<EshopRegister/>}/>
                        <Route path="Dashboard" element={<EshopDashboard/>}/>
                        <Route path="errorpage" element={
                                                        <div>
                                                            <h2 className="text-warning">Invalid Credentials</h2>
                                                            <Link to="/login">Try Again</Link>
                                                        </div> }/>
                    </Routes>
                </main>
                </BrowserRouter>
            </section>
        </div>
    )
}