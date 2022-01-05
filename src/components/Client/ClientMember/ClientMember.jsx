import React, { useState } from 'react'

// CSS
import styles from './clientMember.module.css'

// Framer Motion
import { motion } from 'framer-motion/dist/es/';

const ClientMember = (props) => {

    // Destructured Properties
    const { setClientActive, setBankMember } = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));

    // States
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error States
    const [errorUserEmail, setErrorUserEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");


    // Event Handlers
    const handleSignIn = () => {

        let target = memberList.find(obj => obj.email === userEmail || obj.username === userEmail);
        if (target === undefined) {
            setErrorUserEmail("User does not exist");
        } else {
            if (target.password !== password) {
                setErrorPassword("Incorrect password");
            } else {
                localStorage.setItem("clientActive", true);
                localStorage.setItem("clientUser", JSON.stringify(target));
                setClientActive(true);
            }
        }


    }

    const handleGuestMember = () => {
        setBankMember(false);
    }

    return (
        <div className={styles.container}>

            <section className={styles.design}>
                {/* Image Goes Here */}
            </section>

            <section className={styles.content}>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Welcome to IchiBank! Your All in One Banking Needs<br /><br />
                    <span>Sign In</span> Now
                </motion.h1>

                <motion.label
                    className={styles.form_label}
                    initial={{ opacity: 0, x: '-15vw' }}
                    animate={{ opacity: 1, x: '0vw' }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    Username | Email <br /><br />
                    <input
                        className={styles.form_input}
                        type="text"
                        placeholder="Enter your username or email"
                        value={userEmail}
                        onChange={(e) => { setUserEmail(e.target.value.trim()); setErrorUserEmail(""); }}
                        required
                    />
                    <h5>{errorUserEmail}</h5>
                </motion.label>

                <motion.label
                    className={styles.form_label}
                    initial={{ opacity: 0, x: '15vw' }}
                    animate={{ opacity: 1, x: '0vw' }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    Password <br /><br />
                    <input
                        className={styles.form_input}
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setErrorPassword(""); }}
                        required
                    />
                    <h5>{errorPassword}</h5>
                </motion.label>

                <button
                    className={styles.form_input_btn}
                    onClick={handleSignIn}
                >Sign In</button>

                <p>
                    Not an IchiBank Member? Sign In as
                    &nbsp;
                    <span
                        onClick={handleGuestMember}>
                        Guest
                    </span>
                </p>

            </section>



            {/* <h1>You are an IchiBank Member</h1>

            <span>Not an Ichibank Member?</span>
            <button onClick={onGuestMember}>Log In as Guest</button> */}

        </div>
    )
}

export default ClientMember
