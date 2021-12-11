import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import styles from './members.module.css'

// Components
import Sidebar from '../../components/Sidebar/Sidebar';

const Members = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));


    return (
        <div className={styles.container}>
            <Sidebar />

            <section className={styles.members}> 

                <div className={styles.header}>
                    <h1>IchiBank Members</h1>
                    <button>
                        <NavLink className={styles.navLink} to="/admin" exact>Go Back</NavLink>
                    </button>
                </div>

                <div className={styles.body}>
                    {memberList.map(obj => 
                        <div className={styles.memberList}>
                            <span>{obj.firstName}&nbsp;{obj.lastName}</span>
                            <span>{obj.username }</span>
                            <span>{obj.accountNo}</span>
                            <span>{obj.balance}</span>  
                        </div>)}
                </div>

            </section>

            
        </div>
    )
}

export default Members
