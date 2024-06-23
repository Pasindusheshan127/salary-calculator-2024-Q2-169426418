import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicSalary: 125000.0,
  earnings: [
    { id: 1, name: "Bonus", amount: 10000, epfEtf: true },
    { id: 2, name: "Allowance", amount: 5000, epfEtf: false },
  ],
  deductions: [
    { id: 1, name: "Loan", amount: 2000 },
    { id: 2, name: "Insurance", amount: 1500 },
  ],
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    setBasicSalary: (state, action) => {
      state.basicSalary = action.payload;
    },
    addEarning: (state, action) => {
      state.earnings.push(action.payload);
    },
    updateEarning: (state, action) => {
      const { id, name, amount, epfEtf } = action.payload;
      const earning = state.earnings.find((e) => e.id === id);
      if (earning) {
        earning.name = name;
        earning.amount = amount;
        earning.epfEtf = epfEtf;
      }
    },
    deleteEarning: (state, action) => {
      state.earnings = state.earnings.filter((e) => e.id !== action.payload);
    },
    addDeduction: (state, action) => {
      state.deductions.push(action.payload);
    },
    updateDeduction: (state, action) => {
      const { id, amount } = action.payload;
      const deduction = state.deductions.find((d) => d.id === id);
      if (deduction) {
        deduction.amount = amount;
      }
    },
    deleteDeduction: (state, action) => {
      state.deductions = state.deductions.filter(
        (d) => d.id !== action.payload
      );
    },
    reset: (state) => {
      state.basicSalary = 0;
      state.earnings = [];
      state.deductions = [];
    },
  },
});

export const {
  setBasicSalary,
  addEarning,
  updateEarning,
  deleteEarning,
  addDeduction,
  updateDeduction,
  deleteDeduction,
  reset,
} = salarySlice.actions;

export default salarySlice.reducer;
