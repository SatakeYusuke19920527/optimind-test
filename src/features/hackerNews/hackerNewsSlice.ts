import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'
import {hnGetAllId} from '../../apis/index'

export const fetchGetData = createAsyncThunk('fetch/get', async () => {
  const res = hnGetAllId()
  return res
})

const initialState = {
  data: []
}

export const hackerNewsSlice = createSlice({
  name: 'hackerNews',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.data
      }
    })
  }
})

export const selectData = (state: RootState) => state.hackerNews.data

export default hackerNewsSlice.reducer