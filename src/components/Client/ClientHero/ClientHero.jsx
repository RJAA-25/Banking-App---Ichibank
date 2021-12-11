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
                    <h1>Hi, <span>{clientUser.firstName}</span></h1>
                    <button onClick={handleLogout}>Log Out</button>
                </section>

                <div className={styles.dataContainer}>

                    <div className={styles.dataLeft}>
                        {/* <section className={styles.balance}> */}
                            <h2>Balance</h2>
                            <h1>¥{clientUser.balance}</h1>
                        {/* </section> */}
                    </div>

                    <div className={styles.dataRight}>
                        <section className={styles.accountDetails}>
                            <strong>Username: {clientUser.username}</strong>
                            <strong>Account#: {clientUser.accountNo}</strong>
                        </section>

                        <section className={styles.contactDetails}>
                            <strong>Email: {clientUser.email}</strong>
                            {clientUser.phone !== ""
                                ?   <strong>Phone#: {clientUser.phone}</strong>
                                :   <strong>No contact number available</strong>}
                        </section>
                    </div>

                </div>
                <section className={styles.history}>
                    {clientUser.history.length !== 0
                        ?   <>
                                <strong>Latest Transaction:</strong>
                                <div className={styles.historyOutput}>  
                                {clientUser.history[0].type === "deposit"
                                    ?   <li>Deposit: ¥{clientUser.history[0].amount}</li>
                                    :   clientUser.history[0].type === "withdraw"
                                            ?   <li>Withdraw: ¥{clientUser.history[0].amount}</li>
                                            :   clientUser.accountNo === clientUser.history[0].sender
                                                    ?   <li>Transfer: Sent ¥{clientUser.history[0].amount} to Acct#&nbsp;{clientUser.history[0].receiver}</li>
                                                    :   <li>Transfer: Received ¥{clientUser.history[0].amount} from Acct#&nbsp;{clientUser.history[0].sender}</li>}
                                </div>
                            </>
                        :   <>
                                <strong>Latest Transaction:</strong>
                                <div className={styles.historyOutput}>  
                                    <li>No Transactions Made</li>
                                </div>
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
