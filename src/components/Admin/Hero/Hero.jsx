import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import styles from './hero.module.css';

// Components
import Sidebar from '../../Sidebar/Sidebar.js';

const Hero = (props) => {

    // Destructured Properties
    const { setAdminActive } = props;
    const adminUser = JSON.parse(localStorage.getItem("adminUser"));

    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    const totalBalance = JSON.parse(localStorage.getItem("totalBalance"));

    let bankMembers = memberList.length;
    let bankTransactions = transactionHistory.length;
    let bankBalance = totalBalance;

    // Event Handlers
    const handleLogout = () => {
        let adminUser = {};
        localStorage.setItem("adminUser", JSON.stringify(adminUser));
        localStorage.setItem("adminActive", false);
        setAdminActive(false);
    }

    return (
        <>
            <Sidebar />
            <div className={styles.container}>
                <h1>Hi, {adminUser.firstName} </h1>
                <button onClick={handleLogout}>Logout</button>

                <h2>Bank Balance: ¥ {bankBalance}</h2>
                <h2>Bank Members: {bankMembers}</h2>
                <h2>Bank Transactions: {bankTransactions}</h2>

                {/* <section className={styles.links}>
                    <NavLink to="/admin-create" exact>Create New Account</NavLink>
                    <NavLink to="/admin-transaction" exact>Make Transaction</NavLink>
                    <NavLink to="/admin-members" exact>Members List</NavLink>
                    <NavLink to="/admin-history" exact>Transaction History</NavLink>
                </section> */}
            </div>
        </>
    )
}

export default Hero
