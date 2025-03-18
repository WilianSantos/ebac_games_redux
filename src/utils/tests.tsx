import { render, RenderOptions } from '@testing-library/react'
import { PreloadedStateShapeFromReducersMapObject } from '@reduxjs/toolkit'

import { AppStore, RootState, configuraStore } from '../store'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>
  store?: AppStore
}

export function renderWithProviders(
  elemento: React.ReactElement,
  {
    preloadedState,
    store = configuraStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...renderOptions
    })
  }
}
