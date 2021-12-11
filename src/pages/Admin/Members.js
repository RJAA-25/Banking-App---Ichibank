import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import styles from './members.module.css'

const Members = () => {
    return (
        <div className={styles.container}>

            <button>
                <NavLink className={styles.navLink} to="/admin" exact>Go Back</NavLink>
            </button>

            This is Members Page
        </div>
    )
}

export default Members
