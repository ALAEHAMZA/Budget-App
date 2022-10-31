import './App.css';
import Navbar from './component/navbar/Navbar';
import Planner from './component/planner/Planner';
import Liste from './component/liste/Liste';
import AppProvider from './context/AppContext';
import InputExpense from './component/inputExpense/InputExpense';
import Graphe from './component/Graphe';




function App() {

  return (
    <AppProvider>

      <Navbar/>
      <Planner/>
      <InputExpense/>
      <Liste/>
      <Graphe/>
    </AppProvider>
  );
}

export default App;
