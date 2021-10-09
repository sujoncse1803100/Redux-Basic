import './App.css';
import PatientManagement from './components/PatientManagement/PatientManagement';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount />
      <PatientManagement />
    </div>
  );
}

export default App;
