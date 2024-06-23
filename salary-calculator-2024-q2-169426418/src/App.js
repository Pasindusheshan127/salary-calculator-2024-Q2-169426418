import "./App.css";
import DeductionsList from "./components/DeductionsList/DeductionsList";
import EarningsList from "./components/EarningsList/EarningsList";
import SalaryForm from "./components/SalaryForm/SalaryForm";

function App() {
  return (
    <div className="App">
      <SalaryForm />
      <EarningsList />
      <DeductionsList />
    </div>
  );
}

export default App;
