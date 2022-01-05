import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import styles from './transaction.module.css'

// Components
import Sidebar from '../../components/Sidebar/Sidebar';
import Deposit from '../../components/Admin/Hero/Transactions/Deposit/Deposit'
import Withdraw from '../../components/Admin/Hero/Transactions/Withdraw/Withdraw'
import Transfer from '../../components/Admin/Hero/Transactions/Transfer/Transfer'

const Transaction = () => {

    // States
    const [deposit, setDeposit] = useState(true);
    const [withdraw, setWithdraw] = useState(false);
    const [transfer, setTransfer] = useState(false);

    return (
        <>
        
        <div className={styles.container}>
        <Sidebar />

            <button>
                <NavLink className={styles.navLink} to="/admin" exact>Go Back</NavLink>
            </button>

            <div className={styles.select}>
                <section 
                    onClick={() => {
                        setDeposit(true);
                        setWithdraw(false);
                        setTransfer(false);
                        console.log(transfer);
                     }}>
                    Deposit
                </section>
                <section 
                    onClick={() => {
                        setDeposit(false);
                        setWithdraw(true);
                        setTransfer(false);
                     }}>
                    Withdraw
                </section>
                <section 
                    onClick={() => {
                        setDeposit(false);
                        setWithdraw(false);
                        setTransfer(true);
                     }}>
                    Transfer
                </section>
            </div>

            <div className={styles.transaction}>
                {deposit 
                    ? <Deposit/>
                    : withdraw 
                        ? <Withdraw/>
                        : <Transfer/>}
            </div>
            
        </div>
        </>
    )
}

export default Transaction
