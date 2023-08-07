import {configureStore} from '@reduxjs/toolkit';
import {SeatReducer} from './Slice';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';

const Store = configureStore({
  reducer: {SeatReducer},
});
export default Store;
type RootState = ReturnType<typeof Store.getState>;
type AppDispatch = typeof Store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
