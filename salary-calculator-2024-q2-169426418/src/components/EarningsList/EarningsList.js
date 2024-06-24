import { useSelector, useDispatch } from "react-redux";
import { updateEarning, deleteEarning } from "../../redux/salarySlice";
import { useState } from "react";
import "./EarningsList.css";

const EarningsList = () => {
  const dispatch = useDispatch();
  const earnings = useSelector((state) => state.salary.earnings);
  const [editingEarning, setEditingEarning] = useState({
    id: null,
    name: "",
    amount: 0,
    epfEtf: false,
  });

  const handleUpdateEarning = () => {
    dispatch(
      updateEarning({
        id: editingEarning.id,
        name: editingEarning.name,
        amount: editingEarning.amount,
        epfEtf: editingEarning.epfEtf,
      })
    );
    setEditingEarning(null);
  };

  const handleDeleteEarning = (id) => {
    dispatch(deleteEarning(id));
  };

  const startEditing = (earning) => {
    setEditingEarning({ ...earning });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEditingEarning((prevEditingEarning) => ({
      ...prevEditingEarning,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log("Editing Earning:", {
      ...editingEarning,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <ul className="earnings-list">
        {earnings.map((earning) => (
          <li className="earning-item" key={earning.id}>
            {editingEarning && editingEarning.id === earning.id ? (
              <div className="edit-earning-form">
                <input
                  type="text"
                  name="name"
                  value={editingEarning.name}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="amount"
                  value={editingEarning.amount}
                  onChange={handleInputChange}
                />
                <label>
                  EPF/ETF
                  <input
                    type="checkbox"
                    name="epfEtf"
                    checked={editingEarning.epfEtf}
                    onChange={handleInputChange}
                  />
                </label>
                <button onClick={handleUpdateEarning}>Save</button>
                <button onClick={() => setEditingEarning(null)}>Cancel</button>
              </div>
            ) : (
              <div className="earning-item">
                <span className="eraning-item-name body-large">
                  {earning.name}:
                </span>
                <span className="eraning-item-amount body-large">
                  {earning.amount}
                </span>
                {earning.epfEtf ? (
                  <label className="epf-etf-label">
                    <img
                      className="epf-etf-label-icon"
                      src="/assets/icons/checked.png"
                      alt="EPF/ETF"
                    />
                    <span className="epf-etf-label-text">EPF/ETF</span>
                  </label>
                ) : (
                  ""
                )}
                <div
                  onClick={() => startEditing(earning)}
                  className="update-button"
                >
                  <img src="/assets/icons/edit.png" alt="Update" />
                </div>
                <div
                  className="delete-button"
                  onClick={() => handleDeleteEarning(earning.id)}
                >
                  <img src="/assets/icons/clear.png" alt="Delete" />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarningsList;
