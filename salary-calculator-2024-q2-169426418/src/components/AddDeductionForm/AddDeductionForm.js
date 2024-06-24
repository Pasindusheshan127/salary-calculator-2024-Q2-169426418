import { addDeduction } from "../../redux/salarySlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./AddDeductionForm.css";

const AddDeductionForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddDeduction = () => {
    console.log("Add button clicked");
    dispatch(
      addDeduction({
        id: Date.now(),
        name,
        amount: Number(amount),
      })
    );
    onClose();
  };

  return (
    <div className="add-deduction-form">
      <div className="header">
        <div className="header-title">
          <h3 className="header-title-text">Add New Deduction</h3>
        </div>
      </div>
      <hr className="divider" />
      <div className="deduction-name">
        <label className="deduction-name-lable">
          <div className="deduction-name-lable-text b-default-semibold">
            Deduction Name
          </div>
          <div className="deduction-name-lable-input">
            <input
              className="deduction-name-input-text b-default"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="deduction-amount">
        <label className="deduction-amount-lable">
          <div className="deduction-amount-lable-text b-default-semibold">
            Amount
          </div>
          <div className="deduction-amount-lable-input">
            <input
              className="deduction-amount-input-text b-default"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </label>
      </div>

      <div className="footer">
        <div className="cancle-button">
          <button className="cancle-button-text button-text" onClick={onClose}>
            Cancel
          </button>
        </div>
        <div className="add-button">
          <img src="./assets/icons/add.png" alt="" />
          <button
            className="add-button-text button-text"
            onClick={handleAddDeduction}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDeductionForm;
