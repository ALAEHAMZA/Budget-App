import React ,{useContext} from "react";
import './Liste.css';
import { AppContext } from "../../context/AppContext";

const Liste=()=>{
    const {expenses} =useContext(AppContext);
    const {dispatch}=useContext(AppContext);
    const deleteItem =(props)=>{
        dispatch({
            type:'delete',
            payload: props.name
        })
    }

    return(
        <div className="liste">
            <h2>Expenses</h2>
            <table className="table">
                <thead>
                    <td>Name</td>
                    <td>Categorie</td>
                    <td>Date</td>
                    <td>Price</td>
                    <td>Action</td>
                </thead>
                    
                    {expenses.map((item)=>(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.categorie}</td>
                            <td>{item.date}</td>
                            <td>{item.price}</td>
                            <td><button className="btnDelete" onClick={deleteItem}>Delete</button></td>
                        </tr>
                    ))}
            </table>
        </div> 
    );
}

export default Liste ;