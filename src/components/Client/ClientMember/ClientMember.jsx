import React,{useState} from 'react'

// CSS
import styles from './clientMember.module.css'

const ClientMember = (props) => {

    // Destructured Properties
    const {setClientActive,setBankMember} = props;
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
        if(target === undefined) {
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
                Log In as Ichibank Member
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
