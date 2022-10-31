import React ,{useContext} from "react";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import './InputBudget.css'


const InputBudget=()=>{
    const {dispatch}=useContext(AppContext);
    const [budget,setBudget]=useState('');

    const enterBudget=(e)=>{
        e.preventDefault();
        const newBudget=(budget);

        dispatch({
            type:'setBudget',
            payload:(newBudget)
        });
    };

        return (
            <div className="inputbudget">
                <form onSubmit={enterBudget}>
                    <input 
                    type="number"
                    placeholder="Your budget" 
                    value={budget}
                    onChange={(e)=>setBudget(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    
}

export default InputBudget ;