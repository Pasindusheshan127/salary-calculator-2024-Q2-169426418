import { useSelector, useDispatch } from "react-redux";
import { updateEarning, deleteEarning } from "../../redux/salarySlice";
import { useState } from "react";
const EarningsList = () => {
  const dispatch = useDispatch();
  const earnings = useSelector((state) => state.salary.earnings);
  const [editingEarning, setEditingEarning] = useState(null);

  const handleUpdateEarning = (id) => {
    dispatch(updateEarning({ id, ...editingEarning }));
    setEditingEarning(null);
  };
  const handleDeleteEarning = (id) => {
    dispatch(deleteEarning(id));
  };
  const startEditing = (earning) => {
    setEditingEarning({ ...earning });
  };
  return (
    <div>
      <h2>Earnings</h2>
      <ul>
        {earnings.map((earning) => (
          <li key={earning.id}>
            {editingEarning && editingEarning.id === earning.id ? (
              <div className="edit-earning-form">
                <input
                  type="text"
                  name="name"
                  value={editingEarning.name}
                  onChange={(e) =>
                    setEditingEarning({
                      ...editingEarning,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="number"
                  name="amount"
                  value={editingEarning.amount}
                  onChange={(e) =>
                    setEditingEarning({
                      ...editingEarning,
                      amount: e.target.value,
                    })
                  }
                />
                <label>
                  EPF/ETF Applicable
                  <input
                    type="checkbox"
                    name="epfApplicable"
                    checked={editingEarning.epfApplicable}
                    onChange={(e) =>
                      setEditingEarning({
                        ...editingEarning,
                        epfApplicable: e.target.checked,
                      })
                    }
                  />
                </label>
                <button onClick={() => handleUpdateEarning(earning.id)}>
                  Save
                </button>
                <button onClick={() => setEditingEarning(null)}>Cancel</button>
              </div>
            ) : (
              <div className="earning-item">
                {earning.name}: {earning.amount} (EPF:{" "}
                {earning.epfApplicable.toString()})
                <button onClick={() => startEditing(earning)}>Update</button>
                <button onClick={() => handleDeleteEarning(earning.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarningsList;
