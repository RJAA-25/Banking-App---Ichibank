import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import styles from './history.module.css';

const History = () => {
    return (
        <div className={styles.container}>

            <button>
                <NavLink className={styles.navLink} to="/admin" exact>Go Back</NavLink>
            </button>

            This is History Page
        </div>
    )
}

export default History
