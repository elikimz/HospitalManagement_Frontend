


import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist/es/constants";
import { registerAPI } from "../features/auth/register/registerAPI";
import { loginAPI } from "../features/auth/login/loginAPI";
import { appointmentAPI } from "../features/appointments/appontmentAPI"; 
import { PatientsAPI } from "../features/patients/patientsAPI";
import { StaffAPI } from "../features/staff/staffAPI";
import { PrescriptionAPI } from "../features/prescriptions/prescriptionsAPI";
import { PharmacyAPI } from "../features/phamacy/phamacyAPI";
import { ReportsAPI } from "../features/reports/reportsAPI";
import {PaymentAPI} from "../patientFeatures/paymentsAPI";
import {ReceiptAPI} from "../patientFeatures/receiptAPI";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [registerAPI.reducerPath]: registerAPI.reducer,
  [loginAPI.reducerPath]: loginAPI.reducer,
  [appointmentAPI.reducerPath]: appointmentAPI.reducer,
  [PatientsAPI.reducerPath]: PatientsAPI.reducer,
  [StaffAPI.reducerPath]:StaffAPI.reducer,
  [PrescriptionAPI.reducerPath]:PrescriptionAPI.reducer,
  [PharmacyAPI.reducerPath]:PharmacyAPI.reducer,
  [ReportsAPI.reducerPath]:ReportsAPI.reducer,
  [PaymentAPI.reducerPath]:PaymentAPI.reducer,
  [ReceiptAPI.reducerPath]:ReceiptAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(registerAPI.middleware, loginAPI.middleware, appointmentAPI.middleware, PatientsAPI.middleware ,StaffAPI.middleware ,PrescriptionAPI.middleware ,PharmacyAPI.middleware ,ReportsAPI.middleware ,PaymentAPI.middleware,
      ReceiptAPI.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
