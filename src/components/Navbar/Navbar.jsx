import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
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
                    <HomeIcon className={styles.navLogo} />
                    <NavLink to="/" exact>Home</NavLink>
                </li>

                <li>
                    <SupervisorAccountIcon className={styles.navLogo} />
                    <NavLink to="/admin" exact>Admin</NavLink>
                </li>

                <li>
                    <VerifiedUserIcon className={styles.navLogo} />
                    <NavLink to="/client" exact>Client</NavLink>
                </li>

            </ul>

        </div>
    )
}

export default Navbar
