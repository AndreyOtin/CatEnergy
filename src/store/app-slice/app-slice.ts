import { createSlice } from '@reduxjs/toolkit';
import { SliceNameSpace, Status } from '../../consts/enum';

type InitialState = {
  status: Status;
}

const initialState: InitialState = {
  status: Status.Idle
};

const appSlice = createSlice({
  initialState,
  name: SliceNameSpace.App,
  reducers: {}
});

export default appSlice.reducer;
