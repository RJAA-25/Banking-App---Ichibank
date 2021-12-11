import React,{useState,useEffect} from 'react'

// CSS
import styles from './expenseTracker.module.css'

// Components
import ExpenseList from './ExpenseList'

const ExpenseTracker = (props) => {

    // Destructured Properties
    const {clientUser, setUpdate} = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    
    // States
    const [budget, setBudget] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [title, setTitle] = useState("");
    const [cost, setCost] = useState("");
    const [filter, setFilter] = useState([]);
    const [expense, setExpense] = useState([]);

    useEffect(() => {
        setBudget(parseInt(clientUser.balance));
        setExpense(clientUser.expense);
    },[clientUser]);

    useEffect(() => {
        let total = 0;
        expense.forEach(obj => total += parseInt(obj.cost));
        setTotalCost(total);
    },[expense]);

    useEffect(() => {
        setFilter(memberList.filter(obj => obj.accountNo !== clientUser.accountNo));
    },[title, cost])

    // Event Handlers
    const handleAddExpense = (e) => {
        e.preventDefault();
        clientUser.expense.unshift({
            title: title,
            cost: cost
        });
        filter.push(clientUser);
        localStorage.setItem("memberList", JSON.stringify(filter));
        setExpense(clientUser.expense);
        // setExpense(obj => [{title: title, cost: cost},...obj,]);
        setUpdate(state => state + ".");
        setTitle("");
        setCost("");
    }

    return (
        <div className={styles.container}>
            
            <section className={styles.budget}>
                <h2>Budget</h2>
                <h2>¥{budget-totalCost}</h2>
            </section>

            <form onSubmit={(e) => handleAddExpense(e)}className={styles.expense}>
                <h2>Add Expense</h2>
                <label>
                    Title
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                        required/>
                </label>
                <label>
                    Cost
                    <input
                        type="text"
                        value={cost}
                        onChange={(e) => {setCost(e.target.value)}}
                        required/>
                </label>

                <button
                    type="submit">
                    Add Expense
                </button>
            </form>

            <section className={styles.list}>
                <h2>Expense List</h2>
                <div className={styles.listContainer}>
                    {expense.map(obj => 
                        <ExpenseList 
                            title={obj.title} 
                            cost={obj.cost}
                            expense={expense}
                            setExpense={setExpense}
                            clientUser={clientUser}/>)}
                </div>   
            </section>  

        </div>
    )
}

export default ExpenseTracker
