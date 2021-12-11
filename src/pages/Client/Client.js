import React,{useState,useEffect} from 'react'

// CSS
import styles from './client.module.css'

// Components
import ClientHero from '../../components/Client/ClientHero/ClientHero'
import GuestHero from '../../components/Client/GuestHero/GuestHero'

import ClientMember from '../../components/Client/ClientMember/ClientMember'
import GuestMember from '../../components/Client/GuestMember/GuestMember'
import NewGuestMember from '../../components/Client/NewGuestMember/NewGuestMember'

const Client = () => {

    // States
    const [clientActive, setClientActive] = useState(false);
    const [guestActive, setGuestActive] = useState(false);
    const [bankMember, setBankMember] = useState(true);
    const [guestMember, setGuestMember] = useState(true);

    // Initialize guestMembers
    if (JSON.parse(localStorage.getItem("guestMembers")) === null) {
        let guestMembers = [];
        localStorage.setItem("guestMembers", JSON.stringify(guestMembers));
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

        // Initialize clientActive
        if (JSON.parse(localStorage.getItem("clientActive")) === null) {
            localStorage.setItem("clientActive", clientActive);
        } else {
            setClientActive(JSON.parse(localStorage.getItem("clientActive")));
        }

        // Initialize guestActive
        if (JSON.parse(localStorage.getItem("guestActive")) === null) {
            localStorage.setItem("guestActive", guestActive);
        } else {
            setGuestActive(JSON.parse(localStorage.getItem("guestActive")));
        }
    },[]);
    



    return (
        <div className={styles.container}>
            
            {clientActive
                ?   <ClientHero 
                        setClientActive={setClientActive}/>
                :   guestActive
                        ?   <GuestHero 
                                setGuestActive={setGuestActive}/>
                        :   bankMember 
                                ?   <ClientMember
                                        setClientActive={setClientActive} 
                                        setBankMember={setBankMember}/>
                                :   guestMember
                                        ?   <GuestMember
                                                setGuestActive={setGuestActive}
                                                setGuestMember={setGuestMember}/>
                                        :   <NewGuestMember
                                                setGuestActive={setGuestActive}/>}

        </div>
    )
}

export default Client
