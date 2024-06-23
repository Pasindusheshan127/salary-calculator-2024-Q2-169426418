import "./App.css";
import DeductionsList from "./components/DeductionsList/DeductionsList";
import EarningsList from "./components/EarningsList/EarningsList";
import SalaryForm from "./components/SalaryForm/SalaryForm";
import SalarySummary from "./components/SalarySummary/SalarySummary";

function App() {
  return (
    <div className="App">
      <SalaryForm />
      <EarningsList />
      <DeductionsList />
      <SalarySummary />
    </div>
  );
}

export default App;
