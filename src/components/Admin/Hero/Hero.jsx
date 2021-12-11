import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import styles from './hero.module.css';

// Components
import Sidebar from '../../Sidebar/Sidebar.js';

// Framer Motion
import { motion, useAnimation } from 'framer-motion/dist/es/';

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

                <div className={styles.adminUser}>
                    <h1>Hi, {adminUser.firstName} </h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h2>Bank Balance: ¥ {bankBalance}</h2>
                        <motion.img
                            initial={{ opacity: 1, y: '-10vh' }}
                            animate={{ opacity: 1, y: '0vh' }}
                            transition={{ type: 'spring', bounce: 0.6, duration: 2, delay: 1 }}
                            src="https://images.unsplash.com/photo-1631067958329-df1b5d64859c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="bank balance image" />
                    </div>
                    <div className={styles.card}>
                        <h2>Bank Members: {bankMembers}</h2>
                        <motion.img
                            initial={{ opacity: 1, y: '-10vh' }}
                            animate={{ opacity: 1, y: '0vh' }}
                            transition={{ type: 'spring', bounce: 0.6, duration: 2, delay: 1 }}
                            src="https://images.unsplash.com/photo-1567526977394-a5816c70679e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="bank members" />
                    </div>
                    <div className={styles.card}>
                        <h2>Bank Transactions: {bankTransactions}</h2>
                        <motion.img
                            initial={{ opacity: 1, y: '-10vh' }}
                            animate={{ opacity: 1, y: '0vh' }}
                            transition={{ type: 'spring', bounce: 0.6, duration: 2, delay: 1 }}
                            src="https://images.pexels.com/photos/7845070/pexels-photo-7845070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bank transactions" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
