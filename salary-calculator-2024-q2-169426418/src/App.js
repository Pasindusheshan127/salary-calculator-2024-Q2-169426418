import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import SalaryForm from "./components/SalaryForm/SalaryForm";
import SalarySummary from "./components/SalarySummary/SalarySummary";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SalaryForm />
        <SalarySummary />
      </div>
    </Provider>
  );
}

export default App;
