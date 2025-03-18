import { screen } from '@testing-library/react'

import Header from '..'
import { renderWithProviders } from '../../../utils/tests'

describe('Teste do componente Header', () => {
  test('Deve renderizar o componente', () => {
    renderWithProviders(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve rederizar com 2 itens no carrinho', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 197.88,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'Ação',
              imagem: '',
              plataformas: ['Windows'],
              preco: 197.88,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
