import React from 'react'

const GuestMember = (props) => {

    // Destructured Components
    const { setGuestActive, setGuestMember } = props;
    console.log(setGuestActive);

    // Event Handlers
    const handleNewGuestMember = () => {
        setGuestMember(false);
    }

    return (
        <div>
            <h1>You are already a Guest Member</h1>

            <span>Not a Guest Member?</span>
            <button onClick={handleNewGuestMember}>Create Guest Account</button>
        </div>
    )
}

export default GuestMember
