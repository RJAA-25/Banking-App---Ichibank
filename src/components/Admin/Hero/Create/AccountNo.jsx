import React,{useState} from 'react'

const AccountNo = (props) => {

    // Destructured Properties
    const {onGenerate} = props;

    // States
    const [accountNo, setAccountNo] = useState("")

    // Event Handlers
    const onBtnClick = () => {
        let randomNum = Math.floor(Math.random() * 9000 + 1000 ) ;
        let numberGenerated = "2021-" + randomNum;
        setAccountNo(numberGenerated);
        onGenerate(numberGenerated);
    };

    return (
        <label>
            Account No
            <input 
                type="text"  
                value={accountNo}
                disabled/>
            <button type="button" onClick={onBtnClick}>Generate</button>
        </label>
    )
}

export default AccountNo
