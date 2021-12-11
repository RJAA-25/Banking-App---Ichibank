import React, {useState, useEffect} from 'react';

// CSS
import styles from './admin.module.css';

// Components
import SignIn from '../../components/Admin/SignIn/SignIn';
import SignUp from '../../components/Admin/SignUp/SignUp';
import Hero from '../../components/Admin/Hero/Hero';

const Admin = () => {

    // States
    const [adminActive, setAdminActive] = useState(false);
    const [newAdmin, setNewAdmin] = useState(false);

    // Initialize adminMembers
    if (JSON.parse(localStorage.getItem("adminMembers")) === null) {
        let adminMembers = [];
        localStorage.setItem("adminMembers", JSON.stringify(adminMembers));
    }

    // Initialize memberList, transactionHistory, totalBalance
    if (JSON.parse(localStorage.getItem("memberList")) === null) {
        let memberList = [];
        localStorage.setItem("memberList", JSON.stringify(memberList));
    }
    if (JSON.parse(localStorage.getItem("transactionHistory")) === null) {
        let transactionHistory = [];
        localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));
    }
    if (JSON.parse(localStorage.getItem("totalBalance")) === null) {
        let totalBalance = 0;
        localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
    }
    
    // Effects
    useEffect(() => {
        // Initialize adminActive
        if (JSON.parse(localStorage.getItem("adminActive")) === null) {
            localStorage.setItem("adminActive", adminActive);
        } else {
            setAdminActive(JSON.parse(localStorage.getItem("adminActive")));
        }
    },[]);
    
    return (
        <div className={styles.container}>
            
            {adminActive 
                ? <Hero
                setAdminActive={setAdminActive}/>
                : newAdmin 
                    ? <SignUp 
                        setAdminActive={setAdminActive}
                        setNewAdmin={setNewAdmin}/>
                    : <SignIn
                        setAdminActive={setAdminActive}
                        setNewAdmin={setNewAdmin}/>
            }           

        </div>
    )
}

export default Admin
