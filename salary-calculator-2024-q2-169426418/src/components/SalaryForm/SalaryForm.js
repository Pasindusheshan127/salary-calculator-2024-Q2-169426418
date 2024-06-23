import { useDispatch, useSelector } from "react-redux";
import {
  setBasicSalary,
  addEarning,
  addDeduction,
  reset,
} from "../../redux/salarySlice";
import "./SalaryForm.css";

const SalaryForm = () => {
  return (
    <div>
      <div className="salary-calculator">
        <h2>Calculate Your Salary</h2>
        <div className="basic-salary-form">
          <label className="basic-salary-lable">
            Basic Salary:
            <input
              className="basic-salary-input"
              type="number"
              value=""
              onChange=""
            />
          </label>
        </div>
        <div className="earning-form">
          <h3 className="earning-title">Earnings</h3>
          <p className="earning-desc">
            Allowance,Fiexed Allowance, Bouns and etc .
          </p>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Amount:
            <input type="number" />
          </label>
          <label>
            EPF/ETF:
            <input type="checkbox" />
          </label>
        </div>
        <button className="Add-allowance-button">Add New Allowance</button>
        <hr />
        <div className="deduction-form">
          <h3 className="deducation-title">Deductions</h3>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Amount:
            <input type="number" />
          </label>
          <button className="deducation-button">Add New Deduction</button>
        </div>
        <button className="reset-button">Reset</button>
      </div>
    </div>
  );
};

export default SalaryForm;
