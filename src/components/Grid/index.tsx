import { useEffect, useState } from "react";
import Square from "../Square";
import './grid.css'

const novaPosicoes = Array(9).fill('')

type Type = {
  dark: boolean,
}

function Grid({ dark }: Type) {
  const [player, setPlayer] = useState<string>('X')
  const [tabela, setTabela] = useState<string[]>(novaPosicoes)
  const [mensagem, setMensagem] = useState<string>(`Vez do jogador ${player}`);
  const [vencedor, setVencedor] = useState<string>()

  
  useEffect(() => {
    const verificaVencedor = () => {
      const possibilidadesVitoria = [
        [tabela[0], tabela[1], tabela[2]],
        [tabela[3], tabela[4], tabela[5]],
        [tabela[6], tabela[7], tabela[8]],
  
        [tabela[0], tabela[3], tabela[6]],
        [tabela[1], tabela[4], tabela[7]],
        [tabela[2], tabela[5], tabela[8]],
  
        [tabela[0], tabela[4], tabela[8]],
        [tabela[2], tabela[4], tabela[6]]
      ]

      possibilidadesVitoria.forEach((possibilidade) => {
        if (possibilidade.every((lugar) => lugar === 'X')) {
          setMensagem('Jogador X venceu!')
          setVencedor('X')
        }
        if (possibilidade.every((lugar) => lugar === 'O')) {
          setMensagem('Jogador O venceu!')
          setVencedor('O')
        }
      })
    }

    const verificaEmpate = () => {
      if (tabela.every((item) => item !== '')) setMensagem('Empate')
    }

    setMensagem(`Vez do jogador ${player}`)
    
    verificaEmpate()
    verificaVencedor()
  }, [tabela, player])

  const handleClick = (currentPlayer: string, index: number) => {
    if (tabela[index] !== '') return;
    if (vencedor) return;

    const tabelaCopia = [...tabela];
    tabelaCopia[index] = currentPlayer;
    setTabela(tabelaCopia)

    const trocaPlayer = player === 'X' ? 'O' : 'X';
    setPlayer(trocaPlayer)
  }

  const resetGame = () => {
    setPlayer('X')
    setTabela(novaPosicoes)
    setMensagem(`Vez do jogador ${player}`)
    setVencedor('')
  }

  return (
    <>
      <h1 className={`h1Titulo ${dark ? 'dark' : ''}`}>{mensagem}</h1>
      <div className="grid">
        {tabela.map((_, index) => (
          <Square
          dark={ dark }
          className={`square-button`}
          value={ tabela[index] }
          onClick={ () => handleClick(player, index) }
          key={ index }
          />
        ))}    
      </ div>
      <button className={`botaoReset ${dark ? 'dark' : ''}`} onClick={ resetGame }>Recomeçar</button>
    </>
  )
}

export default Grid;