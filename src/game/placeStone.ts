import { store } from '../data/store'
import { updateGameState } from '../utils/updateGameState'
import { getNextPlayer } from './playerTurns'

export async function placeStone(clickedCircleId: string) {
  await updateGameState(gameState => ({
    stones: gameState.stones.map(stone => {
      if (stone.circleId === null) {
        return {
          ...stone,
          circleId: clickedCircleId,
        }
      } else {
        return stone
      }
    }),

    ...(store.lastDieRoll === 6 ? {} : { playerTurn: getNextPlayer() }),
    dieRoll: null,
  }))
}
