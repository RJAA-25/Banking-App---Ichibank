import React,{useState, useEffect} from 'react'

const ClientWithdraw = (props) => {

    // Destructured Properties
    const {clientUser, setUpdate} = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    let totalBalance = parseInt(JSON.parse(localStorage.getItem("totalBalance")));

    // States
    const [withdraw, setWithdraw] = useState("");
    const [filter, setFilter] = useState([]);
    const [error, setError] = useState("");

    // Effects
    useEffect(() => {
        setFilter(memberList.filter(obj => obj.accountNo !== clientUser.accountNo));
    },[withdraw])  

    // Event Handler
    const handleWithdraw = (e) => {
        e.preventDefault();
        let history = {
            type: "withdraw",
            amount: withdraw,
            sender: clientUser.accountNo,
            receiver: ""
        }
        if (parseInt(withdraw) <= parseInt(clientUser.balance)) {
            clientUser.history.unshift(history);
            transactionHistory.unshift(history);
            clientUser.balance = parseInt(clientUser.balance) - parseInt(withdraw);
            totalBalance += parseInt(withdraw);
            filter.push(clientUser);
            localStorage.setItem("memberList", JSON.stringify(filter));
            localStorage.setItem("totalBalance", totalBalance);
            localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
            alert(`Withdrawn ${withdraw} from ${clientUser.firstName} ${clientUser.lastName}`);
            setUpdate(state => state + ".");
            setWithdraw("");
        } else {
            alert(`Transaction Failed: Insufficient Bank Funds`);
            setError("Transaction Failed: Insufficient Bank Funds");
        }
        
    }

    return (
        <form onSubmit={(e) => {handleWithdraw(e)}}>
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

export default ClientWithdraw
