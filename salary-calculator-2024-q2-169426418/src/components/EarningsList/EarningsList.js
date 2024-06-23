const EarningsList = () => {
  return (
    <div>
      <h2>Earnings</h2>
      <input type="text" name="name" placeholder="Earning Name" />
      <input type="number" name="amount" placeholder="Amount" />
      <label>
        EPF/ETF Applicable
        <input type="checkbox" name="epfApplicable" />
      </label>
      <button>Add Earning</button>
      <ul>
        {/* {earnings.map((earn, index) => (
          <li key={index}>
              {earn.name}: {earn.amount} (EPF: {earn.epfApplicable.toString()})
              <button onClick={() => handleRemoveEarning(index)}>Remove</button>
          </li>
      ))} */}
      </ul>
    </div>
  );
};

export default EarningsList;
