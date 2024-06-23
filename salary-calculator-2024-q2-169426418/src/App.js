import "./App.css";
import EarningsList from "./components/EarningsList/EarningsList";
import SalaryForm from "./components/SalaryForm/SalaryForm";

function App() {
  return (
    <div className="App">
      <SalaryForm />
      <EarningsList />
    </div>
  );
}

export default App;
