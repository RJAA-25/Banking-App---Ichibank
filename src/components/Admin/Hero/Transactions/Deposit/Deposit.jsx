import React,{useState,useEffect} from 'react'

// CSS
import styles from './deposit.module.css';

const Deposit = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    let totalBalance = parseInt(JSON.parse(localStorage.getItem("totalBalance")));

    // States
    const [accountNo, setAccountNo] = useState("");
    const [deposit, setDeposit] = useState("");
    const [target, setTarget] = useState({});
    const [filter, setFilter] = useState([]);

    //Effects
    useEffect(() => {
        let memberUser = memberList.find(obj => obj.accountNo === accountNo);
        if (memberUser !== undefined) {
            setTarget(memberUser);
        } else {
            setTarget({});
        }
    },[accountNo])

    useEffect(() => {
        setFilter(memberList.filter(obj => obj.accountNo !== target.accountNo));
    },[target, deposit])

    // EventHandlers
    const handleDeposit = (e) => {
        e.preventDefault();
        let history = {
            type: "deposit",
             amount: deposit,
            sender: accountNo,
            receiver: ""
        }
        target.history.unshift(history);
        transactionHistory.unshift(history);
        target.balance = parseInt(target.balance) + parseInt(deposit);
        totalBalance += parseInt(deposit);
        filter.push(target);
        localStorage.setItem("memberList", JSON.stringify(filter));
        localStorage.setItem("totalBalance", totalBalance);
        localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
        alert(`Deposited ${deposit} to ${target.firstName} ${target.lastName}`);
        setAccountNo(target.accountNo);
        setDeposit("");
    }

    return (
        <form onSubmit={(e) => {handleDeposit(e)}}>
            
            <label>
                Account No
                <input 
                    type="text"
                    value={accountNo}
                    onChange={(e) => {setAccountNo(e.target.value)}}
                    required/>
            </label>
        
            <h3>Account Name: {target.firstName} {target.lastName}</h3>

            <h3>Balance: {target.balance}</h3>

            <label>
                Deposit Amount
                <input
                    type="number"
                    value={deposit}
                    onChange={(e) => {setDeposit(e.target.value)}}
                    required/>
            </label>

            <button
                type="submit">
                Deposit
            </button>

        </form>
    )
}

export default Deposit
