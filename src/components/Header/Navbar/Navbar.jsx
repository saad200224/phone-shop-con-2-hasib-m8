import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between shadow-md py-6 px-5 items-center">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-bold underline" : ""}>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-bold underline" : ""}>
                        Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-bold underline" : ""}>
                        Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;