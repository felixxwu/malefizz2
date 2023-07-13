import { GameState } from '../types/gameTypes'
import { elNS } from '../utils/el'
import { playersGroup } from '../utils/getSvgGroup'

export function drawPlayers(gameState: GameState) {
  for (const player of gameState.players) {
    for (const position of player.positions) {
      const pos = gameState.map.find(circle => circle.id === position.circleId)!.position
      const existingPiece = playersGroup!.querySelector(`#p${position.pieceId}`)
      if (existingPiece) {
        existingPiece.setAttribute('cx', (pos!.x * 100).toString())
        existingPiece.setAttribute('cy', (pos!.y * 100).toString())
      } else {
        const positionCircle = elNS('circle')({
          attributes: {
            id: 'p' + position.pieceId,
            style: {
              transition: 'all 0.5s',
              filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.3))',
            },
          },
          readonlyAttributes: {
            cx: (pos!.x * 100).toString(),
            cy: (pos!.y * 100).toString(),
            r: '20',
            fill: player.colour,
          },
        })
        playersGroup!.appendChild(positionCircle)
      }
    }
  }
}