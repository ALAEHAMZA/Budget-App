import React ,{useState,useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './InputExpense.css';

const InputExpense=()=>{
    const {dispatch} = useContext(AppContext);
    const {name,setName} = useState('');
    const {categorie,setCategorie} = useState('');
    const {date,setDate} = useState('');
    const {price,setPrice} = useState('');

    const addItem=(e)=>{
        e.preventDefault();
        const expense ={
            name: name,
            categorie: categorie,
            date: date,
            price:price
        }
        
        dispatch({
            type:'add',
            payload: expense,
        });
    }
    return(
            <form className="addForm" onSubmit={addItem}>
                <fieldset className="addExp">
                    <legend><h2>Add Expenses</h2></legend>
                    <input 
                        type="text"  
                        placeholder="Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <input 
                        type="text"  
                        placeholder="Categorie"
                        value={categorie}
                        onChange={(e)=>setCategorie(e.target.value)}
                    />
                    <input 
                        type="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                    />
                    <input 
                        type="number"  
                        placeholder="Price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />   
                    <button className="btnAdd" type="submit">Add</button>
                </fieldset>                                 
            </form>
    )
}

export default InputExpense;