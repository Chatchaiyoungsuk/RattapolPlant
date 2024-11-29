import { UserCircle2 } from "lucide-react"
import logo from "/rp.png"
import {Link} from "react-router-dom" 

const Header = () => {
    return(
        <>
       <div className="navbar bg-base-100">
        {/* <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                <li><a>หน้าแรก</a></li>
                <li><a>บทความ</a></li>
            </ul>
            </div>
        </div> */}
        <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl"><img src={logo} className="h-full" alt="RatthapolPlant Logo" /></Link>
        </div>
        <div className="navbar-end">
            <Link to="/login" className="btn btn-ghost btn-circle">
                <UserCircle2 />
            </Link>
        </div>
        </div>
        </>
    )
}

export default Header