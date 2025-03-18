import {
  combineReducers,
  configureStore,
  PreloadedStateShapeFromReducersMapObject
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

// export const store = configureStore({
//   reducer: {
//     carrinho: carrinhoReducer,
//     [api.reducerPath]: api.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
// })

const RootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export function configuraStore(
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>
) {
  return configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof configuraStore>
