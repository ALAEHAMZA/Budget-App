import React, {useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './Reste.css'

const Reste=() => {
    const {expenses , budget}=useContext(AppContext);
    const expense = expenses.reduce((total,item)=>{
        return(total+=item.price)
    },0);
    const reste = budget-expense;
    return (
        <div className="reste"> 
            You still have {reste}  MAD 
        </div>
    )
}

export default Reste;