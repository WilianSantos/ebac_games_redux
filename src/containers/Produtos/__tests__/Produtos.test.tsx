import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor } from '@testing-library/react'

import Produtos from '../'
import { renderWithProviders } from '../../../utils/tests'

const mocks = [
  {
    id: 1,
    titulo: 'Elden Ring',
    plataformas: ['Windows', 'Playstation', 'Xbox'],
    precoAntigo: 199.9,
    preco: 197.88,
    categoria: 'RPG',
    imagem: ''
  },
  {
    id: 2,
    titulo: 'Cyberpunk 2077',
    plataformas: ['Windows'],
    precoAntigo: 199.9,
    preco: 197.88,
    categoria: 'Ação',
    imagem: ''
  },
  {
    id: 3,
    titulo: 'The Witcher 3',
    plataformas: ['Windows', 'Playstation', 'Xbox'],
    precoAntigo: 199.9,
    preco: 197.88,
    categoria: 'RPG',
    imagem: ''
  },
  {
    id: 4,
    titulo: 'Dark Souls 3',
    plataformas: ['Windows', 'Playstation', 'Xbox', 'Switch'],
    precoAntigo: 199.9,
    preco: 197.88,
    categoria: 'RPG',
    imagem: ''
  },
  {
    id: 5,
    titulo: 'Sekiro',
    plataformas: ['Windows', 'Playstation', 'Xbox'],
    precoAntigo: 199.9,
    preco: 197.88,
    categoria: 'Ação',
    imagem: ''
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Teste do container Produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar o container corretamente com o texto de carregamento', () => {
    renderWithProviders(<Produtos />)

    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar o container', async () => {
    renderWithProviders(<Produtos />)
    await waitFor(() => expect(screen.getByText('Sekiro')).toBeInTheDocument())
  })
})
