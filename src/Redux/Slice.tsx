/* eslint-disable no-sparse-arrays */
import {createSlice} from '@reduxjs/toolkit';

interface Iobj {
  data: {id: string; booked: boolean; gender: string; color: string}[];
}

const initialState: Iobj = {
  data: [
    {id: '1', booked: false, gender: '', color: ''},
    {id: '2', booked: false, gender: '', color: ''},
    {id: '3', booked: false, gender: '', color: ''},
    {id: '4', booked: false, gender: '', color: ''},
    {id: '5', booked: false, gender: '', color: ''},
    {id: '6', booked: false, gender: '', color: ''},
    {id: '7', booked: false, gender: '', color: ''},
    {id: '8', booked: false, gender: '', color: ''},
    {id: '9', booked: false, gender: '', color: ''},
    {id: '10', booked: false, gender: '', color: ''},
    {id: '11', booked: false, gender: '', color: ''},
    {id: '12', booked: false, gender: '', color: ''},
    {id: '13', booked: false, gender: '', color: ''},
    {id: '14', booked: false, gender: '', color: ''},
    {id: '15', booked: false, gender: '', color: ''},
    {id: '16', booked: false, gender: '', color: ''},
    {id: '17', booked: false, gender: '', color: ''},
    {id: '18', booked: false, gender: '', color: ''},
    {id: '19', booked: false, gender: '', color: ''},
    {id: '20', booked: false, gender: '', color: ''},
  ],
};

const Slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
    allocate: (state, action) => {
      let temp: {id: any; booked: any; gender: any; color: string}[] = [];
      if (typeof action.payload === 'string') {
        let received = JSON.parse(action.payload);
        received.map(i => {
          if (i.color === 'pink' && i.gender === 'Female') {
            temp.push({
              id: i.id,
              booked: i.booked,
              gender: i.gender,
              color: 'fuchsia',
            });
          } else if (i.color === 'pink' && i.gender === 'Male') {
            temp.push({
              id: i.id,
              booked: i.booked,
              gender: i.gender,
              color: 'blue',
            });
          } else {
            temp.push(i);
          }
        });
        state.data = temp;
      } else {
        state.data = action.payload;
      }
    },
    bookCnf: (state, action) => {
      let temp: {id: any; booked: any; gender: any; color: string}[] = [];
      if (typeof action.payload === 'string') {
        let received = JSON.parse(action.payload);
        received.map(i => {
          if (i.color === 'pink' && i.gender === 'Female') {
            temp.push({
              id: i.id,
              booked: i.booked,
              gender: i.gender,
              color: 'fuchsia',
            });
          } else if (i.color === 'pink' && i.gender === 'Male') {
            temp.push({
              id: i.id,
              booked: i.booked,
              gender: i.gender,
              color: 'blue',
            });
          } else {
            temp.push(i);
          }
        });
        state.data = temp;
      } else {
        action.payload.map(i => {
          if (i.color === 'pink' && i.gender == 'Female') {
            temp.push({
              id: i.id,
              booked: i.booked,
              gender: i.gender,
              color: 'fuchsia',
            });
          } else if (i.color == 'pink' && i.gender == 'Male') {
            temp.push({
              id: i.id,
              booked: i.booked,
              gender: i.gender,
              color: 'blue',
            });
          } else {
            temp.push(i);
          }
        });
        state.data = temp;
      }
    },
  },
});

export const {allocate, bookCnf} = Slice.actions;

export const SeatReducer = Slice.reducer;
