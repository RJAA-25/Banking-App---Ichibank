import React, {useState} from 'react';

// CSS
import styles from './signIn.module.css';

const SignIn = (props) => {

    // Destructured Properties
    const {setAdminActive, setNewAdmin} = props;
    const adminMembers = JSON.parse(localStorage.getItem("adminMembers"));

    // States
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error States
    const [errorUserEmail, setErrorUserEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    // Event Handlers
    const handleSignIn = () => {
        let target = adminMembers.find(obj => obj.email === userEmail || obj.username === userEmail);
        if(target === undefined) {
            setErrorUserEmail("User does not exist");
        } else {
            if (target.password !== password) {
                setErrorPassword("Incorrect password");
            } else {
                localStorage.setItem("adminActive", true);
                localStorage.setItem("adminUser", JSON.stringify(target));
                setAdminActive(true);
            }
        }
    }

    const handleSignUp = () => {
        setNewAdmin(true);
    }

    return (
        <div className={styles.container}>

            <section className={styles.design}>
                Log In as Ichibank Admin
            </section>

            <section className={styles.content}>

                <label>
                    Username | Email
                    <input 
                        type="text" 
                        value={userEmail}
                        onChange={(e) => {setUserEmail(e.target.value.trim()); setErrorUserEmail("");}}
                        required
                        />
                    <h5>{errorUserEmail}</h5>
                </label>

                <label>
                    Password
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => {setPassword(e.target.value); setErrorPassword("");}}
                        required
                        />
                    <h5>{errorPassword}</h5>
                </label>

                <button onClick={handleSignIn}>Sign In</button>
            
                <p>
                    Don't have an Admin account?
                    &nbsp; 
                    <span
                        onClick={handleSignUp}>
                        Sign Up
                    </span>
                </p>

            </section>
            
        </div>
    )
}

export default SignIn
