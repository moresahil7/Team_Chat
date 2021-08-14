import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId:0,

  },
  reducers: {
    enterRoom: (state , action) => {
      state.roomId = action.payload.roomId;
    },
   
  },
 
});

export const { enterRoom } = appSlice.actions;


export const selectRoomId = (state) => state.app.roomId;



export default appSlice.reducer;
