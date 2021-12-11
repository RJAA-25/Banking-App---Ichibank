import React, {useState, useEffect} from 'react';

// CSS
import styles from './signUp.module.css';

const SignUp = (props) => {

    // Destructured Properties
    const {setAdminActive, setNewAdmin} = props;
    const adminMembers = JSON.parse(localStorage.getItem("adminMembers"));


    // States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

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
        let target = adminMembers.find(obj => obj.username === username);
        if(target !== undefined) {
            setErrorUsername("Username already taken");
            setDisableButton(true);
            // setDisableUsername(true);
            setDisableEmail(true);
            setDisablePassword(true);
            setDisablePasswordCheck(true);
        } else {
            setErrorUsername("");
            setDisableButton(false);
            // setDisableUsername(false);
            setDisableEmail(false);
            setDisablePassword(false);
            setDisablePasswordCheck(false);
        }
    },[username]);

    useEffect(() => {
        let target = adminMembers.find(obj => obj.email === email);
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
    const handleSignUp = (e) => {
        e.preventDefault();

        let adminUser = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
        };

        adminMembers.push(adminUser);
        localStorage.setItem("adminMembers", JSON.stringify(adminMembers));
        localStorage.setItem("adminUser", JSON.stringify(adminUser));
        localStorage.setItem("adminActive", true);
        setAdminActive(true);
        setNewAdmin(false);
    }

    const handleSignIn = () => {
        setNewAdmin(false);
    }

    return (
        <div className={styles.container}>

            <section className={styles.design}>
                Create an Admin Account
            </section>

            <form onSubmit={(e) => {handleSignUp(e)}} className={styles.content}>
    
                <label>
                    First Name 
                    <input 
                        type="text" 
                        value={firstName}
                        onChange={(e) => {setFirstName(e.target.value)}}
                        required/>
                </label>
                
                <label>
                    Last Name 
                    <input 
                        type="text" 
                        value={lastName}
                        onChange={(e) => {setLastName(e.target.value)}}
                        required/>
                </label>

                <label>
                    Username 
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => {setUsername(e.target.value.trim())}}
                        disabled={disableUsername}
                        required/>
                    <h5>{errorUsername}</h5>
                </label>

                <label>
                    Email
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value.trim())}}
                        disabled={disableEmail}
                        required/>
                    <h5>{errorEmail}</h5>
                </label>

                <label>
                    Password 
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        placeholder="Input password"
                        disabled={disablePassword}
                        required/>
                    <input 
                        type="password" 
                        value={passwordCheck}
                        onChange={(e) => {setPasswordCheck(e.target.value)}}
                        placeholder="Confirm password"
                        disabled={disablePasswordCheck}
                        required/>
                    <h5>{errorPassword}</h5>
                </label>

                <button 
                    type="submit"
                    disabled={disableButton}>
                    Sign Up
                </button>

                <p>
                    Already have an Admin account?
                    &nbsp; 
                    <span
                        onClick={handleSignIn}>
                        Sign in
                    </span>
                </p>

            </form>
            
        </div>
    )
}

export default SignUp
