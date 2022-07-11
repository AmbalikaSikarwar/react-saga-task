import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <NavLink exact ="true" to="/" >Register</NavLink>
        <NavLink exact = "true" to="/login">Login </NavLink>       
    </div>
  )
}
