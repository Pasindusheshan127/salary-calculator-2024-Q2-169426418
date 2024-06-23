const SalarySummary = () => {
  return (
    <div className="salary-breakdown">
      <h2>Your Salary</h2>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* {salaryData.map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.amount}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <h3>Contribution from the Employer</h3>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* {salaryData.slice(6).map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.amount}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default SalarySummary;
