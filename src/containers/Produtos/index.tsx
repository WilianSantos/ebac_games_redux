import { useGetGamesQuery } from '../../services/api'

import Produto from '../../components/Produto'

import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetGamesQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
