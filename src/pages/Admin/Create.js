import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import styles from './create.module.css';

// Framer Motion
import { motion } from 'framer-motion/dist/es/';

// Components
import AccountNo from '../../components/Admin/Hero/Create/AccountNo'
import Sidebar from '../../components/Sidebar/Sidebar';

const Create = () => {

    // Destructured Properties
    const adminActive = JSON.parse(localStorage.getItem("adminActive"));
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    let totalBalance = JSON.parse(localStorage.getItem("totalBalance"));

    // States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [balance, setBalance] = useState(2000);
    
    // Error States
    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [disableButton, setDisableButton] = useState(false);
    const [disableUsername, setDisableUsername] = useState(false);
    const [disableEmail, setDisableEmail] = useState(false);
    const [disablePassword, setDisablePassword] = useState(false);
    const [disablePasswordCheck, setDisablePasswordCheck] = useState(false);

    // Effects
    useEffect(() =>{
        let target = memberList.find(obj => obj.username === username);
        if(target !== undefined) {
            setErrorUsername("Username already taken");
            setDisableButton(true);
            setDisableEmail(true);
            setDisablePassword(true);
            setDisablePasswordCheck(true);
        } else {
            setErrorUsername("");
            setDisableButton(false);
            setDisableEmail(false);
            setDisablePassword(false);
            setDisablePasswordCheck(false);
        }
    },[username]);

    useEffect(() => {
        let target = memberList.find(obj => obj.email === email);
        if(target !== undefined) {
            setErrorEmail("Email already in use");
            setDisableButton(true);
            setDisableUsername(true);
            setDisablePassword(true);
            setDisablePasswordCheck(true);
        } else {
            setErrorEmail("");
            setDisableButton(false);
            setDisableUsername(false);
            setDisablePassword(false);
            setDisablePasswordCheck(false);
        }
    },[email])

    useEffect(() => {
        if(password !== passwordCheck) {
            setErrorPassword("Passwords do not match");
            setDisableButton(true);
            setDisableUsername(true);
            setDisableEmail(true);
        } else {
            setErrorPassword("");
            setDisableButton(false);
            setDisableUsername(false);
            setDisableEmail(false);
        }
    },[password,passwordCheck])

    // Event Handlers
    const onGenerate = accountNo =>{
        setAccountNo(accountNo);
    }


    const handleCreate = (e) => {
        e.preventDefault();
        let memberData = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            username: username,
            password: password,
            accountNo: accountNo,
            balance: balance,
            expense: [],
            history: []
        }
        memberList.push(memberData);
        localStorage.setItem("memberList", JSON.stringify(memberList));
        totalBalance += parseInt(balance);
        localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
        window.location.reload();
        alert(`Account Created: ${firstName} ${lastName} | ${accountNo}`);
    }

    return (
        <div className={styles.container}>
            
            {adminActive 
                ? 
                    <>
                    <Sidebar />
                    <section className={styles.content}>

                        <h1>Create New Account</h1>

                        <form onSubmit={(e) => handleCreate(e)} className={styles.form}>

                            
                                
                                <motion.input 
                                    initial={{ opacity: 0, x: '-15vw' }}
                                    animate={{ opacity: 1, x: '0vw' }}
                                    transition={{ duration: 1, delay: 0 }}
                                    type="text" 
                                    value={firstName} 
                                    placeholder="First Name"
                                    onChange={(e) => {setFirstName(e.target.value)}}
                                    required/>
                            

                            
                                
                                <motion.input
                                    initial={{ opacity: 0, x: '15vw' }}
                                    animate={{ opacity: 1, x: '0vw' }}
                                    transition={{ duration: 1, delay: 0 }}
                                    type="text"
                                    value={lastName}
                                    placeholder="Last Name"
                                    onChange={(e) => {setLastName(e.target.value)}}
                                    required/>
                            
                            
                            
                                
                                <motion.input 
                                    type="tel"
                                    value={phone}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    placeholder="Phone Number"
                                    pattern="[0][9][0-9]{2}-[0-9]{3}-[0-9]{4}"
                                    placeholder="09XX-XXX-XXXX"
                                    onChange={(e) => {setPhone(e.target.value)}}/>
                            

                            
                                
                                <motion.input 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.15 }}
                                    type="email" 
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => {setEmail(e.target.value.trim())}}
                                    disabled={disableEmail}
                                    required/>
                                <h5>{errorEmail}</h5>
                            

                            
                                 
                                <motion.input 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.25 }}
                                    type="text" 
                                    value={username}
                                    placeholder="Username"
                                    onChange={(e) => {setUsername(e.target.value.trim())}}
                                    disabled={disableUsername}
                                    required/>
                                <h5>{errorUsername}</h5>
                            

                            
                                
                                <motion.input 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.35 }}
                                    type="password" 
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    placeholder="Input password"
                                    disabled={disablePassword}
                                    required/>

                                <motion.input 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.35 }}
                                    type="password" 
                                    value={passwordCheck}
                                    onChange={(e) => {setPasswordCheck(e.target.value)}}
                                    placeholder="Confirm password"
                                    disabled={disablePasswordCheck}
                                    required/>
                                <h5>{errorPassword}</h5>
                            
                            <br />

                            <AccountNo onGenerate = {onGenerate}/>

                            
                                
                                <motion.input
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                    type="number"
                                    value={balance}
                                    placeholder="Min: 2000"
                                    min="2000"
                                    onChange={(e) => {setBalance(e.target.value)}}
                                    required/>
                            

                            <button 
                                type="submit" 
                                disabled={disableButton}>
                                Create Account
                            </button>

                            <button 
                                type="button">
                                <NavLink className={styles.navLink} to="/admin" exact>Cancel</NavLink>
                            </button>

                        </form>
                    
                    </section>
                    </>

                : 
                    <div>Please Log In to continue</div>}

        
        </div>
    )
}

export default Create
