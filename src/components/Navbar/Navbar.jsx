import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';

// Icons
import LooksOneOutlinedIcon from '@material-ui/icons/LooksOneOutlined';

const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.logo}>
                <NavLink to="/" exact>
                    <LooksOneOutlinedIcon className="logo" />
                    イチバンック銀行
                </NavLink>
            </div>

            <ul>

                <li className={styles.link}>
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
