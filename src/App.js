import './App.css';
import Navbar from './component/navbar/Navbar';
import Planner from './component/planner/Planner';
import Liste from './component/liste/Liste';
import AppProvider from './context/AppContext';
import InputExpense from './component/inputExpense/InputExpense';
import {Bar} from "react-chartjs-2";
import { AppContext } from './context/AppContext';
import { useContext } from 'react';




function App() {

  //const {expenses} =useContext(AppContext);
  //const data ={
    //labels:
      //{expenses.map((item)=>{item.name})},
    //datasets :[
      //{
        //label : "Expenses",
        //data : 
          //{expenses.map((item)=>{item.price})}
      //}
    //],
  //}

  return (
    <AppProvider>

      <Navbar/>
      <Planner/>
      <InputExpense/>
      <Liste/>

    </AppProvider>
  );
}

export default App;
