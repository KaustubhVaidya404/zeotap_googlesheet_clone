import { createSlice } from '@reduxjs/toolkit';

const dataQualitySlice = createSlice({
  name: 'dataQuality',
  initialState: {
    qualityOperation: '',
  },
  reducers: {
    setQualityOperation: (state, action) => {
      state.qualityOperation = action.payload;
    },
    clearQualityOperation: (state) => {
      state.qualityOperation = '';
    },
  },
});

export const { setQualityOperation, clearQualityOperation } = dataQualitySlice.actions;
export default dataQualitySlice.reducer;
