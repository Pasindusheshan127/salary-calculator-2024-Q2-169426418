import React from "react";
import { useSelector } from "react-redux";

const calculateTax = (grossEarnings) => {
  let taxPercentage = 0;
  let taxConstant = 0;

  if (grossEarnings <= 100000) {
    taxPercentage = 0;
    taxConstant = 0;
  } else if (grossEarnings <= 141667) {
    taxPercentage = 0.06;
    taxConstant = 6000;
  } else if (grossEarnings <= 183333) {
    taxPercentage = 0.12;
    taxConstant = 14500;
  } else if (grossEarnings <= 225000) {
    taxPercentage = 0.18;
    taxConstant = 25500;
  } else if (grossEarnings <= 266667) {
    taxPercentage = 0.24;
    taxConstant = 39000;
  } else if (grossEarnings <= 308333) {
    taxPercentage = 0.3;
    taxConstant = 55000;
  } else {
    taxPercentage = 0.36;
    taxConstant = 73500;
  }

  return { taxPercentage, taxConstant };
};

const SalarySummary = () => {
  const basicSalary = useSelector((state) => state.salary.basicSalary);
  const earnings = useSelector((state) => state.salary.earnings);
  const deductions = useSelector((state) => state.salary.deductions);

  const totalEarnings =
    basicSalary +
    earnings.reduce((sum, earn) => sum + parseFloat(earn.amount), 0);
  const totalEarningsForEPF =
    basicSalary +
    earnings
      .filter((earn) => earn.epfApplicable)
      .reduce((sum, earn) => sum + parseFloat(earn.amount), 0);
  const grossDeduction = deductions.reduce(
    (sum, deduct) => sum + parseFloat(deduct.amount),
    0
  );
  const grossEarnings = totalEarnings - grossDeduction;
  const grossSalaryForEPF = totalEarningsForEPF - grossDeduction;
  const employeeEPF = grossSalaryForEPF * 0.08;

  const { taxPercentage, taxConstant } = calculateTax(grossEarnings);
  const APIT = grossEarnings * taxPercentage - taxConstant;
  const netSalary = grossEarnings - employeeEPF - APIT;
  const employerEPF = grossSalaryForEPF * 0.12;
  const employerETF = grossSalaryForEPF * 0.03;
  const costToCompany = grossEarnings + employerEPF + employerETF;

  return (
    <div>
      <h2>Salary Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Amounts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic Salary</td>
            <td>{basicSalary.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Gross Earnings</td>
            <td>{totalEarnings.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Gross Deductions</td>
            <td>{grossDeduction.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Employee EPF (8%)</td>
            <td>{employeeEPF.toFixed(2)}</td>
          </tr>
          <tr>
            <td>APIT</td>
            <td>{APIT.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Net Salary:</strong> {netSalary.toFixed(2)}
      </p>
      <span>
        <strong>Contribution from Employer:</strong>
      </span>
      <table>
        <tbody>
          <tr>
            <td>Employer EPF (12%)</td>
            <td>{employerEPF.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Employer ETF (3%)</td>
            <td>{employerETF.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Cost To Company (CTC):</strong> {costToCompany.toFixed(2)}
      </p>
    </div>
  );
};

export default SalarySummary;
