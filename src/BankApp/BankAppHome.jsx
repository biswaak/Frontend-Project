import { Link, Outlet } from 'react-router-dom';

export default function BankAppHome()
{
    return(
        <div>
            <h2 align="center" className='text-danger bg-primary p-2 m-2'>Home <span className='bi bi-coin text-warning'></span> Bank</h2>
            <nav>
               <span> <Link to="/personal">Personal</Link> </span>
               <span>|</span>
               <span> <Link to="/nri">NRI</Link> </span>
               
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}