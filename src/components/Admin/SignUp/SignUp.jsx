import React, { useState, useEffect, useReducer } from 'react';

// CSS
import styles from './signUp.module.css';

// Framer Motion
import { motion } from 'framer-motion/dist/es/';

const emailReducer = (state, action) => {
    return {};
};

const SignUp = (props) => {

    // Destructured Properties
    const { setAdminActive, setNewAdmin } = props;
    const adminMembers = JSON.parse(localStorage.getItem("adminMembers"));


    // States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    // useReducer
    const [emailState, dispatchEmail] = useReducer();

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
    useEffect(() => {
        let target = adminMembers.find(obj => obj.username === username);
        if (target !== undefined) {
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
    }, [username]);

    useEffect(() => {
        let target = adminMembers.find(obj => obj.email === email);
        if (target !== undefined) {
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
    }, [email])

    useEffect(() => {
        if (password !== passwordCheck) {
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
    }, [password, passwordCheck])

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
                {/* Image Goes Here */}
            </section>

            <form onSubmit={(e) => { handleSignUp(e) }} className={styles.content}>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Welcome to IchiBank Admin Privilages! &nbsp;
                    <span>Sign Up</span> Now
                </motion.h1>

                <br />

                <motion.label
                    className={styles.form_label}
                    initial={{ opacity: 0, x: '-15vw' }}
                    animate={{ opacity: 1, x: '0vw' }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    First Name
                    <input
                        className={styles.form_input_name}
                        type="text"
                        value={firstName}
                        placeholder="Input first name"
                        onChange={(e) => { setFirstName(e.target.value) }}
                        required />
                </motion.label>

                <motion.label
                    className={styles.form_label}
                    initial={{ opacity: 0, x: '15vw' }}
                    animate={{ opacity: 1, x: '0vw' }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    Last Name
                    <input
                        className={styles.form_input_name}
                        type="text"
                        value={lastName}
                        placeholder="Input last name"
                        onChange={(e) => { setLastName(e.target.value) }}
                        required />
                </motion.label>

                <motion.label
                    className={styles.form_label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Username
                    <input
                        className={styles.form_input_name}
                        type="text"
                        value={username}
                        placeholder="Input username"
                        onChange={(e) => { setUsername(e.target.value.trim()) }}
                        disabled={disableUsername}
                        required />
                    <h5>{errorUsername}</h5>
                </motion.label>

                <motion.label
                    className={styles.form_label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.15 }}
                >
                    Email
                    <input
                        className={styles.form_input}
                        type="email"
                        value={email}
                        placeholder="Input email"
                        onChange={(e) => { setEmail(e.target.value.trim()) }}
                        disabled={disableEmail}
                        required />
                    <h5>{errorEmail}</h5>
                </motion.label>

                <br />

                <motion.label
                    className={styles.form_label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                >
                    Password
                    <input
                        className={styles.form_input}
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Input password"
                        disabled={disablePassword}
                        required />
                    <br />
                    <input
                        className={styles.form_input}
                        type="password"
                        value={passwordCheck}
                        onChange={(e) => { setPasswordCheck(e.target.value) }}
                        placeholder="Confirm password"
                        disabled={disablePasswordCheck}
                        required />
                    <h5>{errorPassword}</h5>
                </motion.label>

                <button
                    className={styles.form_input_btn}
                    type="submit"
                    disabled={disableButton}>
                    Sign Up
                </button>

                <br />

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
