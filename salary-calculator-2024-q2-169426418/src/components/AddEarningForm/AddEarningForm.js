import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEarning } from "../../redux/salarySlice";

const AddEarningForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [epfApplicable, setEpfApplicable] = useState(false);
  const dispatch = useDispatch();

  const handleAddEarning = () => {
    dispatch(
      addEarning({
        id: Date.now(),
        name,
        amount: Number(amount),
        epfApplicable,
      })
    );
    onClose();
  };

  return (
    <div className="add-earning-form">
      <h3>Add New Earning</h3>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        EPF/ETF Applicable:
        <input
          type="checkbox"
          checked={epfApplicable}
          onChange={(e) => setEpfApplicable(e.target.checked)}
        />
      </label>
      <button onClick={handleAddEarning}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddEarningForm;
