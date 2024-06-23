const DeductionsList = () => {
  return (
    <div>
      <h2>Deductions</h2>
      <input
        type="text"
        name="name"
        placeholder="Deduction Name"
        // value={deduction.name}
        // onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        // value={deduction.amount}
        // onChange={handleChange}
      />
      <button>Add Deduction</button>
      <ul>
        {/* {deductions.map((deduct, index) => (
          <li key={index}>
            {deduct.name}: {deduct.amount}
            <button onClick={() => handleRemoveDeduction(index)}>Remove</button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default DeductionsList;
