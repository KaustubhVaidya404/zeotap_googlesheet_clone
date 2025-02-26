import { configureStore } from '@reduxjs/toolkit';
import formulaReducer from './slices/formulaslice';
import dataQualityReducer from './slices/dataqualityslice';

const store = configureStore({
  reducer: {
    formula: formulaReducer,
    dataQuality: dataQualityReducer,
  },
});

export default store;
