import { createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");

export const returnData = createAction("app/returnData",(payload)=> ({payload: payload}));

export const datasActions = createAction("app/datasActions",(datas)=>{
  return {
    payload: datas
  }
});
