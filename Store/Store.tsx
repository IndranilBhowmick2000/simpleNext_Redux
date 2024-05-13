import {configureStore} from '@reduxjs/toolkit'
import userReducer  from '../Slices/userSlice';

export function makestore() {
    return configureStore({
        reducer:{
            user: userReducer}
    })
}

export const store= makestore();

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch