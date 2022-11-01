import React ,{useState,useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './InputExpense.css';

const InputExpense=()=>{
    const {dispatch} = useContext(AppContext);
    const [name,setName] = useState('');
    const [categorie,setCategorie] = useState('');
    const [date,setDate] = useState('');
    const [price,setPrice] = useState('');

    const addItem=(e)=>{
        e.preventDefault();
        const expense ={
            name: name,
            categorie: categorie,
            date: date,
            price:parseInt(price)
        }
        dispatch({
            type:'add',
            payload: expense,
        });
        setName('');
        setCategorie('');
        setDate('');
        setPrice('');

    }
    return(
            <form className="addForm" onSubmit={addItem}>
                <fieldset className="addExp">
                    <legend><h2>Add Expenses</h2></legend>
                    <input 
                        required='required'
                        type="text"  
                        placeholder="Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <select required value={categorie} onChange={(e)=>setCategorie(e.target.value)}>
                            <option value="" disabled selected hidden>Categorie</option>
                            <option value="Alimentation">Alimentation</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Cadeau">Cadeau</option>
                            <option value="hairdressing">Hairdressing</option>
                            <option value="Internet">Internet</option>
                            <option value="Telephone">Telephone</option>
                            <option value="Education">Education</option>
                            <option value="Sport">Sport</option>
                            <option value="Transport">Transport</option>
                            <option value="Services">Services</option>
                            <option value="Restauration">Restauration</option>
                            <option value="Autre...">Autre...</option>
                    </select>

                    <input 
                        required='required'
                        type="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                    />
                    <input 
                        required='required'
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