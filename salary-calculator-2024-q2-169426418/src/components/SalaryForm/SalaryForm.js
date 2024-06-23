import { useDispatch, useSelector } from "react-redux";
import {
  setBasicSalary,
  addEarning,
  addDeduction,
  reset,
} from "../../redux/salarySlice";
import "./SalaryForm.css";
import { useState } from "react";
import AddDeductionForm from "../AddDeductionForm/AddDeductionForm";
import AddEarningForm from "../AddEarningForm/AddEarningForm";

const SalaryForm = () => {
  const [showAddDeductionForm, setShowAddDeductionForm] = useState(false);
  const [showAddEarningForm, setShowAddEarningForm] = useState(false);
  const dispatch = useDispatch();
  const basicSalary = useSelector((state) => state.salary.basicSalary);
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
              value={basicSalary}
              onChange={(e) => dispatch(setBasicSalary(Number(e.target.value)))}
            />
          </label>
        </div>
        <div className="earning-form">
          <h3 className="earning-title">Earnings</h3>
          <p className="earning-desc">
            Allowance, Fixed Allowance, Bonus, etc.
          </p>
        </div>
        <button
          className="Add-allowance-button"
          onClick={() => setShowAddEarningForm(true)}
        >
          Add New Allowance
        </button>
        <hr />
        <div className="deduction-form">
          <h3 className="deducation-title">Deductions</h3>
          <button
            className="deducation-button"
            onClick={() => setShowAddDeductionForm(true)}
          >
            Add New Deduction
          </button>
        </div>
        <button className="reset-button" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
      {showAddDeductionForm && (
        <div className="popup">
          <AddDeductionForm onClose={() => setShowAddDeductionForm(false)} />
        </div>
      )}
      {showAddEarningForm && (
        <div className="popup">
          <AddEarningForm onClose={() => setShowAddEarningForm(false)} />
        </div>
      )}
    </div>
  );
};

export default SalaryForm;
