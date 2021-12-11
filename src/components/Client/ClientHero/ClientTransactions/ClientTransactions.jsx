import React,{useState} from 'react'

// CSS
import styles from './clientTransactions.module.css'

// Components
import ClientDeposit from './ClientDeposit/ClientDeposit'
import ClientWithdraw from './ClientWithdraw/ClientWithdraw'
import ClientTransfer from './ClientTransfer/ClientTransfer'

const ClientTransactions = (props) => {

    // Desctructured Properties
    const {clientUser, setUpdate} = props;

    // States
    const [deposit, setDeposit] = useState(true);
    const [withdraw, setWithdraw] = useState(false);
    const [transfer, setTransfer] = useState(false);

    return (
        <>
            <div className={styles.select}>
                <section 
                        onClick={() => {
                            setDeposit(true);
                            setWithdraw(false);
                            setTransfer(false);
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
                    ? <ClientDeposit 
                        clientUser={clientUser}
                        setUpdate={setUpdate}/>
                    : withdraw 
                        ? <ClientWithdraw 
                            clientUser={clientUser}
                            setUpdate={setUpdate}/>
                        : <ClientTransfer 
                            clientUser={clientUser}
                            setUpdate={setUpdate}/>}
            </div>
        </>        
    )
}

export default ClientTransactions
