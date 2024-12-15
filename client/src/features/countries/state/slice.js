import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const COUNTRIES_URL = `${import.meta.env.VITE_API_URL}/countries`;

const initialState = {
    countries: [],
    status: 'idle',
    error: null,
    nightMode: false,
    region: '',
    search: ''
};

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
    try {
        const res = await fetch(COUNTRIES_URL);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        toggleNightMode: (state) => {
            state.nightMode = !state.nightMode;
        },
        setRegion: (state, action) => {
            state.region = action.payload.region;
        },
        setSearch: (state, action) => {
            state.search = action.payload.search;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCountries.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getCountries.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(getCountries.fulfilled, (state, action) => {
            state.status = 'success';
            state.countries = action.payload;
          })
    }
});

export const { toggleNightMode, setRegion, setSearch } = countriesSlice.actions;
export default countriesSlice.reducer;
