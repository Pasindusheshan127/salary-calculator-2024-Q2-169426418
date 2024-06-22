import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
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
      const { id, amount, epfEtf } = action.payload;
      const earning = state.earnings.find((e) => e.id === id);
      if (earning) {
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
