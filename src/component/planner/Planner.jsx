import react , {Component} from 'react';
import AppProvider from '../../context/AppContext';
import Budget from '../budget/Budget';
import Expenses from '../expenses/Expenses';
import Reste from '../reste/Reste';
import './Planner.css';

class Planner extends Component{
    render(){
        return(
                <fieldset className='planner'>
                    <legend><h2>Your budget info</h2></legend>
                    <Budget/>
                    <Expenses/>
                    <Reste/>
                </fieldset>
        );
    }
};

export default Planner;