import { useSelector, useDispatch } from "react-redux";
import { updateDeduction, deleteDeduction } from "../../redux/salarySlice";
import { useState } from "react";
import "./DeductionsList.css";

const DeductionsList = () => {
  const dispatch = useDispatch();
  const deductions = useSelector((state) => state.salary.deductions);

  const [isEditing, setIsEditing] = useState(null);
  const [editAmount, setEditAmount] = useState(0);

  const handleUpdateClick = (deduction) => {
    setIsEditing(deduction.id);
    setEditAmount(deduction.amount);
  };
  const handleDeleteClick = (id) => {
    dispatch(deleteDeduction(id));
  };

  const handleSaveClick = (id) => {
    dispatch(updateDeduction({ id, amount: editAmount }));
    setIsEditing(null);
  };

  return (
    <div className="deductions-list">
      <ul className="deduction-items">
        {deductions.map((deduction) => (
          <li key={deduction.id} className="deduction-item">
            <span className="deduction-name body-large">{deduction.name}:</span>
            {isEditing === deduction.id ? (
              <input
                type="number"
                value={editAmount}
                onChange={(e) => setEditAmount(Number(e.target.value))}
                className="deduction-input"
              />
            ) : (
              <span className="deduction-amount body-large">
                {deduction.amount}
              </span>
            )}
            {isEditing === deduction.id ? (
              <button
                onClick={() => handleSaveClick(deduction.id)}
                className="save-button"
              >
                Save
              </button>
            ) : (
              <div
                onClick={() => handleUpdateClick(deduction)}
                className="update-button"
              >
                <img src="/assets/icons/edit.png" alt="Update" />
              </div>
            )}
            <div
              className="delete-button"
              onClick={() => handleDeleteClick(deduction.id)}
            >
              <img src="/assets/icons/clear.png" alt="Delete" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeductionsList;
