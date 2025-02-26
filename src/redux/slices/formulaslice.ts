import { createSlice } from '@reduxjs/toolkit';

const formulaSlice = createSlice({
  name: 'formula',
  initialState: {
    currentFormula: '',
  },
  reducers: {
    setFormula: (state, action) => {
      state.currentFormula = action.payload;
    },
    clearFormula: (state) => {
      state.currentFormula = '';
    },
  },
});

export const { setFormula, clearFormula } = formulaSlice.actions;
export default formulaSlice.reducer;
