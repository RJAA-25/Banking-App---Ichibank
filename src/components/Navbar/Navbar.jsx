import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>

            <ul>

                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/admin" exact>Admin</NavLink>
                </li>

                <li>
                    <NavLink to="/client" exact>Client</NavLink>
                </li>

            </ul>

        </div>
    )
}

export default Navbar
