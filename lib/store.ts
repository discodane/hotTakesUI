import { configureStore } from "@reduxjs/toolkit";
import { EnhancedStore } from '@reduxjs/toolkit/dist/configureStore';
import { casterReducer } from "./reducers/caster/caster.reducer";

let store: EnhancedStore;

export const setupStore = () => {
  store = configureStore({
    reducer: {
      casters: casterReducer,
    },
  });
  return store;
};

export const getStore = () => {
  if(!store) {
    return setupStore();
  }
  return store;
}

