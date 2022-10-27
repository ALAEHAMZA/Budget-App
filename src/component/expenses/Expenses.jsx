import React, {useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './Expenses.css'

const Expenses=() => {
    const{expenses}=useContext(AppContext);
    const expense = expenses.reduce((total,item)=>{
        return(total+=item.price)
    },0);
    return (
        <div className="expenses"> 
            You spent {expense} MAD 
        </div>
    )
}

export default Expenses;