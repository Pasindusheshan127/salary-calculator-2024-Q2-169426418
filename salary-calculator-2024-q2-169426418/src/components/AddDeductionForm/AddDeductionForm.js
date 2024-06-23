import { addDeduction } from "../../redux/salarySlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddDeductionForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddDeduction = () => {
    dispatch(addDeduction({ id: Date.now(), name, amount: Number(amount) }));
    onClose();
  };

  return (
    <div className="add-deduction-form">
      <h3>Add New Deduction</h3>
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
      <button onClick={handleAddDeduction}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddDeductionForm;
