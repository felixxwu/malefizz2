import { store } from '../data/store'
import { joinGame } from '../game/joinGame'
import { introSequence } from '../init'
import { players } from '../maps/parseMap'

export async function startLocalGame() {
  store.localGame = true
  store.gameState = store.mapSelectionScreen!
  store.currentMap = store.gameState.map
  await introSequence()
  await joinGame(players[0].id)
}
