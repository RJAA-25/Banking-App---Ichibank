import React,{useState,useEffect}from 'react'

const ClientTransfer = (props) => {

    // Destructured Properties
    const {clientUser, setUpdate} = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));

    // States
    const [receiverAccount, setReceiverAccount] = useState("");
    const [transfer, setTransfer] = useState("");
    const [targetReceiver, setTargetReceiver] = useState({});
    const [filter, setFilter] = useState([]);
    const [error,setError] = useState("");

    // Effects
    useEffect(() => {
        let memberReceiver = memberList.find(obj => obj.accountNo === receiverAccount);
        if (memberReceiver !== undefined) {
            setTargetReceiver(memberReceiver);
        } else {
            setTargetReceiver({});
        }
    },[receiverAccount]);

    useEffect(() => {
        setFilter(memberList.filter(obj => obj.accountNo !== clientUser.accountNo && obj.accountNo !== targetReceiver.accountNo));
    },[targetReceiver, transfer]);

    // Event Handlers
    const handleTransfer = (e) => {
        e.preventDefault();
        let history = {
            type: "transfer",
            amount: transfer,
            sender: clientUser.accountNo,
            receiver: receiverAccount
        }
        if (parseInt(transfer) <= parseInt(clientUser.balance)) {
            clientUser.history.unshift(history);
            targetReceiver.history.unshift(history);
            transactionHistory.unshift(history);
            clientUser.balance = parseInt(clientUser.balance) - parseInt(transfer);
            targetReceiver.balance = parseInt(targetReceiver.balance) + parseInt(transfer);
            filter.push(clientUser, targetReceiver);
            localStorage.setItem("memberList", JSON.stringify(filter));
            localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
            alert(`Trasferred ${transfer} from ${clientUser.firstName} ${clientUser.lastName} to ${targetReceiver.firstName} ${targetReceiver.lastName}`);
            setUpdate(state => state + ".");
            setReceiverAccount(targetReceiver.accountNo);
            setTransfer("");
        } else {
            alert(`Transaction Failed: Insufficient Bank Funds`);
            setError("Transaction Failed: Insufficient Bank Funds");
        }
    }


    return (
        <form onSubmit={(e) => {handleTransfer(e)}}>
            <h2>Receiver</h2>
            <label>
                Account No
                <input 
                    type="text"
                    value={receiverAccount}
                    onChange={(e) => {setReceiverAccount(e.target.value)}}
                    required/>
            </label>
            
            <h3>Account Name: {targetReceiver.firstName} {targetReceiver.lastName}</h3>

            <h3>Balance: {targetReceiver.balance}</h3>

            <label>
                Transfer Amount
                <input
                    type="number"
                    value={transfer}
                    onChange={(e) => {setTransfer(e.target.value); setError("");}}
                    required/>
                <h5>{error}</h5>
            </label>

            <button
                type="submit">
                Transfer
            </button>
        </form>
    )
}

export default ClientTransfer
