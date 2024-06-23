import { useSelector, useDispatch } from "react-redux";
import { updateEarning, deleteEarning } from "../../redux/salarySlice";
import { useState } from "react";

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
      <ul>
        {earnings.map((earning) => (
          <li key={earning.id}>
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
                  EPF/ETF Applicable
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
                {earning.name}: {earning.amount} (EPF:{" "}
                {earning.epfEtf?.toString()})
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
