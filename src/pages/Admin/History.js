import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import styles from './history.module.css';

// Components
import Sidebar from '../../components/Sidebar/Sidebar';

const History = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    console.log(memberList);
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    const deposit = transactionHistory.filter(obj => obj.type === "deposit");
    const withdraw = transactionHistory.filter(obj => obj.type === "withdraw");
    const transfer = transactionHistory.filter(obj => obj.type === "transfer");

    return (
        <div className={styles.container}>
            <Sidebar />

            <section className={styles.history}>

                <div className={styles.headerHistory}>
                    <h1>IchiBank Transaction History</h1>
                    <button>
                        <NavLink className={styles.navLink} to="/admin" exact>Go Back</NavLink>
                    </button>
                </div>

                <div className={styles.bodyHistory}>

                    <section className={styles.typeHistory}>
                        <div className={styles.typeHeader}>
                            <h2>Deposit</h2>
                        </div>
                        <div className={styles.typeBody}>
                            {deposit.map(obj =>
                                <div className={styles.typeList}>
                                    <strong>¥ {obj.amount}</strong>
                                    <em>Acct# :{obj.sender}</em>
                                </div>)}
                        </div>
                    </section>

                    <section className={styles.typeHistory}>
                        <div className={styles.typeHeader}>
                            <h2>Withdraw</h2>
                        </div>
                        <div className={styles.typeBody}>
                            {withdraw.map(obj =>
                                <div className={styles.typeList}>
                                    <strong>¥ {obj.amount}</strong>
                                    <em>Acct# :{obj.sender}</em>
                                </div>)}
                        </div>
                    </section>

                    <section className={styles.typeHistory}>
                        <div className={styles.typeHeader}>
                            <h2>Transfer</h2>
                        </div>
                        <div className={styles.typeBody}>
                            {transfer.map(obj =>
                                <div className={styles.typeList}>
                                    <em>Acct# :{obj.sender}</em>
                                    <strong>¥ {obj.amount}</strong>
                                    <em>Acct# :{obj.receiver}</em>
                                </div>)}
                        </div>
                    </section>



                </div>   
                
            </section>   
            

        </div>
    )
}

export default History
