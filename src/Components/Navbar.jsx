import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    console.log(user);
    return (
        <div className='navbar absolute z-10  bg-transparent secondaryTextColor shadow-sm flex flex-row justify-between px-4 mx-auto'>
            <div className='flex w-full md:w-1/2'>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-20' src='./logo.png' alt='solo-sphere logo' />
                </Link>
            </div>
            <div className='flex flex-row justify-end items-center w-full md:w-1/2 '>
                <ul className='menu menu-horizontal gap-8'>
                    <Link to={"/products"}>
                        <div className="text-base"><AiOutlineProduct /></div>
                    </Link>
                    <Link to={"/favourite"}>
                        <div className="text-base"><FaHeart /></div>
                    </Link>
                    <Link to={"/cart"}>
                        <div className="text-base"><FaCartShopping /></div>
                    </Link>
                    
                    {
                        !user &&
                        <Link to={"/login"} >
                            <div>Login</div>
                        </Link>}

                </ul>

                {
                    user &&
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full' title={user?.displayName}>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow secondaryColor primaryTextColor rounded-box w-52'
                        >
                            <li>
                                <Link to={"/history"}>
                        <div>History</div>
                    </Link>
                            </li>
                            <li>
                                <div>My Profile</div>
                            </li>
                           
                            <li className='mt-2'>
                                <button
                                    onClick={logOut}
                                    className='primaryColor secondaryTextColor block text-center'>Logout</button>
                            </li>
                        </ul>
                    </div>
                }

            </div>
        </div >
    )
}

export default Navbar
