import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Token");
    navigate("/"); 
  };

  return (
    <div className="navbar ">
      <br />
      <NavLink
        exact="true"
        activeclassname="active"
        to="/dashboard"
        id="navlinkdash"
      
      >
        Dashboard
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active "
        to="/enquiries"
        id="navlinkenquiry"
      >
        Enquiries
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/profile"
        id="navlinkprofile"
      >
        Profile
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/faq" id="navlinkfaq">
        FAQ
      </NavLink>
      <img
        src="https://t4.ftcdn.net/jpg/04/03/68/63/360_F_403686380_lcGMEGOhNemvez6vWxLfnByYURqAiB4J.jpg"
        width="20px"
        height="20px"
        id="navlinklogout"
        onClick={logout}
      />
    </div>
  );
};
export default Sidebar;
