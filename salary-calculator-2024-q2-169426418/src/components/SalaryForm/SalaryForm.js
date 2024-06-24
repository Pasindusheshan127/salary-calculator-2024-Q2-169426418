import { useDispatch, useSelector } from "react-redux";
import { setBasicSalary, reset } from "../../redux/salarySlice";
import "./SalaryForm.css";
import { useState } from "react";
import AddDeductionForm from "../AddDeductionForm/AddDeductionForm";
import AddEarningForm from "../AddEarningForm/AddEarningForm";
import EarningsList from "../EarningsList/EarningsList";
import DeductionsList from "../DeductionsList/DeductionsList";

const SalaryForm = () => {
  const [showAddDeductionForm, setShowAddDeductionForm] = useState(false);
  const [showAddEarningForm, setShowAddEarningForm] = useState(false);
  const dispatch = useDispatch();
  const basicSalary = useSelector((state) => state.salary.basicSalary);
  return (
    <div>
      <div
        className={`salary-calculator ${
          showAddDeductionForm || showAddEarningForm ? "background-dimmed" : ""
        }`}
      >
        <h4 className="salary-calculator-title">Calculate Your Salary</h4>
        <div className="basic-salary-form">
          <label className="basic-salary-lable body-large-semibold">
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
          <h3 className="earning-title body-large-semibold">Earnings</h3>
          <p className="earning-desc body-small">
            Allowance, Fixed Allowance, Bonus, etc.
          </p>
        </div>
        <div className="earning-list">
          <EarningsList />
        </div>

        <div
          className="add-allowance-button"
          onClick={() => setShowAddEarningForm(true)}
        >
          <img
            className="add-allowance-icon"
            src="assets/icons/add.png"
            alt=""
          />
          <span className="add-allowance-text button-text">
            Add New Allowance
          </span>
        </div>
        <hr className="divider-hr" />
        <div className="deduction-form">
          <h3 className="deducation-title body-large-semibold">Deductions</h3>
          <p className="deducation-desc body-small">
            Salary Advance, Loan Deduction and all.
          </p>
        </div>
        <div className="deduction-list">
          <DeductionsList />
        </div>

        <div className="deduction-button-form">
          <div className="deduction-button-frame">
            <div
              className="add-deduction-button"
              onClick={() => setShowAddDeductionForm(true)}
            >
              <img
                className="add-allowance-icon"
                src="assets/icons/add.png"
                alt=""
              />
              <span className="add-allowance-text button-text">
                Add New Deduction
              </span>
            </div>
          </div>
        </div>
        <div className="reset-button-frame " onClick={() => dispatch(reset())}>
          <img className="reset-button" src="assets/icons/reset.png" alt="" />
          <span className="reset-button-text button-text">Reset</span>
        </div>
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
