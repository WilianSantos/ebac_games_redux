import { fireEvent, screen } from '@testing-library/react'

import Produto from '..'
import { renderWithProviders } from '../../../utils/tests'

describe('Teste do componente Produto', () => {
  const jogo = {
    id: 1,
    titulo: 'Elden Ring',
    plataformas: ['Windows'],
    precoAntigo: 199.9,
    preco: 197.88,
    categoria: 'RPG',
    imagem: ''
  }
  test('Deve renderizar o componente', () => {
    renderWithProviders(<Produto game={jogo} />)
    expect(screen.getByText('Elden Ring')).toBeInTheDocument()
  })
  test('Deve adicionar um item ao carrinho', () => {
    const { store } = renderWithProviders(<Produto game={jogo} />)
    const btn = screen.getByTestId('btn-add-carrinho')
    fireEvent.click(btn)
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
