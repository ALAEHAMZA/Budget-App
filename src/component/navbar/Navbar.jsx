import React ,{Component} from "react";
import InputBudget from '../inputBudget/InputBudget'
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <h1>Budget App</h1>
                <InputBudget/>
            </div>
        );
    }
}

export default Navbar ;