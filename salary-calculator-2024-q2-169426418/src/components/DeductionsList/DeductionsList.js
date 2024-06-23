import { useSelector, useDispatch } from "react-redux";
import { updateDeduction, deleteDeduction } from "../../redux/salarySlice";
import { useState } from "react";

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
            <span className="deduction-name">{deduction.name}: </span>
            {isEditing === deduction.id ? (
              <input
                type="number"
                value={editAmount}
                onChange={(e) => setEditAmount(Number(e.target.value))}
                className="deduction-input"
              />
            ) : (
              <span className="deduction-amount">{deduction.amount}</span>
            )}
            {isEditing === deduction.id ? (
              <button
                onClick={() => handleSaveClick(deduction.id)}
                className="save-button"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleUpdateClick(deduction)}
                className="update-button"
              >
                Update
              </button>
            )}
            <button
              onClick={() => handleDeleteClick(deduction.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeductionsList;
