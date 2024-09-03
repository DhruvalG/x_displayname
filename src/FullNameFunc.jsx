import { useState } from "react";

function FullNameFunc() {
    let [FName, setFName] = useState('');
    let [LName, setLName] = useState('');
    let [FLName, setFLName] = useState('');
    let handleFName = (e) => {
        setFName(e.target.value);
    };
    let handleLName = (e) => {
        setLName(e.target.value);
    };
    let submitHandler = (e) => {
        e.preventDefault();
        if(!FName || !LName){
            setFLName('');
            return ;
        }
        let resultName = FName + ' ' + LName;
        setFLName(resultName);
    };
    return (
        <div>
            <h1>
                Full Name Display
            </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <p>First Name:</p>
                    <input required="true" type="text" value={FName} onChange={(e) => handleFName(e)} />
                </div>
                <div>
                    <p>Last Name:</p>
                    <input required="true" type="text" value={LName} onChange={(e) => handleLName(e)} />
                </div>
                <button type="submit" >Submit</button>
            </form>
            {FLName && <div>Full Name: {FLName}</div>}
        </div>
    ) 
}
export default FullNameFunc;