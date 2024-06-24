import "./SalarySummary.css";
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
    <div className="salary-summary">
      <h4 className="salary-summary-title heading-4">Your salary</h4>
      <table className="salary-summary-table">
        <thead className="salary-summary-table-head">
          <tr className="salary-summary-table-row">
            <th className="salary-summary-table-item body-default-semibold">
              Items
            </th>
            <th className="salary-summary-table-amount body-default-semibold">
              Amounts
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="salary-summary-table-row">
            <td className="table-raw-items body-large">Basic Salary</td>
            <td className="table-row-amounts body-large">
              {basicSalary.toFixed(2)}
            </td>
          </tr>
          <tr className="salary-summary-table-row">
            <td className="table-raw-items body-large">Gross Earnings</td>
            <td className="table-row-amounts body-large">
              {totalEarnings.toFixed(2)}
            </td>
          </tr>
          <tr className="salary-summary-table-row">
            <td className="table-raw-items body-large">Gross Deductions</td>
            <td className="table-row-amounts body-large">
              {grossDeduction.toFixed(2)}
            </td>
          </tr>
          <tr className="salary-summary-table-row">
            <td className="table-raw-items body-large">Employee EPF (8%)</td>
            <td className="table-row-amounts body-large">
              {employeeEPF.toFixed(2)}
            </td>
          </tr>
          <tr className="salary-summary-table-row">
            <td className="table-raw-items body-large">APIT</td>
            <td className="table-row-amounts body-large">{APIT.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="net-salary">
        <p className="net-sapary-title body-large-semibold">
          <span className="net-salary-title-name">Net Salary(Take Home) </span>
          <span className="net-salary-title-amount">
            {" "}
            {netSalary.toFixed(2)}
          </span>
        </p>
      </div>
      <div className="contribution">
        <span className="contribution-title body-default-semibold">
          <strong className="contribution-title-name">
            Contribution from Employer
          </strong>
        </span>
        <table>
          <tbody>
            <tr className="etf-epf">
              <td className="etf-epf-title body-large">Employer EPF (12%)</td>
              <td className="etf-epf-amount body-large">
                {employerEPF.toFixed(2)}
              </td>
            </tr>
            <tr className="etf-epf">
              <td className="etf-epf-title body-large">Employer ETF (3%)</td>
              <td className="etf-epf-amount body-large">
                {employerETF.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cost-to-company">
        <div className=" ">
          <p className="">
            <strong> CTC(Cost To Company) </strong>
            <span className="cost-to-company-amount">
              {costToCompany.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalarySummary;
