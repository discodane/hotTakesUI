import { createAction } from "@reduxjs/toolkit";

export const UPDATE_CASTER = "UPDATE_CASTER";
export const updateCaster = createAction(UPDATE_CASTER);

export const initialState = {
  casters: [],
}

export const casterReducer = (state = initialState, action = {}) => {
  const { payload } = action;
  switch(action.type) {
    case UPDATE_CASTER: 
      return {
        casters: payload
      }
    default: 
      return state;
  }
}