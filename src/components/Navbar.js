import "./Navbar.css";
import Temple from "../assets/temple.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="ezmanage logo" />
          <span>EzManage</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
};
