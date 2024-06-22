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
        <div className="basic-salary">
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
        <div className="earning">
          <h3 className="earning-title">Earnings</h3>
          <p className="earning-desc">
            Allowance,Fiexed Allowance, Bouns and etc .
          </p>
        </div>
        <button className="Add-allowance-button">Add New Allowance</button>
        <div className="deduction">
          <h3 className="deducation-title">Deductions</h3>

          <button className="deducation-button">Add New Deduction</button>
        </div>
        <button className="reset-button">Reset</button>
      </div>
    </div>
  );
};

export default SalaryForm;
