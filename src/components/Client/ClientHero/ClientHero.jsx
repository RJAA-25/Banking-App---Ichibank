import React,{useState,useEffect} from 'react'

// CSS
import styles from './clientHero.module.css'

// Components
import ClientTransactions from './ClientTransactions/ClientTransactions'
import ExpenseTracker from '../ExpenseTracker/ExpenseTracker'

const ClientHero = (props) => {

    // Destructured Properties
    const {setClientActive} = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));

    // State
    const [clientUser, setClientUser] = useState(JSON.parse(localStorage.getItem("clientUser")));
    const [update, setUpdate] = useState("");

    // Effect
    useEffect(() => {
        let target = memberList.find(obj => obj.accountNo === clientUser.accountNo);
        setClientUser(target);
    },[update]);

    // Event Handlers 
    const handleLogout = () => {
        let clientUser = {};
        localStorage.setItem("clientUser", JSON.stringify(clientUser));
        localStorage.setItem("clientActive", false);
        setClientActive(false);
    }

    return (
        <div className={styles.container}>

            <div className={styles.core}>
                <section className={styles.greeting}>
                    <h1>Hi, {clientUser.firstName}</h1>
                    <button onClick={handleLogout}>Log Out</button>
                </section>

                <section className={styles.balance}>
                    <h2>Balance: ¥{clientUser.balance}</h2>
                </section>

                <section className={styles.accountDetails}>
                    <p>Username: {clientUser.username}</p>
                    <p>Account#: {clientUser.accountNo}</p>
                </section>

                <section className={styles.contactDetails}>
                    <p>Email: {clientUser.email}</p>
                    {clientUser.phone !== ""
                        ?   <p>Phone#: {clientUser.phone}</p>
                        :   <p>No contact number available</p>}
                </section>

                <section className={styles.history}>
                    {clientUser.history.length !== 0
                        ?   <>
                                <p>Latest Transaction:</p>
                                {clientUser.history[0].type === "deposit"
                                    ?   <li>Deposit: ¥{clientUser.history[0].amount}</li>
                                    :   clientUser.history[0].type === "withdraw"
                                            ?   <li>Withdraw: ¥{clientUser.history[0].amount}</li>
                                            :   clientUser.accountNo === clientUser.history[0].sender
                                                    ?   <li>Transfer: Sent ¥{clientUser.history[0].amount} to Acct#&nbsp;{clientUser.history[0].receiver}</li>
                                                    :   <li>Transfer: Received ¥{clientUser.history[0].amount} from Acct#&nbsp;{clientUser.history[0].sender}</li>}
                            </>
                        :   <>
                                <p>Latest Transaction:</p>
                                <li>No Transactions Made</li>
                            </>}
                </section>
                
                <section className={styles.transaction}>
                    <ClientTransactions 
                        clientUser={clientUser}
                        setUpdate={setUpdate}/>
                </section>
            </div>   

            <div className={styles.feature}>
                <ExpenseTracker
                    clientUser={clientUser}
                    setUpdate={setUpdate}/>
            </div>
            



            
        </div>
    )
}

export default ClientHero
