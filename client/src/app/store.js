import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countriesSlice from '../features/countries/state/slice';

const appReducer = combineReducers({
    countries: countriesSlice,
});

const store = configureStore({
    reducer: appReducer
});

export default store;
