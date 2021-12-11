import React,{useState, useEffect} from 'react'

// CSS
import styles from './withdraw.module.css';

const Withdraw = () => {

    // Destructured Properties
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    let totalBalance = parseInt(JSON.parse(localStorage.getItem("totalBalance")));

    // States
    const [accountNo, setAccountNo] = useState("");
    const [withdraw, setWithdraw] = useState("");
    const [target, setTarget] = useState({});
    const [filter, setFilter] = useState([]);
    
    // Error States
    const [error, setError] = useState("");

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
    },[target, withdraw])

    // Event Handlers
    const handleWithdraw = (e) => {
        e.preventDefault();
        let history = {
            type: "withdraw",
            amount: withdraw,
            sender: accountNo,
            receiver: "",
        }

        if (parseInt(withdraw) <= parseInt(target.balance)) {
            target.history.unshift(history);
            transactionHistory.unshift(history);
            target.balance = parseInt(target.balance) - parseInt(withdraw);
            totalBalance -= parseInt(withdraw);
            filter.push(target);
            localStorage.setItem("memberList", JSON.stringify(filter));
            localStorage.setItem("totalBalance", totalBalance);
            localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
            alert(`Withdrawn ${withdraw} from ${target.firstName} ${target.lastName}`);
            setAccountNo(target.accountNo);
            setWithdraw("");
        } else {
            alert(`Transaction Failed: Insufficient Bank Funds`);
            setError("Transaction Failed: Insufficient Bank Funds");
        }
    }

    return (
        <form onSubmit={(e) => {handleWithdraw(e)}}>

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
                Withdraw Amount
                <input
                    type="number"
                    value={withdraw}
                    onChange={(e) => {setWithdraw(e.target.value); setError("");}}
                    required/>
                <h5>{error}</h5>
            </label>

            <button
                type="submit">
                Withdraw
            </button>

        </form>
    )
}

export default Withdraw
