import React, {useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './Budget.css'

const Budget=() => {
    const {budget} =useContext(AppContext);
    return (
        <div className="budget">
            Your budget is {budget}  MAD 
        </div>
    )
}

export default Budget;