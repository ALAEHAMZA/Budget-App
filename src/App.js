import './App.css';
import Navbar from './component/navbar/Navbar';
import Planner from './component/planner/Planner';
import Liste from './component/liste/Liste';
import AppProvider from './context/AppContext';
import InputExpense from './component/inputExpense/InputExpense';
import Graphe from './component/Graphe/Graphe';




function App() {

  return (
    <AppProvider>

      <Navbar/>

    <div className='container'>
      
      <div className='left'>
          <Planner/>
          <InputExpense/>
        </div>

        <div className='right'>
          <Liste/>
          <Graphe/>
        </div>

    </div>
    </AppProvider>
  );
}

export default App;
